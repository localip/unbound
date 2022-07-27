"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{listeners:()=>g,get:()=>h,toggle:()=>i,set:()=>j,initialize:()=>k,shutdown:()=>l,connectComponent:()=>m,makeStore:()=>n,subscribe:()=>o,unsubscribe:()=>p});const a=require("../components/hooks"),b=require("../../common/logger"),c=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=e(b);if(c&&c.has(a))return c.get(a);var d={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}(require("../../common/settings")),d=function(a){return a&&a.__esModule?a:{default:a}}(require("react"));function e(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(e=function(a){return a?c:b})(a)}const f=(0,b.createLogger)("Settings"),g={},h=c.get,i=c.toggle,j=c.set;function k(){c.on("change",q)}function l(){c.off("change",q)}function m(b,c,e){return f=>{let g=(0,a.useForceUpdate)(),h=a=>{(!e||e(a))&&g()};return d.default.useEffect(()=>(o(c,h),()=>p(c,h)),[]),d.default.createElement(b,Object.assign({},f,{settings:n(c)}))}}function n(a){return{settings:c.settings[a]??{},set:(b,c)=>j(a,b,c),get:(b,c)=>h(a,b,c),toggle:(b,c)=>i(a,b,c)}}function o(a,b){g[a]??=new Set,g[a].add(b)}function p(a,b){g[a]?.delete(b),g[a]?.size===0&&delete g[a]}function q(a){if(g[a.id])for(let b of[...g[a.id]])try{b(a)}catch(c){f.error("Failed to fire settings listener.",a,c)}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvYXBpL3NldHRpbmdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JjZVVwZGF0ZSB9IGZyb20gJ0Bjb21wb25lbnRzL2hvb2tzJztcclxuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xyXG5pbXBvcnQgKiBhcyBTZXR0aW5ncyBmcm9tICdAY29tbW9uL3NldHRpbmdzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcignU2V0dGluZ3MnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXQgPSBTZXR0aW5ncy5nZXQ7XHJcbmV4cG9ydCBjb25zdCB0b2dnbGUgPSBTZXR0aW5ncy50b2dnbGU7XHJcbmV4cG9ydCBjb25zdCBzZXQgPSBTZXR0aW5ncy5zZXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgU2V0dGluZ3Mub24oJ2NoYW5nZScsIG9uU2V0dGluZ3NDaGFuZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1dGRvd24oKSB7XHJcbiAgIFNldHRpbmdzLm9mZignY2hhbmdlJywgb25TZXR0aW5nc0NoYW5nZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0Q29tcG9uZW50KENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+LCBpZDogc3RyaW5nLCBwcmVkaWNhdGU/OiBGbik6IFJlYWN0LkZDPGFueT4ge1xyXG4gICByZXR1cm4gKHByb3BzKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcclxuICAgICAgY29uc3Qgb25DaGFuZ2UgPSAocGF5bG9hZCkgPT4ge1xyXG4gICAgICAgICBpZiAoIXByZWRpY2F0ZSB8fCBwcmVkaWNhdGUocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgc3Vic2NyaWJlKGlkLCBvbkNoYW5nZSk7XHJcbiAgICAgICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZShpZCwgb25DaGFuZ2UpO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHNldHRpbmdzPXttYWtlU3RvcmUoaWQpfSAvPjtcclxuICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdG9yZShpZDogc3RyaW5nKSB7XHJcbiAgIHJldHVybiB7XHJcbiAgICAgIHNldHRpbmdzOiBTZXR0aW5ncy5zZXR0aW5nc1tpZF0gPz8ge30sXHJcbiAgICAgIHNldDogKGtleSwgdmFsdWUpID0+IHNldChpZCwga2V5LCB2YWx1ZSksXHJcbiAgICAgIGdldDogKGtleSwgZGVmYXVsdHMpID0+IGdldChpZCwga2V5LCBkZWZhdWx0cyksXHJcbiAgICAgIHRvZ2dsZTogKGtleSwgZGVmYXVsdHMpID0+IHRvZ2dsZShpZCwga2V5LCBkZWZhdWx0cylcclxuICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShpZDogc3RyaW5nLCBjYWxsYmFjazogKC4uLmFyZ3MpID0+IGFueSkge1xyXG4gICBsaXN0ZW5lcnNbaWRdID8/PSBuZXcgU2V0KCk7XHJcbiAgIGxpc3RlbmVyc1tpZF0uYWRkKGNhbGxiYWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGlkOiBzdHJpbmcsIGNhbGxiYWNrOiAoLi4uYXJncykgPT4gYW55KSB7XHJcbiAgIGxpc3RlbmVyc1tpZF0/LmRlbGV0ZShjYWxsYmFjayk7XHJcblxyXG4gICBpZiAobGlzdGVuZXJzW2lkXT8uc2l6ZSA9PT0gMCkge1xyXG4gICAgICBkZWxldGUgbGlzdGVuZXJzW2lkXTtcclxuICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblNldHRpbmdzQ2hhbmdlKHBheWxvYWQpIHtcclxuICAgaWYgKCFsaXN0ZW5lcnNbcGF5bG9hZC5pZF0pIHJldHVybjtcclxuXHJcbiAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgWy4uLmxpc3RlbmVyc1twYXlsb2FkLmlkXV0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgbGlzdGVuZXIocGF5bG9hZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgTG9nZ2VyLmVycm9yKCdGYWlsZWQgdG8gZmlyZSBzZXR0aW5ncyBsaXN0ZW5lci4nLCBwYXlsb2FkLCBlKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn07Il0sIm5hbWVzIjpbImxpc3RlbmVycyIsImdldCIsInRvZ2dsZSIsInNldCIsImluaXRpYWxpemUiLCJzaHV0ZG93biIsImNvbm5lY3RDb21wb25lbnQiLCJtYWtlU3RvcmUiLCJzdWJzY3JpYmUiLCJ1bnN1YnNjcmliZSIsIkxvZ2dlciIsImNyZWF0ZUxvZ2dlciIsIlNldHRpbmdzIiwib24iLCJvblNldHRpbmdzQ2hhbmdlIiwib2ZmIiwiQ29tcG9uZW50IiwiaWQiLCJwcmVkaWNhdGUiLCJwcm9wcyIsImZvcmNlVXBkYXRlIiwidXNlRm9yY2VVcGRhdGUiLCJvbkNoYW5nZSIsInBheWxvYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInNldHRpbmdzIiwia2V5IiwidmFsdWUiLCJkZWZhdWx0cyIsImNhbGxiYWNrIiwiU2V0IiwiYWRkIiwiZGVsZXRlIiwic2l6ZSIsImxpc3RlbmVyIiwiZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxnS0FPYUEsU0FBUyxLQUFUQSxDQUFTLENBRVRDLEdBQUcsS0FBSEEsQ0FBRyxDQUNIQyxNQUFNLEtBQU5BLENBQU0sQ0FDTkMsR0FBRyxLQUFIQSxDQUFHLENBRUFDLFVBQVUsS0FB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