"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{connectComponent:()=>m,get:()=>h,initialize:()=>k,listeners:()=>g,makeStore:()=>n,set:()=>j,shutdown:()=>l,subscribe:()=>o,toggle:()=>i,unsubscribe:()=>p});const a=require("../components/hooks"),b=require("../../common/logger"),c=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=e(b);if(c&&c.has(a))return c.get(a);var d={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(d,g,h):d[g]=a[g]}return d.default=a,c&&c.set(a,d),d}(require("../../common/settings")),d=function(a){return a&&a.__esModule?a:{default:a}}(require("react"));function e(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(e=function(a){return a?c:b})(a)}const f=(0,b.createLogger)("Settings"),g={},h=c.get,i=c.toggle,j=c.set;function k(){c.on("change",q)}function l(){c.off("change",q)}function m(b,c,e){return f=>{let g=(0,a.useForceUpdate)(),h=a=>{(!e||e(a))&&g()};return d.default.useEffect(()=>(o(c,h),()=>p(c,h)),[]),d.default.createElement(b,Object.assign({},f,{settings:n(c)}))}}function n(a){return{settings:c.settings[a]??{},set:(b,c)=>j(a,b,c),get:(b,c)=>h(a,b,c),toggle:(b,c)=>i(a,b,c)}}function o(a,b){g[a]??=new Set,g[a].add(b)}function p(a,b){g[a]?.delete(b),g[a]?.size===0&&delete g[a]}function q(a){if(g[a.id])for(let b of[...g[a.id]])try{b(a)}catch(c){f.error("Failed to fire settings listener.",a,c)}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvYXBpL3NldHRpbmdzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGb3JjZVVwZGF0ZSB9IGZyb20gJ0Bjb21wb25lbnRzL2hvb2tzJztcclxuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAnQGNvbW1vbi9sb2dnZXInO1xyXG5pbXBvcnQgKiBhcyBTZXR0aW5ncyBmcm9tICdAY29tbW9uL3NldHRpbmdzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ2dlciA9IGNyZWF0ZUxvZ2dlcignU2V0dGluZ3MnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXQgPSBTZXR0aW5ncy5nZXQ7XHJcbmV4cG9ydCBjb25zdCB0b2dnbGUgPSBTZXR0aW5ncy50b2dnbGU7XHJcbmV4cG9ydCBjb25zdCBzZXQgPSBTZXR0aW5ncy5zZXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICBTZXR0aW5ncy5vbignY2hhbmdlJywgb25TZXR0aW5nc0NoYW5nZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHV0ZG93bigpIHtcclxuICBTZXR0aW5ncy5vZmYoJ2NoYW5nZScsIG9uU2V0dGluZ3NDaGFuZ2UpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29ubmVjdENvbXBvbmVudChDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PiwgaWQ6IHN0cmluZywgcHJlZGljYXRlPzogRm4pOiBSZWFjdC5GQzxhbnk+IHtcclxuICByZXR1cm4gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBmb3JjZVVwZGF0ZSA9IHVzZUZvcmNlVXBkYXRlKCk7XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChwYXlsb2FkKSA9PiB7XHJcbiAgICAgIGlmICghcHJlZGljYXRlIHx8IHByZWRpY2F0ZShwYXlsb2FkKSkge1xyXG4gICAgICAgIGZvcmNlVXBkYXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc3Vic2NyaWJlKGlkLCBvbkNoYW5nZSk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZShpZCwgb25DaGFuZ2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gc2V0dGluZ3M9e21ha2VTdG9yZShpZCl9IC8+O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3RvcmUoaWQ6IHN0cmluZykge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3Muc2V0dGluZ3NbaWRdID8/IHt9LFxyXG4gICAgc2V0OiAoa2V5LCB2YWx1ZSkgPT4gc2V0KGlkLCBrZXksIHZhbHVlKSxcclxuICAgIGdldDogKGtleSwgZGVmYXVsdHMpID0+IGdldChpZCwga2V5LCBkZWZhdWx0cyksXHJcbiAgICB0b2dnbGU6IChrZXksIGRlZmF1bHRzKSA9PiB0b2dnbGUoaWQsIGtleSwgZGVmYXVsdHMpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShpZDogc3RyaW5nLCBjYWxsYmFjazogKC4uLmFyZ3MpID0+IGFueSkge1xyXG4gIGxpc3RlbmVyc1tpZF0gPz89IG5ldyBTZXQoKTtcclxuICBsaXN0ZW5lcnNbaWRdLmFkZChjYWxsYmFjayk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnN1YnNjcmliZShpZDogc3RyaW5nLCBjYWxsYmFjazogKC4uLmFyZ3MpID0+IGFueSkge1xyXG4gIGxpc3RlbmVyc1tpZF0/LmRlbGV0ZShjYWxsYmFjayk7XHJcblxyXG4gIGlmIChsaXN0ZW5lcnNbaWRdPy5zaXplID09PSAwKSB7XHJcbiAgICBkZWxldGUgbGlzdGVuZXJzW2lkXTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2V0dGluZ3NDaGFuZ2UocGF5bG9hZCkge1xyXG4gIGlmICghbGlzdGVuZXJzW3BheWxvYWQuaWRdKSByZXR1cm47XHJcblxyXG4gIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgWy4uLmxpc3RlbmVyc1twYXlsb2FkLmlkXV0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxpc3RlbmVyKHBheWxvYWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBMb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBmaXJlIHNldHRpbmdzIGxpc3RlbmVyLicsIHBheWxvYWQsIGUpO1xyXG4gICAgfVxyXG4gIH1cclxufTsiXSwibmFtZXMiOlsiY29ubmVjdENvbXBvbmVudCIsImdldCIsImluaXRpYWxpemUiLCJsaXN0ZW5lcnMiLCJtYWtlU3RvcmUiLCJzZXQiLCJzaHV0ZG93biIsInN1YnNjcmliZSIsInRvZ2dsZSIsInVuc3Vic2NyaWJlIiwiTG9nZ2VyIiwiY3JlYXRlTG9nZ2VyIiwiU2V0dGluZ3MiLCJvbiIsIm9uU2V0dGluZ3NDaGFuZ2UiLCJvZmYiLCJDb21wb25lbnQiLCJpZCIsInByZWRpY2F0ZSIsInByb3BzIiwiZm9yY2VVcGRhdGUiLCJ1c2VGb3JjZVVwZGF0ZSIsIm9uQ2hhbmdlIiwicGF5bG9hZCIsIlJlYWN0IiwidXNlRWZmZWN0Iiwic2V0dGluZ3MiLCJrZXkiLCJ2YWx1ZSIsImRlZmF1bHRzIiwiY2FsbGJhY2siLCJTZXQiLCJhZGQiLCJkZWxldGUiLCJzaXplIiwibGlzdGVuZXIiLCJlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLGdLQXFCZ0JBLGdCQUFnQixLQUFoQkEsQ0FBZ0IsQ0FabkJDLEdBQUcsS0FBSEEsQ0FBRyxDQUlBQyxVQUFVLEtBQVZBLENBQVUsQ0FOYkMsU0FBUyxLQUFUQSxDQUFTLENBZ0NOQyxTQUFTLEtBQVRBLENBQVMsQ0E1QlpDLEdBQUcsS0FBSEEsQ0FBRyxDQU1BQyxRQUFRLEtBQVJBLENBQVEsQ0Er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