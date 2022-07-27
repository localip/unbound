"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{initialize:()=>j,shutdown:()=>k,start:()=>l,stop:()=>m});const a=require("../../../common/logger"),b=f(require("../../../common/settings")),c=f(require("./registry")),d=require("../../../common/utilities/index");function e(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(e=function(a){return a?c:b})(a)}function f(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=e(b);if(c&&c.has(a))return c.get(a);var d={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}const g=(0,a.createLogger)("Built-In"),h=(0,d.debounce)(n,250),i={};async function j(){b.on("change",h);let a=Object.keys(c);for(let d=0;d<a.length;d++){let e=a[d];await l(e)}}async function k(){b.off("change",h);let a=Object.keys(c);for(let d=0;d<a.length;d++){let e=a[d];await m(e)}}async function l(a){let d=c[a];if(b.get("unbound",d.data.id,d.data.default)&& !i[d.data.id]&&d)try{d.data.wait?await d.initialize():d.initialize(),i[d.data.id]=!0,g.log(`${d.data.name} was initialized.`)}catch(e){g.error(`Failed to start ${d.data.name}.`,e.message)}}async function m(a){let b=c[a];if(i[b.data.id]&&b)try{b.data.wait?await b.shutdown():b.shutdown(),delete i[b.data.id],g.log(`${b.data.name} was stopped.`)}catch(d){g.error(`Failed to stop ${b.data.name}.`,d.message)}}async function n({key:a,value:b}){let d=Object.entries(c).find(([,b])=>b.data.id===a);d&&(b?await l(d[0]):await m(d[0]))}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9idWlsdGlucy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XHJcbmltcG9ydCAqIGFzIFNldHRpbmdzIGZyb20gJ0Bjb21tb24vc2V0dGluZ3MnO1xyXG5pbXBvcnQgKiBhcyBCdWlsdElucyBmcm9tICcuL3JlZ2lzdHJ5JztcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuXHJcbmNvbnN0IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcignQnVpbHQtSW4nKTtcclxuXHJcbmNvbnN0IGhhbmRsZVNldHRpbmdzQ2hhbmdlID0gZGVib3VuY2Uob25TZXR0aW5nc0NoYW5nZSwgMjUwKTtcclxuXHJcbmludGVyZmFjZSBTZXR0aW5nc0NoYW5nZSB7XHJcbiAgIGtleTogc3RyaW5nO1xyXG4gICB2YWx1ZTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3Qgc3RhcnRlZDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICBTZXR0aW5ncy5vbignY2hhbmdlJywgaGFuZGxlU2V0dGluZ3NDaGFuZ2UpO1xyXG5cclxuICAgY29uc3QgYnVpbHRpbnMgPSBPYmplY3Qua2V5cyhCdWlsdElucyk7XHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVpbHRpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbmFtZSA9IGJ1aWx0aW5zW2ldO1xyXG4gICAgICBhd2FpdCBzdGFydChuYW1lKTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2h1dGRvd24oKSB7XHJcbiAgIFNldHRpbmdzLm9mZignY2hhbmdlJywgaGFuZGxlU2V0dGluZ3NDaGFuZ2UpO1xyXG5cclxuICAgY29uc3QgYnVpbHRpbnMgPSBPYmplY3Qua2V5cyhCdWlsdElucyk7XHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVpbHRpbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbmFtZSA9IGJ1aWx0aW5zW2ldO1xyXG4gICAgICBhd2FpdCBzdG9wKG5hbWUpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdGFydChuYW1lOiBzdHJpbmcpIHtcclxuICAgY29uc3QgaW5zdGFuY2UgPSBCdWlsdEluc1tuYW1lXTtcclxuXHJcbiAgIGlmICghU2V0dGluZ3MuZ2V0KCd1bmJvdW5kJywgaW5zdGFuY2UuZGF0YS5pZCwgaW5zdGFuY2UuZGF0YS5kZWZhdWx0KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbiAgIGlmIChzdGFydGVkW2luc3RhbmNlLmRhdGEuaWRdIHx8ICFpbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbiAgIHRyeSB7XHJcbiAgICAgIGlmIChpbnN0YW5jZS5kYXRhLndhaXQpIHtcclxuICAgICAgICAgYXdhaXQgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXJ0ZWRbaW5zdGFuY2UuZGF0YS5pZF0gPSB0cnVlO1xyXG4gICAgICBMb2dnZXIubG9nKGAke2luc3RhbmNlLmRhdGEubmFtZX0gd2FzIGluaXRpYWxpemVkLmApO1xyXG4gICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIExvZ2dlci5lcnJvcihgRmFpbGVkIHRvIHN0YXJ0ICR7aW5zdGFuY2UuZGF0YS5uYW1lfS5gLCBlLm1lc3NhZ2UpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdG9wKG5hbWU6IHN0cmluZykge1xyXG4gICBjb25zdCBpbnN0YW5jZSA9IEJ1aWx0SW5zW25hbWVdO1xyXG5cclxuICAgaWYgKCFzdGFydGVkW2luc3RhbmNlLmRhdGEuaWRdIHx8ICFpbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxuXHJcbiAgIHRyeSB7XHJcbiAgICAgIGlmIChpbnN0YW5jZS5kYXRhLndhaXQpIHtcclxuICAgICAgICAgYXdhaXQgaW5zdGFuY2Uuc2h1dGRvd24oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgaW5zdGFuY2Uuc2h1dGRvd24oKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGVsZXRlIHN0YXJ0ZWRbaW5zdGFuY2UuZGF0YS5pZF07XHJcbiAgICAgIExvZ2dlci5sb2coYCR7aW5zdGFuY2UuZGF0YS5uYW1lfSB3YXMgc3RvcHBlZC5gKTtcclxuICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBMb2dnZXIuZXJyb3IoYEZhaWxlZCB0byBzdG9wICR7aW5zdGFuY2UuZGF0YS5uYW1lfS5gLCBlLm1lc3NhZ2UpO1xyXG4gICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG9uU2V0dGluZ3NDaGFuZ2UoeyBrZXksIHZhbHVlIH06IFNldHRpbmdzQ2hhbmdlKSB7XHJcbiAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuZW50cmllcyhCdWlsdElucykuZmluZCgoWywgdl0pID0+IHYuZGF0YS5pZCA9PT0ga2V5KTtcclxuICAgaWYgKCFwYXlsb2FkKSByZXR1cm47XHJcblxyXG4gICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIGF3YWl0IHN0b3AocGF5bG9hZFswXSk7XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHN0YXJ0KHBheWxvYWRbMF0pO1xyXG4gICB9XHJcbn0iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZSIsInNodXRkb3duIiwic3RhcnQiLCJzdG9wIiwiTG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwiaGFuZGxlU2V0dGluZ3NDaGFuZ2UiLCJkZWJvdW5jZSIsIm9uU2V0dGluZ3NDaGFuZ2UiLCJzdGFydGVkIiwiU2V0dGluZ3MiLCJvbiIsImJ1aWx0aW5zIiwiT2JqZWN0Iiwia2V5cyIsIkJ1aWx0SW5zIiwiaSIsImxlbmd0aCIsIm5hbWUiLCJvZmYiLCJpbnN0YW5jZSIsImdldCIsImRhdGEiLCJpZCIsImRlZmF1bHQiLCJ3YWl0IiwibG9nIiwiZSIsImVycm9yIiwibWVzc2FnZSIsImtleSIsInZhbHVlIiwicGF5bG9hZCIsImVudHJpZXMiLCJmaW5kIiwidiJdLCJtYXBwaW5ncyI6IkFBQUEsZ0tBZ0JzQkEsVUFBVSxLQUFWQSxDQUFVLENBVVZDLFFBQVEsS0FBUkEsQ0FBUSxDQVVSQyxLQUFLLEtBQUxBLENBQUssQ0F5QkxDLElBQUksS0FBSkEsQ0FBSSxtQkE3REcsd0JBQWdCLGNBQ25CLDBCQUFrQixlQUNsQixZQUFZLGFBQ2IsaUNBQVksK2pCQUVyQyxNQUFNQyxDQUFNLENBQUdDLEdBQUFBLENBQVksYUFBQSxFQUFDLFVBQVUsQ0FBQyxDQUVqQ0MsQ0FBb0IsQ0FBR0MsR0FBQUEsQ0FBUSxTQUFBLEVBQUNDLENBQWdCLENBQUUsR0FBRyxDQUFDLENBT3REQyxDQUFPLENBQTRCLEVBQUUsQUFUSCxBQVdqQyxnQkFBZVQsQ0FBVSxFQUFHLENBQ2hDVSxDQUFRLENBQUNDLEVBQUUsQ0FBQyxRQUFRLENBQUVMLENBQW9CLENBQUMsQUFFM0MsS0FBTU0sQ0FBUSxDQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsQ0FBUSxDQUFDLEFBQUMsQUFDdkMsS0FBSyxJQUFJQyxDQUFDLENBQUcsQ0FBQyxDQUFFQSxDQUFDLENBQUdKLENBQVEsQ0FBQ0ssTUFBTSxDQUFFRCxDQUFDLEVBQUUsQ0FBRSxDQUN2QyxJQUFNRSxDQUFJLENBQUdOLENBQVEsQ0FBQ0ksQ0FBQyxDQUFDLEFBQUMsQUFDekIsT0FBTWQsQ0FBSyxDQUFDZ0IsQ0FBSSxDQUFDLENBQ25CLENBQ0gsQUFFTSxlQUFlakIsQ0FBUSxFQUFHLENBQzlCUyxDQUFRLENBQUNTLEdBQUcsQ0FBQyxRQUFRLENBQUViLENBQW9CLENBQUMsQUFFNUMsS0FBTU0sQ0FBUSxD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