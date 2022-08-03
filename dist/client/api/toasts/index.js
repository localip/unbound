"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(exports,{events:()=>r,once:()=>a,off:()=>u,on:()=>d,toasts:()=>s,container:()=>c,initialize:()=>initialize,shutdown:()=>shutdown,open:()=>open,close:()=>close,closeAll:()=>closeAll,clear:()=>clear});const e=_interopRequireDefault(require("./components/ToastsContainer")),t=require("../../modules/webpack/common"),i=require("../../../common/utilities/index"),n=_interopRequireDefault(require("react")),o=_interopRequireDefault(require("../../styles/api/toasts.css")),l=_interopRequireDefault(require("events"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}o.default.append();const r=new l.default,a=r.once.bind(r),u=r.off.bind(r),d=r.on.bind(r),s={storage:{}},c=document.createElement("div");function initialize(){setImmediate(()=>{t.ReactDOM.render(n.default.createElement(e.default,{manager:this,toasts:s}),c),document.body.appendChild(c)})}function shutdown(){c.remove()}function open(e){return(e.id??=(0,i.uuid)(5),e.time=Date.now(),s.storage[e.id])?open({...e,id:(0,i.uuid)(5)}):(s.storage[e.id]=e,r.emit("change",e),r.emit("opened",e),e.id)}function close(e,t=!1){let i=s.storage[e];i&&(t?delete s.storage[i.id]:s.storage[i.id]={...i,closing:!0},r.emit("change",i),r.emit("closed",i))}function closeAll(){for(let e in s.storage)close(e);r.emit("change"),r.emit("closed-all")}function clear(){for(let e in s.storage)delete s[e];r.emit("change"),r.emit("cleared")}c.className="unbound-toasts"
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvYXBpL3RvYXN0cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBUb2FzdE9wdGlvbnMgfSBmcm9tICcuL2NvbXBvbmVudHMvVG9hc3QnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9Ub2FzdHNDb250YWluZXInO1xyXG5pbXBvcnQgeyBSZWFjdERPTSB9IGZyb20gJ0B3ZWJwYWNrL2NvbW1vbic7XHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnQHN0eWxlcy9hcGkvdG9hc3RzLmNzcyc7XHJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRzJztcclxuc3R5bGVzLmFwcGVuZCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBvbmNlID0gZXZlbnRzLm9uY2UuYmluZChldmVudHMpO1xyXG5leHBvcnQgY29uc3Qgb2ZmID0gZXZlbnRzLm9mZi5iaW5kKGV2ZW50cyk7XHJcbmV4cG9ydCBjb25zdCBvbiA9IGV2ZW50cy5vbi5iaW5kKGV2ZW50cyk7XHJcblxyXG5leHBvcnQgY29uc3QgdG9hc3RzID0geyBzdG9yYWdlOiB7fSB9O1xyXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhaW5lci5jbGFzc05hbWUgPSAndW5ib3VuZC10b2FzdHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKTogdm9pZCB7XHJcbiAgIC8vIERvbnQgZnJlZXplIHRoZSB0aHJlYWQgOihcclxuICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcclxuICAgICAgUmVhY3RET00ucmVuZGVyKDxDb250YWluZXIgbWFuYWdlcj17dGhpc30gdG9hc3RzPXt0b2FzdHN9IC8+LCBjb250YWluZXIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1dGRvd24oKSB7XHJcbiAgIGNvbnRhaW5lci5yZW1vdmUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW4ob3B0aW9uczogVG9hc3RPcHRpb25zICYgUmVjb3JkPHN0cmluZywgYW55Pikge1xyXG4gICBvcHRpb25zLmlkID8/PSB1dWlkKDUpO1xyXG4gICBvcHRpb25zLnRpbWUgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgaWYgKHRvYXN0cy5zdG9yYWdlW29wdGlvbnMuaWRdKSB7XHJcbiAgICAgIHJldHVybiBvcGVuKHsgLi4ub3B0aW9ucywgaWQ6IHV1aWQoNSkgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHRvYXN0cy5zdG9yYWdlW29wdGlvbnMuaWRdID0gb3B0aW9ucztcclxuICAgZXZlbnRzLmVtaXQoJ2NoYW5nZScsIG9wdGlvbnMpO1xyXG4gICBldmVudHMuZW1pdCgnb3BlbmVkJywgb3B0aW9ucyk7XHJcblxyXG4gICByZXR1cm4gb3B0aW9ucy5pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlKGlkLCBpbnN0YW50ID0gZmFsc2UpIHtcclxuICAgY29uc3QgdG9hc3QgPSB0b2FzdHMuc3RvcmFnZVtpZF07XHJcbiAgIGlmICghdG9hc3QpIHJldHVybjtcclxuXHJcbiAgIGlmICghaW5zdGFudCkge1xyXG4gICAgICB0b2FzdHMuc3RvcmFnZVt0b2FzdC5pZF0gPSB7IC4uLnRvYXN0LCBjbG9zaW5nOiB0cnVlIH07XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSB0b2FzdHMuc3RvcmFnZVt0b2FzdC5pZF07XHJcbiAgIH1cclxuXHJcbiAgIGV2ZW50cy5lbWl0KCdjaGFuZ2UnLCB0b2FzdCk7XHJcbiAgIGV2ZW50cy5lbWl0KCdjbG9zZWQnLCB0b2FzdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUFsbCgpIHtcclxuICAgZm9yIChjb25zdCB0b2FzdCBpbiB0b2FzdHMuc3RvcmFnZSkge1xyXG4gICAgICBjbG9zZSh0b2FzdCk7XHJcbiAgIH1cclxuXHJcbiAgIGV2ZW50cy5lbWl0KCdjaGFuZ2UnKTtcclxuICAgZXZlbnRzLmVtaXQoJ2Nsb3NlZC1hbGwnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICBmb3IgKGNvbnN0IHRvYXN0IGluIHRvYXN0cy5zdG9yYWdlKSB7XHJcbiAgICAgIGRlbGV0ZSB0b2FzdHNbdG9hc3RdO1xyXG4gICB9XHJcblxyXG4gICBldmVudHMuZW1pdCgnY2hhbmdlJyk7XHJcbiAgIGV2ZW50cy5lbWl0KCdjbGVhcmVkJyk7XHJcbn0iXSwibmFtZXMiOlsiZXZlbnRzIiwib25jZSIsIm9mZiIsIm9uIiwidG9hc3RzIiwiY29udGFpbmVyIiwiaW5pdGlhbGl6ZSIsInNodXRkb3duIiwib3BlbiIsImNsb3NlIiwiY2xvc2VBbGwiLCJjbGVhciIsInN0eWxlcyIsImFwcGVuZCIsIkV2ZW50RW1pdHRlciIsImJpbmQiLCJzdG9yYWdlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0SW1tZWRpYXRlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJDb250YWluZXIiLCJtYW5hZ2VyIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwib3B0aW9ucyIsImlkIiwidXVpZCIsInRpbWUiLCJEYXRlIiwibm93IiwiZW1pdCIsImluc3RhbnQiLCJ0b2FzdCIsImNsb3NpbmciLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLHdLQVVhQSxNQUFNLEtBQU5BLENBQU0sQ0FFTkMsSUFBSSxLQUFKQSxDQUFJLENBQ0pDLEdBQUcsS0FBSEEsQ0FBRyxDQUNIQyxFQUFFLEtBQUZBLENBQUUsQ0FFRkMsTUFBTSxLQUFO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