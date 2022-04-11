const bindAll = require('./utilities/bindAll');
const { createLogger } = require('./logger');

const Logger = createLogger('Patcher');

class Patcher {
   constructor() {
      this.patches = [];

      bindAll(this, [
         'unpatchAll',
         'after',
         'before',
         'instead',
         'create'
      ]);
   }

   create(name) {
      return {
         getPatchesByCaller: this.getPatchesByCaller,
         instead: (...args) => this.instead(name, ...args),
         after: (...args) => this.after(name, ...args),
         before: (...args) => this.before(name, ...args),
         unpatchAll: () => this.unpatchAll(name)
      };
   }

   getPatchesByCaller(id) {
      if (!id) return [];
      const patches = [];

      for (const patch of this.patches) {
         for (const child of patch.patches) {
            if (child.caller === id) {
               patches.push(child);
            }
         }
      }

      return patches;
   }

   unpatchAll(caller) {
      const patches = this.getPatchesByCaller(caller);
      if (!patches.length) return;

      for (const patch of patches) {
         patch.unpatch();
      }
   }

   override(patch) {
      return function () {
         if (
            !patch.patches?.before.length &&
            !patch.patches?.after.length &&
            !patch.patches?.instead.length
         ) {
            patch.unpatch();
            return patch.original.apply(this, arguments);
         }

         let res;
         let args = arguments;

         const before = patch.patches.before;
         for (let i = 0; i < before.length; i++) {
            try {
               const temp = before[i].callback(this, args, patch.original.bind(this));
               if (Array.isArray(temp)) args = temp;
            } catch (error) {
               Logger.error(`Could not fire before patch for ${patch.func} of ${before[i].caller}`, error);
            }
         }

         const instead = patch.patches.instead;
         if (!instead.length) {
            res = patch.original.apply(this, args);
         } else {
            for (let i = 0; i < instead.length; i++) {
               try {
                  const ret = instead[i].callback(this, args, patch.original.bind(this));
                  if (typeof ret !== 'undefined') res = ret;
               } catch (error) {
                  Logger.error(`Could not fire instead patch for ${patch.func} of ${instead[i].caller}`, error);
               }
            }
         }

         const after = patch.patches.after;
         for (let i = 0; i < after.length; i++) {
            try {
               const ret = after[i].callback(this, args, res, ret => (res = ret));
               if (typeof ret !== 'undefined') res = ret;
            } catch (error) {
               Logger.error(`Could not fire after patch for ${patch.func} of ${after[i].caller}`, error);
            }
         }

         if (patch.once) {
            patch.unpatch();
         }

         return res;
      };
   };

   push([caller, mdl, func, cb, type, once]) {
      const patch = {
         caller,
         mdl,
         func,
         original: mdl[func],
         once,
         unpatch: () => {
            patch.mdl[patch.func] = patch.original;
            patch.patches = {
               before: [],
               after: [],
               instead: []
            };
         },
         patches: {
            before: [],
            after: [],
            instead: []
         }
      };

      mdl[func] = this.override(patch);
      Object.assign(mdl[func], patch.original, {
         toString: () => patch.original.toString(),
         '__original': patch.original
      });

      this.patches.push(patch);
      return patch;
   }

   get(caller, mdl, func, cb, type, once) {
      const patch = this.patches.find(p => p.mdl == mdl && p.func == func);
      if (patch) return patch;

      return this.push(arguments);
   }

   patch(caller, mdl, func, callback, type = 'after', once = false) {
      if (!caller || typeof caller !== 'string') {
         throw new TypeError('first argument "caller" must be of type string');
      } else if (!mdl || !['function', 'object'].includes(typeof mdl)) {
         throw new TypeError('second argument "mdl" must be of type function or object');
      } else if (!func || typeof func !== 'string') {
         throw new TypeError('third argument "func" must be of type string');
      } else if (!callback || typeof callback !== 'function') {
         throw new TypeError('fourth argument "callback" must be of type function');
      } else if (!type || typeof type !== 'string' || !['after', 'before', 'instead'].includes(type)) {
         throw new TypeError('fifth argument "type" must be of type string and any of the three: after, before, instead');
      } else if (typeof mdl[func] === 'undefined') {
         throw new ReferenceError(`function ${func} does not exist on the second argument (object or function)`);
      }

      const current = this.get(...arguments);

      const patch = {
         caller,
         type,
         id: current.patches?.length ?? 0,
         callback,
         unpatch: () => {
            // Remove the original patch this callback was from
            const individual = current.patches?.[type].findIndex(p => p.id === patch.id && p.type === type);
            if (~individual) current.patches?.[type].splice(individual, 1);

            if (
               current.patches?.before.length ||
               current.patches?.after.length ||
               current.patches?.instead.length
            ) return;

            // If no other patches on the module are remaining, completely remove all patches
            // and re-assign the original module to its original place.
            const module = this.patches.findIndex(p => p.mdl == mdl && p.func == func);

            if (!~module) return;
            this.patches[module]?.unpatch();
            this.patches.splice(module, 1);
         }
      };

      current.patches[type] ??= [];
      current.patches[type].push(patch);

      return patch.unpatch;
   }

   after(caller, mdl, func, callback, once) {
      return this.patch(caller, mdl, func, callback, 'after', once);
   }

   before(caller, mdl, func, callback, once) {
      return this.patch(caller, mdl, func, callback, 'before', once);
   }

   instead(caller, mdl, func, callback, once) {
      return this.patch(caller, mdl, func, callback, 'instead', once);
   }
};

module.exports = new Patcher();