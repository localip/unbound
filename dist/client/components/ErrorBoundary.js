"use strict";const e=require("./discord"),t=require("@webpack"),a=require("../../common/constants"),l=_interopRequireDefault(require("./Divider")),r=_interopRequireDefault(require("react")),s=_interopRequireDefault(require("../styles/components/errorboundary.css")),n=_interopRequireDefault(require("./Icon"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}s.default.append();const c=(0,t.findByDisplayName)("IntegrationInfo");class ErrorBoundary extends r.default.PureComponent{constructor(e){super(e),this.state={error:!1}}componentDidCatch(e,{componentStack:t}){let a=`${e.name?`${e.name}: `:""}${e.message}`,l=this.cleanError(e.stack,a),r=this.cleanError(t);this.setState({error:!0,component:r,js:l})}cleanError(e,t){let clean=e=>Boolean(e)&&!e.includes("/assets"),l=e.split(a.Regex.newline);if(t){let r=l.findIndex(e=>e===t);null!==r&&l.splice(r,1)}return{stack:l.filter(clean).join("\n").replace(/    /g,""),message:t}}render(){if(this.state.error){let t=this.props.fallback;if(t)return r.default.createElement(t,Object.assign({},this.state));let a={name:"JavaScript Error",description:"Runtime error provided by JavaScript.",icon:"Close",state:"js"},l={name:"Component Lifecycle",description:"Lifecycle error provided by React.",icon:"Synced",state:"component"};return r.default.createElement("div",{className:"unbound-boundary-wrapper"},r.default.createElement("img",{src:"/assets/b5eb2f7d6b3f8cc9b60be4a5dcf28015.svg",className:"unbound-boundary-sad-wumpus"}),r.default.createElement(e.Text,{color:e.Text.Colors.MUTED,size:e.Text.Sizes.SIZE_16,className:"unbound-boundary-notice"},"Oops, we had a fucky wucky."),r.default.createElement(e.RelativeTooltip,{text:"Retry"},e=>r.default.createElement(n.default,Object.assign({},e,{className:"unbound-boundary-retry",name:"Replay",width:32,height:32,onClick:()=>this.setState({error:!1})}),"Retry")),this.renderStack(a),this.renderStack(l))}return this.props.children}renderStack({name:t,state:a,description:s,icon:i}){let u=this.state[`${a}Open`]?? !1,d=this.state[a];return d?r.default.createElement(e.Card,{onClick:()=>this.setState({[`${a}Open`]:!u}),className:"unbound-boundary-integration-card"},r.default.createElement("div",{className:"unbound-boundary-align"},r.default.createElement(c,{name:t,icon:e=>r.default.createElement(n.default,Object.assign({name:i},e)),details:[{text:s}]}),r.default.createElement(n.default,{name:`ArrowDrop${u?"Up":"Down"}`,className:"unbound-boundary-integration-icon"})),u&&r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{className:"unbound-boundary-divider"}),d.message&&r.default.createElement(e.Card,{type:"card",className:"unbound-boundary-error-wrapper"},r.default.createElement(e.Scrollers.AdvancedScrollerThin,{className:"unbound-boundary-scroller"},r.default.createElement(e.Text,{className:"unbound-boundary-error-details"},d.message))),d.stack&&r.default.createElement(e.Card,{type:"card",className:"unbound-boundary-error-wrapper"},r.default.createElement(e.Scrollers.AdvancedScrollerThin,{className:"unbound-boundary-scroller"},r.default.createElement(e.Text,{className:"unbound-boundary-error-details"},d.stack))))):null}}module.exports=ErrorBoundary
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkLCBUZXh0LCBTY3JvbGxlcnMsIFJlbGF0aXZlVG9vbHRpcCB9IGZyb20gJ0Bjb21wb25lbnRzL2Rpc2NvcmQnO1xyXG5pbXBvcnQgeyBmaW5kQnlEaXNwbGF5TmFtZSB9IGZyb20gJ0B3ZWJwYWNrJztcclxuaW1wb3J0IHsgUmVnZXggfSBmcm9tICdAY29uc3RhbnRzJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnQHN0eWxlcy9jb21wb25lbnRzL2Vycm9yYm91bmRhcnkuY3NzJztcclxuU3R5bGVzLmFwcGVuZCgpO1xyXG5cclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuY29uc3QgSW50ZWdyYXRpb25JbmZvID0gZmluZEJ5RGlzcGxheU5hbWUoJ0ludGVncmF0aW9uSW5mbycpO1xyXG5cclxuaW50ZXJmYWNlIEVycm9yQm91bmRhcnlQcm9wcyBleHRlbmRzIFJlYWN0LlByb3BzV2l0aENoaWxkcmVuIHtcclxuICAgZmFsbGJhY2s/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XHJcbn1cclxuXHJcbmludGVyZmFjZSBFcnJvckJvdW5kYXJ5U3RhdGUge1xyXG4gICBlcnJvcjogYm9vbGVhbiB8IHN0cmluZztcclxuICAgY29tcG9uZW50PzogRXJyb3JCb3VuZGFyeUVycm9yO1xyXG4gICBqcz86IEVycm9yQm91bmRhcnlFcnJvcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEVycm9yQm91bmRhcnlFcnJvciB7XHJcbiAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgc3RhY2s6IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RXJyb3JCb3VuZGFyeVByb3BzLCBFcnJvckJvdW5kYXJ5U3RhdGU+IHtcclxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgZXJyb3I6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgIH1cclxuXHJcbiAgIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCB7IGNvbXBvbmVudFN0YWNrIH0pIHtcclxuICAgICAgY29uc3QgbWVzc2FnZSA9IGAke2Vycm9yLm5hbWUgPyBgJHtlcnJvci5uYW1lfTogYCA6ICcnfSR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICBjb25zdCBqcyA9IHRoaXMuY2xlYW5FcnJvcihlcnJvci5zdGFjaywgbWVzc2FnZSk7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY2xlYW5FcnJvcihjb21wb25lbnRTdGFjayk7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgZXJyb3I6IHRydWUsXHJcbiAgICAgICAgIGNvbXBvbmVudCxcclxuICAgICAgICAganNcclxuICAgICAgfSk7XHJcbiAgIH07XHJcblxyXG4gICBjbGVhbkVycm9yKHN0cmluZzogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgIGNvbnN0IGNsZWFuID0gKHN0YWNrKSA9PiBCb29sZWFuKHN0YWNrKSAmJiAhc3RhY2suaW5jbHVkZXMoJy9hc3NldHMnKTtcclxuXHJcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gc3RyaW5nLnNwbGl0KFJlZ2V4Lm5ld2xpbmUpO1xyXG5cclxuICAgICAgaWYgKG1lc3NhZ2UpIHtcclxuICAgICAgICAgY29uc3QgaW5kZXggPSBzZWN0aW9ucy5maW5kSW5kZXgobSA9PiBtID09PSBtZXNzYWdlKTtcclxuICAgICAgICAgaW5kZXggIT09IG51bGwgJiYgc2VjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgc3RhY2s6IHNlY3Rpb25zLmZpbHRlcihjbGVhbikuam9pbignXFxuJykucmVwbGFjZSgvICAgIC9nLCAnJyksXHJcbiAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgfTtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xyXG4gICAgICAgICBjb25zdCBGYWxsYmFjayA9IHRoaXMucHJvcHMuZmFsbGJhY2s7XHJcblxyXG4gICAgICAgICBpZiAoRmFsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxGYWxsYmFjayB7Li4udGhpcy5zdGF0ZX0gLz47XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGNvbnN0IGpzID0ge1xyXG4gICAgICAgICAgICBuYW1lOiAnSmF2YVNjcmlwdCBFcnJvcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUnVudGltZSBlcnJvciBwcm92aWRlZCBieSBKYXZhU2NyaXB0LicsXHJcbiAgICAgICAgICAgIGljb246ICdDbG9zZScsXHJcbiAgICAgICAgICAgIHN0YXRlOiAnanMnXHJcbiAgICAgICAgIH07XHJcblxyXG4gICAgICAgICBjb25zdCBjb21wb25lbnQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDb21wb25lbnQgTGlmZWN5Y2xlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMaWZlY3ljbGUgZXJyb3IgcHJvdmlkZWQgYnkgUmVhY3QuJyxcclxuICAgICAgICAgICAgaWNvbjogJ1N5bmNlZCcsXHJcbiAgICAgICAgICAgIHN0YXRlOiAnY29tcG9uZW50J1xyXG4gICAgICAgICB9O1xyXG5cclxuICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktd3JhcHBlcic+XHJcbiAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPScvYXNzZXRzL2I1ZWIyZjdkNmIzZjhjYzliNjBiZTRhNWRjZjI4MDE1LnN2ZydcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWJvdW5kYXJ5LXNhZC13dW1wdXMnXHJcbiAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtUZXh0LkNvbG9ycy5NVVRFRH1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT17VGV4dC5TaXplcy5TSVpFXzE2fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktbm90aWNlJ1xyXG4gICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE9vcHMsIHdlIGhhZCBhIGZ1Y2t5IHd1Y2t5LlxyXG4gICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgIDxSZWxhdGl2ZVRvb2x0aXAgdGV4dD0nUmV0cnknPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMgPT4gPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktcmV0cnknXHJcbiAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1JlcGxheSdcclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMyfVxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxyXG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIFJldHJ5XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbj59XHJcbiAgICAgICAgICAgICAgIDwvUmVsYXRpdmVUb29sdGlwPlxyXG4gICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTdGFjayhqcyl9XHJcbiAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclN0YWNrKGNvbXBvbmVudCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyU3RhY2soeyBuYW1lLCBzdGF0ZSwgZGVzY3JpcHRpb24sIGljb24gfSkge1xyXG4gICAgICBjb25zdCBpc09wZW4gPSB0aGlzLnN0YXRlW2Ake3N0YXRlfU9wZW5gXSA/PyBmYWxzZTtcclxuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLnN0YXRlW3N0YXRlXTtcclxuXHJcbiAgICAgIGlmICghZXJyb3IpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZTxhbnk+KHsgW2Ake3N0YXRlfU9wZW5gXTogIWlzT3BlbiB9KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWJvdW5kYXJ5LWludGVncmF0aW9uLWNhcmQnXHJcbiAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktYWxpZ24nPlxyXG4gICAgICAgICAgICAgICA8SW50ZWdyYXRpb25JbmZvXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGljb249e3Byb3BzID0+IDxJY29uIG5hbWU9e2ljb259IHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgICAgICAgICAgIGRldGFpbHM9e1t7IHRleHQ6IGRlc2NyaXB0aW9uIH1dfVxyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtgQXJyb3dEcm9wJHtpc09wZW4gPyAnVXAnIDogJ0Rvd24nfWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1ib3VuZGFyeS1pbnRlZ3JhdGlvbi1pY29uJ1xyXG4gICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzT3BlbiAmJiA8PlxyXG4gICAgICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktZGl2aWRlcicgLz5cclxuICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2UgJiYgPENhcmRcclxuICAgICAgICAgICAgICAgICAgdHlwZT0nY2FyZCdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWJvdW5kYXJ5LWVycm9yLXdyYXBwZXInXHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFNjcm9sbGVycy5BZHZhbmNlZFNjcm9sbGVyVGhpbiBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktc2Nyb2xsZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktZXJyb3ItZGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsZXJzLkFkdmFuY2VkU2Nyb2xsZXJUaGluPlxyXG4gICAgICAgICAgICAgICA8L0NhcmQ+fVxyXG4gICAgICAgICAgICAgICB7ZXJyb3Iuc3RhY2sgJiYgPENhcmRcclxuICAgICAgICAgICAgICAgICAgdHlwZT0nY2FyZCdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWJvdW5kYXJ5LWVycm9yLXdyYXBwZXInXHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFNjcm9sbGVycy5BZHZhbmNlZFNjcm9sbGVyVGhpbiBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktc2Nyb2xsZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3VuYm91bmQtYm91bmRhcnktZXJyb3ItZGV0YWlscyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvci5zdGFja31cclxuICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1Njcm9sbGVycy5BZHZhbmNlZFNjcm9sbGVyVGhpbj5cclxuICAgICAgICAgICAgICAgPC9DYXJkPn1cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICk7XHJcbiAgIH1cclxufTtcclxuXHJcbmV4cG9ydCA9IEVycm9yQm91bmRhcnk7Il0sIm5hbWVzIjpbIlN0eWxlcyIsImFwcGVuZCIsIkludGVncmF0aW9uSW5mbyIsImZpbmRCeURpc3BsYXlOYW1lIiwiRXJyb3JCb3VuZGFyeSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImVycm9yIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJjb21wb25lbnRTdGFjayIsIm1lc3NhZ2UiLCJuYW1lIiwianMiLCJjbGVhbkVycm9yIiwic3RhY2siLCJjb21wb25lbnQiLCJzZXRTdGF0ZSIsInN0cmluZyIsImNsZWFuIiwiQm9vbGVhbiIsImluY2x1ZGVzIiwic2VjdGlvbnMiLCJzcGxpdCIsIlJlZ2V4IiwibmV3bGluZSIsImluZGV4IiwiZmluZEluZGV4IiwibSIsInNwbGljZSIsImZpbHRlciIsImpvaW4iLCJyZXBsYWNlIiwicmVuZGVyIiwiRmFsbGJhY2siLCJmYWxsYmFjayIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIlRleHQiLCJjb2xvciIsIkNvbG9ycyIsIk1VVEVEIiwic2l6ZSIsIlNpemVzIiwiU0laRV8xNiIsIlJlbGF0aXZlVG9vbHRpcCIsInRleHQiLCJJY29uIiwid2lkdGgiLCJoZWlnaHQiLCJvbkNsaWNrIiwicmVuZGVyU3RhY2siLCJjaGlsZHJlbiIsImlzT3BlbiIsIkNhcmQiLCJkZXRhaWxzIiwiRGl2aWRlciIsInR5cGUiLCJTY3JvbGxlcnMiLCJBZHZhbmNlZFNjcm9sbGVyVGhpbiJdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQXVELFdBQXFCLFlBQzFDLFVBQVUsWUFDdEIsd0JBQVksbUNBQ2QsV0FBVyxvQ0FDYixPQUFPLG9DQUVOLHdDQUFzQyxvQ0FHeEMsUUFBUSwyRUFGekJBLENBQU0sUUFBQSxDQUFDQyxNQUFNLEVBQUUsQUFHZixPQUFNQyxDQUFlLENBQUdDLEdBQUFBLENBQWlCLGtCQUFBLEVBQUMsaUJBQWlCLENBQUMsQUFBQyxBQWlCN0QsT0FBTUMsYUFBYSxTQUFTQyxDQUFLLFFBQUEsQ0FBQ0MsYUFBYSxDQUM1Q0MsWUFBWUMsQ0FBSyxDQUFFLENBQ2hCLEtBQUssQ0FBQ0EsQ0FBSyxDQUFDLENBRVosSUFBSSxDQUFDQyxLQUFLLENBQUcsQ0FDVkMsS0FBSyxDQUFFLENBQUEsQ0FBSyxDQUNkLENBQ0gsQUFFREMsaUJBQWlCLENBQUNELENBQUssQ0FBRSxDQUFFRSxjQUFjLENBQWRBLENBQWMsQ0FBRSxDQUFFLENBQzFDLElBQU1DLENBQU8sQ0FBRyxDQUFDLEVBQUVILEFBREpBLENBQUssQ0FDS0ksSUFBSSxDQUFHLENBQUMsRUFBRUosQUFEcEJBLENBQUssQ0FDcUJJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBRyxFQUFFLENBQUMsRUFBRUosQUFEMUNBLENBQUssQ0FDMkNHLE9BQU8sQ0FBQyxDQUFDLENBQ2xFRSxDQUFFLENBQUcsSUFBSSxDQUFDQyxVQUFVLENBQUNOLEFBRlpBLENBQUssQ0FFYU8sS0FBSyxDQUFFSixDQUFPLENBQUMsQ0FDMUNLLENBQVMsQ0FBRyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0osQ0FBYyxDQUFDLEFBRndCLEFBSXpFLENBQUEsSUFBSSxDQUFDTyxRQUFRLENBQUMsQ0FDWFQsS0FBSyxDQUFFLENBQUEsQ0FBSSxDQUNYUSxTQUFTLENBQVRBLENBQVMsQ0FDVEgsRUFBRSxDQUFGQSxDQUFFLENBQ0osQ0FBQyxDQUNKLEFBRURDLFVBQVUsQ0FBQ0ksQ0FBYyxDQUFFUCxDQUFnQixDQUFFLENBQzFDLElBQU1RLEtBQUssQ0FBRyxBQUFDSixDQUFLLEVBQUtLLE9BQU8sQ0FBQ0wsQ0FBSyxDQUFDLEVBQUksQ0FBQ0EsQ0FBSyxDQUFDTSxRQUFRLENBQUMsU0FBUyxDQUFDLENBRS9EQyxDQUFRLENBQUdKLEFBSFRBLENBQWMsQ0FHRUssS0FBSyxDQUFDQyxDQUFLLE1BQUEsQ0FBQ0MsT0FBTyxDQUFDLEFBRjBCLEFBSXRFLElBQUlkLENBQU8sQ0FBRSxDQUNWLElBQU1lLENBQUssQ0FBR0osQ0FBUSxDQUFDSyxTQUFTLENBQUNDLENBQUMsRUFBSUEsQ0FBQyxHQUFLakIsQ0FBTyxDQUFDLEFBQUMsQUFDckRlLENBQVUsSUFBSSxHQUFkQSxDQUFLLEVBQWFKLENBQVEsQ0FBQ08sTUFBTSxDQUFDSCxDQUFLLENBQUUsQ0FBQyxDQUFDLENBQzdDLEFBRUQsTUFBTyxDQUNKWCxLQUFLLENBQUVPLENBQVEsQ0FBQ1EsTUFBTSxDQUFDWCxLQUFLLENBQUMsQ0FBQ1ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDQyxPQUFPLFNBQVUsRUFBRSxDQUFDLENBQzdEckIsT0FBTyxDQUFQQSxDQUFPLENBQ1QsQUFBQyxDQUNKLEFBRURzQixNQUFNLEVBQUcsQ0FDTixHQUFJLElBQUksQ0FBQzFCLEtBQUssQ0FBQ0MsS0FBSyxDQUFFLENBQ25CLElBQU0wQixDQUFRLENBQUcsSUFBSSxDQUFDNUIsS0FBSyxDQUFDNkIsUUFBUSxBQUFDLEFBRXJDLElBQUlELENBQVEsQ0FDVCxPQUFPLHdCQUFDQSxDQUFRLGtCQUFLLElBQUksQ0FBQzNCLEtBQUssRUFBSSxBQUFDLEFBQ3RDLEFBRUQsS0FBTU0sQ0FBRSxDQUFHLENBQ1JELElBQUksQ0FBRSxrQkFBa0IsQ0FDeEJ3QixXQUFXLENBQUUsdUNBQXVDLENBQ3BEQyxJQUFJLENBQUUsT0FBTyxDQUNiOUIsS0FBSyxDQUFFLElBQUksQ0FDYixDQUVLUyxDQUFTLENBQUcsQ0FDZkosSUFBSSxDQUFFLHFCQUFxQixDQUMzQndCLFdBQVcsQ0FBRSxvQ0FBb0MsQ0FDakRDLElBQUksQ0FBRSxRQUFRLENBQ2Q5QixLQUFLLENBQUUsV0FBVyxDQUNwQixBQVBDLEFBU0YsUUFDRyx3QkFBQytCLEtBQUcsRUFBQ0MsU0FBUyxDQUFDLDBCQUEwQixFQUN0Qyx3QkFBQ0MsS0FBRyxFQUNEQyxHQUFHLENBQUMsOENBQThDLENBQ2xERixTQUFTLENBQUMsNkJBQTZCLEVBQ3hDLENBQ0Ysd0JBQUNHLENBQUksS0FBQSxFQUNGQyxLQUFLLENBQUVELENBQUksS0FBQSxDQUFDRSxNQUFNLENBQUNDLEtBQUssQ0FDeEJDLElBQUksQ0FBRUosQ0FBSSxLQUFBLENBQUNLLEtBQUssQ0FBQ0MsT0FBTyxDQUN4QlQsU0FBUyxDQUFDLHlCQUF5QixFQUNyQyw2QkFFRCxDQUFPLENBQ1Asd0JBQUNVLENBQWUsZ0JBQUEsRUFBQ0MsSUFBSSxDQUFDLE9BQU8sRUFDekI1QyxDQUFLLEVBQUksd0JBQUM2QyxDQUFJLFFBQUEsa0JBQ1I3QyxDQUFLLEVBQ1RpQyxTQUFTLENBQUMsd0JBQXdCLENBQ2xDM0IsSUFBSSxDQUFDLFFBQVEsQ0FDYndDLEtBQUssQ0FBRSxFQUFFLENBQ1RDLE1BQU0sQ0FBRSxFQUFFLENBQ1ZDLE9BQU8sQ0FBRSxJQUFNLElBQUksQ0FBQ3JDLFFBQVEsQ0FBQyxDQUFFVCxLQUFLLENBQUUsQ0FBQSxDQUFLLENBQUUsQ0FBQyxHQUNoRCxPQUVELENBQU8sQ0FDUSxDQUNqQixJQUFJLENBQUMrQyxXQUFXLENBQUMxQyxDQUFFLENBQUMsQ0FDcEIsSUFBSSxDQUFDMEMsV0FBVyxDQUFDdkMsQ0FBUyxDQUFDLENBQ3pCLEFBQ1AsQ0FDSixBQUVELE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNrRCxRQUFRLEFBQUMsQ0FDN0IsQUFFREQsV0FBVyxDQUFDLENBQUUzQyxJQUFJLENBQUpBLENBQUksQ0FBRUwsS0FBSyxDQUFMQSxDQUFLLENBQUU2QixXQUFXLENBQVhBLENBQVcsQ0FBRUMsSUFBSSxDQUFKQSxDQUFJLENBQUUsQ0FBRSxDQUM3QyxJQUFNb0IsQ0FBTSxDQUFHLElBQUksQ0FBQ2xELEtBQUssQ0FBQyxDQUFDLEVBQUVBLENBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFJLENBQUEsQ0FBSyxDQUM1Q0MsQ0FBSyxDQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDQSxDQUFLLENBQUMsQUFEb0IsUUFHbkQsQUFBS0MsQ0FBSyxDQUdQLHdCQUFDa0QsQ0FBSSxLQUFBLEVBQ0ZKLE9BQU8sQ0FBRSxJQUFNLElBQUksQ0FBQ3JDLFFBQVEsQ0FBTSxDQUFFLENBQUMsQ0FBQyxFQUFFVixDQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxDQUFDa0QsQ0FBTSxDQUFFLENBQUMsQ0FDaEVsQixTQUFTLENBQUMsbUNBQW1DLEVBRTdDLHdCQUFDRCxLQUFHLEVBQUNDLFNBQVMsQ0FBQyx3QkFBd0IsRUFDcEMsd0JBQUN2QyxDQUFlLEVBQ2JZLElBQUksQ0FBRUEsQ0FBSSxDQUNWeUIsSUFBSSxDQUFFL0IsQ0FBSyxFQUFJLHdCQUFDNkMsQ0FBSSxRQUFBLGdCQUFDdkMsSUFBSSxDQUFFeUIsQ0FBSSxFQUFNL0IsQ0FBSyxFQUFJLENBQzlDcUQsT0FBTyxDQUFFLENBQUMsQ0FBRVQsSUFBSSxDQUFFZCxDQUFXLENBQUUsQ0FBQyxFQUNqQyxDQUNGLHdCQUFDZSxDQUFJLFFBQUEsRUFDRnZDLElBQUksQ0FBRSxDQUFDLFNBQVMsRUFBRTZDLENBQU0sQ0FBRyxJQUFJLENBQUcsTUFBTSxDQUFDLENBQUMsQ0FDMUNsQixTQUFTLENBQUMsbUNBQW1DLEVBQzlDLENBQ0MsQ0FDTGtCLENBQU0sRUFBSSxnREFDUix3QkFBQ0csQ0FBTyxRQUFBLEVBQUNyQixTQUFTLENBQUMsMEJBQTBCLEVBQUcsQ0FDL0MvQixDQUFLLENBQUNHLE9BQU8sRUFBSSx3QkFBQytDLENBQUksS0FBQSxFQUNwQkcsSUFBSSxDQUFDLE1BQU0sQ0FDWHRCLFNBQVMsQ0FBQyxnQ0FBZ0MsRUFFMUMsd0JBQUN1QixDQUFTLFVBQUEsQ0FBQ0Msb0JBQW9CLEVBQUN4QixTQUFTLENBQUMsMkJBQTJCLEVBQ2xFLHdCQUFDRyxDQUFJLEtBQUEsRUFBQ0gsU0FBUyxDQUFDLGdDQUFnQyxFQUM1Qy9CLENBQUssQ0FBQ0csT0FBTyxDQUNWLENBQ3VCLENBQzdCLENBQ05ILENBQUssQ0FBQ08sS0FBSyxFQUFJLHdCQUFDMkMsQ0FBSSxLQUFBLEVBQ2xCRyxJQUFJLENBQUMsTUFBTSxDQUNYdEIsU0FBUyxDQUFDLGdDQUFnQyxFQUUxQyx3QkFBQ3VCLENBQVMsVUFBQSxDQUFDQyxvQkFBb0IsRUFBQ3hCLFNBQVMsQ0FBQywyQkFBMkIsRUFDbEUsd0JBQUNHLENBQUksS0FBQSxFQUFDSCxTQUFTLENBQUMsZ0NBQWdDLEVBQzVDL0IsQ0FBSyxDQUFDTyxLQUFLLENBQ1IsQ0FDdUIsQ0FDN0IsQ0FDUCxDQUNDLENBekNTLElBQUksQUFBQyxDQTJDMUIsQ0FDSCxlQUVRYixhQUFhLEFBQUMifQ==