"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>AddonCard});const e=require("../../components/discord"),t=require("../../modules/webpack/common"),a=require("../../../common/utilities/index"),r=function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=_getRequireWildcardCache(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=n?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(r,s,l):r[s]=e[s]}return r.default=e,a&&a.set(e,r),r}(require("../../api/toasts")),n=require("../../modules/webpack/api"),s=require("../../components/index"),l=_interopRequireDefault(require("react")),o=require("./Icons/index"),i=_interopRequireDefault(require("../../styles/panels/addoncard.css"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_getRequireWildcardCache=function(e){return e?a:t})(e)}i.default.append();class AddonCard extends l.default.Component{componentWillMount(){let e=this.getGlobal(),t=this.getType(),a=window[e]?.[t]??window[e]?.managers?.[t];a?.on?.("toggle",this.onToggle)}componentWillUnmount(){let e=this.getGlobal(),t=this.getType(),a=window[e]?.[t]??window[e]?.managers?.[t];a?.off?.("toggle",this.onToggle)}render(){let{entity:n,client:o,resolve:i}=this.props,c=i(n,o,"author",{raw:!0}),d=i(n,o,"description"),u=i(n,o,"version"),p=i(n,o,"color"),h=i(n,o,"name");return l.default.createElement(e.Tooltip,{position:"left",text:n.failed?t.Locale.Messages[`UNBOUND_ADDON_FAILED_${this.props.type.toUpperCase()}`]:null,hideOnClick:!1},l.default.createElement("div",{className:(0,a.classnames)("unbound-addon-card",n.failed&&"disabled"),style:{"--entity-color":p},onContextMenu:a=>t.ContextMenu.openContextMenu(a,()=>l.default.createElement(e.Menu.default,{onClose:t.ContextMenu.closeContextMenu},l.default.createElement(e.Menu.MenuItem,{id:"delete",color:"colorDanger",label:t.Locale.Messages.UNBOUND_DELETE,action:()=>{try{this.delete()}catch(e){r.open({title:t.Locale.Messages.UNBOUND_ADDON_FAILED_DELETE,content:t.Locale.Messages.UNBOUND_ADDON_FAILED_DELETE_DESC.format({addon:h}),icon:"Close",color:"var(--info-danger-foreground)",timeout:3500})}}}),l.default.createElement(e.Menu.MenuItem,{id:"reload",label:t.Locale.Messages.UNBOUND_RELOAD,action:()=>{try{this.reload(),r.open({title:t.Locale.Messages.UNBOUND_ADDON_RELOADED,content:t.Locale.Messages.UNBOUND_ADDON_RELOADED_DESC.format({addon:h}),timeout:2500,icon:"CheckmarkCircle",color:"var(--info-positive-foreground)"})}catch(e){r.open({title:t.Locale.Messages.UNBOUND_ADDON_FAILED_RELOAD,content:t.Locale.Messages.UNBOUND_ADDON_FAILED_RELOAD_DESC.format({addon:h}),icon:"Close",color:"var(--info-danger-foreground)",timeout:3500})}}})))},l.default.createElement("div",{className:"unbound-addon-header"},l.default.createElement(e.Text,{className:"unbound-addon-name",size:e.Text.Sizes.SIZE_16},h),l.default.createElement(e.Text,{className:"unbound-addon-version",size:e.Text.Sizes.SIZE_16,color:e.Text.Colors.INTERACTIVE_NORMAL},u),l.default.createElement(e.Text,{className:"unbound-addon-authors",size:e.Text.Sizes.SIZE_16,color:e.Text.Colors.INTERACTIVE_NORMAL},"by ",this.renderAuthors(c)),l.default.createElement("div",{className:"unbound-addon-controls"},"unbound"!==this.props.client&&l.default.createElement(e.RelativeTooltip,{text:t.Locale.Messages[`UNBOUND_ADDON_MANAGER_${this.props.client.toUpperCase()}_TOOLTIP`]?.format({type:"Plugin"}),hideOnClick:!1},e=>this.renderType({...e})),this.hasSettings()&&l.default.createElement(e.RelativeTooltip,{text:t.Locale.Messages.UNBOUND_SETTINGS,hideOnClick:!1},e=>l.default.createElement(s.Icon,Object.assign({},e,{onClick:()=>this.props.openSettings(),"data-is-disabled":!this.isEnabled,name:"Gear",width:28,height:28,className:"unbound-addon-control-button"}))),l.default.createElement(e.Switch,{checked:this.isEnabled,onChange:()=>this.toggle(),className:"unbound-addon-switch"}))),l.default.createElement("div",{className:"unbound-addon-footer"},l.default.createElement(e.FormText,{className:"unbound-addon-description"},l.default.createElement(e.Markdown,null,d)))))}renderAuthors(a){let r=[],handleAuthor=a=>{if("string"==typeof a)r.push(a);else if("object"==typeof a&&a.name){let s=typeof a.id||typeof a.discord_id,o=s&&["number","string"].includes(typeof s);r.push(o?l.default.createElement(e.Anchor,{className:"unbound-addon-author",async onClick(){let e=a.id??a.discord_id;await n.Users?.getUser(e),t.Dispatcher.dirtyDispatch({type:"USER_PROFILE_MODAL_OPEN",userId:e})}},a.name):a.name)}};return Array.isArray(a)?a.map(handleAuthor):"object"==typeof a&&a.name?handleAuthor(a):"string"==typeof a&&r.push(a),r.map((e,t)=>{let a=t+1===r.length;return"string"==typeof e?a?e:`${e}, `:[e,a?"":", "]})}renderType(e){let{client:t}=this.props;switch(e.className??="unbound-addon-type-icon",e.width??=16,e.height??=16,t){case"bd":return l.default.createElement(o.Bd,Object.assign({},e));case"powercord":return l.default.createElement(o.Plug,Object.assign({},e));default:return null}}get isEnabled(){let e=this.getId(),t=this.getGlobal(),a=this.getType(),r=window[t]?.[a]??window[t]?.managers?.[a];return r?.isEnabled?.(e)}delete(){let e=this.getId(),t=this.getGlobal(),a=this.getType(),r=window[t]?.[a]??window[t]?.managers?.[a];return r?.delete?.(e)}toggle(){let e=this.getId(),t=this.getGlobal(),a=this.getType(),r=window[t]?.[a]??window[t]?.managers?.[a];return r?.toggle?.(e)}reload(){let e=this.getId(),t=this.getGlobal(),a=this.getType(),r=window[t]?.[a]??window[t]?.managers?.[a];return r?.reload?r.reload(e):r?.remount?r.remount(e):void 0}onToggle(e){let{entity:t}=this.props;[t.id,t.entityID,t.name].includes(e)&&this.forceUpdate()}getType(){let{type:e,client:t}=this.props;switch(t){case"powercord":return"plugins"===e?"pluginManager":"styleManager";case"bd":return"plugins"===e?"Plugins":"Themes";case"unbound":return"plugins"===e?"plugins":"themes"}}getGlobal(){let{client:e}=this.props;switch(e){case"powercord":return"powercord";case"bd":return"BdApi";case"unbound":return"unbound"}}hasSettings(){let{client:e,entity:t}=this.props,a=this.getId();switch(e){case"powercord":let r=powercord.api.settings.settings;if(r.has(a))return!0;let n=[...r.values()];return n.find(e=>{let t=[e.label,e.category];if(t.includes(a))return!0});case"unbound":case"bd":return t.instance?.getSettingsPanel}}getId(){let{client:e,entity:t}=this.props;switch(e){case"powercord":return t.entityID;case"bd":return t.name;case"unbound":return t.id}}}!function(e,t,a,r){var n,s=arguments.length,l=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,a,r);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(l=(s<3?n(l):s>3?n(t,a,l):n(t,a))||l);return s>3&&l&&Object.defineProperty(t,a,l),l}([a.bind],AddonCard.prototype,"onToggle",null)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9jb21wb25lbnRzL0FkZG9uQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dCwgU3dpdGNoLCBBbmNob3IsIEZvcm1UZXh0LCBNYXJrZG93biwgUmVsYXRpdmVUb29sdGlwLCBNZW51LCBUb29sdGlwIH0gZnJvbSAnQGNvbXBvbmVudHMvZGlzY29yZCc7XHJcbmltcG9ydCB7IENvbnRleHRNZW51LCBEaXNwYXRjaGVyLCBMb2NhbGUsIENvbnN0YW50cyB9IGZyb20gJ0B3ZWJwYWNrL2NvbW1vbic7XHJcbmltcG9ydCB7IEF1dGhvciB9IGZyb20gJ0BjbGllbnQvbWFuYWdlcnMvYmFzZSc7XHJcbmltcG9ydCB7IGJpbmQsIGNsYXNzbmFtZXMgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuaW1wb3J0ICogYXMgVG9hc3RzIGZyb20gJ0BhcGkvdG9hc3RzJztcclxuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICdAd2VicGFjay9hcGknO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgUGx1ZywgQmQgfSBmcm9tICcuL0ljb25zJztcclxuXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnQHN0eWxlcy9wYW5lbHMvYWRkb25jYXJkLmNzcyc7XHJcblN0eWxlcy5hcHBlbmQoKTtcclxuXHJcbmludGVyZmFjZSBBZGRvbkNhcmRQcm9wcyB7XHJcbiAgIG9wZW5TZXR0aW5nczogRm47XHJcbiAgIGNsaWVudDogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcbiAgIHJlc29sdmU6IEZuO1xyXG4gICBlbnRpdHk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkb25DYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEFkZG9uQ2FyZFByb3BzPiB7XHJcbiAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgICAgY29uc3QgZ2xvYmFsID0gdGhpcy5nZXRHbG9iYWwoKTtcclxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xyXG5cclxuICAgICAgY29uc3QgbWFuYWdlciA9ICh3aW5kb3dbZ2xvYmFsXT8uW3R5cGVdID8/IHdpbmRvd1tnbG9iYWxdPy5tYW5hZ2Vycz8uW3R5cGVdKTtcclxuXHJcbiAgICAgIG1hbmFnZXI/Lm9uPy4oJ3RvZ2dsZScsIHRoaXMub25Ub2dnbGUpO1xyXG4gICB9XHJcblxyXG4gICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgY29uc3QgZ2xvYmFsID0gdGhpcy5nZXRHbG9iYWwoKTtcclxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xyXG5cclxuICAgICAgY29uc3QgbWFuYWdlciA9ICh3aW5kb3dbZ2xvYmFsXT8uW3R5cGVdID8/IHdpbmRvd1tnbG9iYWxdPy5tYW5hZ2Vycz8uW3R5cGVdKTtcclxuICAgICAgbWFuYWdlcj8ub2ZmPy4oJ3RvZ2dsZScsIHRoaXMub25Ub2dnbGUpO1xyXG4gICB9XHJcblxyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgZW50aXR5LCBjbGllbnQsIHJlc29sdmUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCBhdXRob3IgPSByZXNvbHZlKGVudGl0eSwgY2xpZW50LCAnYXV0aG9yJywgeyByYXc6IHRydWUgfSk7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcmVzb2x2ZShlbnRpdHksIGNsaWVudCwgJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgIGNvbnN0IHZlcnNpb24gPSByZXNvbHZlKGVudGl0eSwgY2xpZW50LCAndmVyc2lvbicpO1xyXG4gICAgICBjb25zdCBjb2xvciA9IHJlc29sdmUoZW50aXR5LCBjbGllbnQsICdjb2xvcicpO1xyXG4gICAgICBjb25zdCBuYW1lID0gcmVzb2x2ZShlbnRpdHksIGNsaWVudCwgJ25hbWUnKTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgIHBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgICB0ZXh0PXtlbnRpdHkuZmFpbGVkID8gTG9jYWxlLk1lc3NhZ2VzW2BVTkJPVU5EX0FERE9OX0ZBSUxFRF8ke3RoaXMucHJvcHMudHlwZS50b1VwcGVyQ2FzZSgpfWBdIDogbnVsbH1cclxuICAgICAgICAgICAgaGlkZU9uQ2xpY2s9e2ZhbHNlfVxyXG4gICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCd1bmJvdW5kLWFkZG9uLWNhcmQnLCBlbnRpdHkuZmFpbGVkICYmICdkaXNhYmxlZCcpfVxyXG4gICAgICAgICAgICAgICBzdHlsZT17eyAnLS1lbnRpdHktY29sb3InOiBjb2xvciB9fVxyXG4gICAgICAgICAgICAgICBvbkNvbnRleHRNZW51PXsoZSkgPT4gQ29udGV4dE1lbnUub3BlbkNvbnRleHRNZW51KGUsICgpID0+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51LmRlZmF1bHQgb25DbG9zZT17Q29udGV4dE1lbnUuY2xvc2VDb250ZXh0TWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxNZW51Lk1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdkZWxldGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdjb2xvckRhbmdlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0RFTEVURX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3RzLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfQURET05fRkFJTEVEX0RFTEVURSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfQURET05fRkFJTEVEX0RFTEVURV9ERVNDLmZvcm1hdCh7IGFkZG9uOiBuYW1lIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnQ2xvc2UnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWluZm8tZGFuZ2VyLWZvcmVncm91bmQpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMzUwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICA8TWVudS5NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0ncmVsb2FkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfUkVMT0FEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3RzLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfQURET05fUkVMT0FERUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0FERE9OX1JFTE9BREVEX0RFU0MuZm9ybWF0KHsgYWRkb246IG5hbWUgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDI1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdDaGVja21hcmtDaXJjbGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWluZm8tcG9zaXRpdmUtZm9yZWdyb3VuZCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdHMub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9BRERPTl9GQUlMRURfUkVMT0FELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9BRERPTl9GQUlMRURfUkVMT0FEX0RFU0MuZm9ybWF0KHsgYWRkb246IG5hbWUgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdDbG9zZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0taW5mby1kYW5nZXItZm9yZWdyb3VuZCknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnUuZGVmYXVsdD5cclxuICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tbmFtZScgc2l6ZT17VGV4dC5TaXplcy5TSVpFXzE2fT5cclxuICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLXZlcnNpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgIHNpemU9e1RleHQuU2l6ZXMuU0laRV8xNn1cclxuICAgICAgICAgICAgICAgICAgICAgY29sb3I9e1RleHQuQ29sb3JzLklOVEVSQUNUSVZFX05PUk1BTH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICB7dmVyc2lvbn1cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tYXV0aG9ycydcclxuICAgICAgICAgICAgICAgICAgICAgc2l6ZT17VGV4dC5TaXplcy5TSVpFXzE2fVxyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvcj17VGV4dC5Db2xvcnMuSU5URVJBQ1RJVkVfTk9STUFMfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgIGJ5IHt0aGlzLnJlbmRlckF1dGhvcnMoYXV0aG9yKX1cclxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1jb250cm9scyc+XHJcbiAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNsaWVudCAhPT0gJ3VuYm91bmQnICYmIDxSZWxhdGl2ZVRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17TG9jYWxlLk1lc3NhZ2VzW2BVTkJPVU5EX0FERE9OX01BTkFHRVJfJHt0aGlzLnByb3BzLmNsaWVudC50b1VwcGVyQ2FzZSgpfV9UT09MVElQYF0/LmZvcm1hdCh7IHR5cGU6ICdQbHVnaW4nIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlT25DbGljaz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3AgPT4gdGhpcy5yZW5kZXJUeXBlKHsgLi4ucCB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgPC9SZWxhdGl2ZVRvb2x0aXA+fVxyXG4gICAgICAgICAgICAgICAgICAgICB7dGhpcy5oYXNTZXR0aW5ncygpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlbGF0aXZlVG9vbHRpcCB0ZXh0PXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9TRVRUSU5HU30gaGlkZU9uQ2xpY2s9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAge3AgPT4gPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3BlblNldHRpbmdzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaXMtZGlzYWJsZWQ9eyF0aGlzLmlzRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nR2VhcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tY29udHJvbC1idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlbGF0aXZlVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLmlzRW5hYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMudG9nZ2xlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1zd2l0Y2gnXHJcbiAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VuYm91bmQtYWRkb24tZm9vdGVyJz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1UZXh0IGNsYXNzTmFtZT0ndW5ib3VuZC1hZGRvbi1kZXNjcmlwdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxNYXJrZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICA8L01hcmtkb3duPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1UZXh0PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDwvVG9vbHRpcD4pO1xyXG4gICB9XHJcblxyXG4gICByZW5kZXJBdXRob3JzKGF1dGhvcnM6IEF1dGhvcikge1xyXG4gICAgICBjb25zdCByZXMgPSBbXTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZUF1dGhvciA9IChhdXRob3IpID0+IHtcclxuICAgICAgICAgaWYgKHR5cGVvZiBhdXRob3IgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKGF1dGhvcik7XHJcbiAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGF1dGhvciA9PT0gJ29iamVjdCcgJiYgYXV0aG9yLm5hbWUpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB0eXBlb2YgYXV0aG9yLmlkIHx8IHR5cGVvZiBhdXRob3IuZGlzY29yZF9pZDtcclxuICAgICAgICAgICAgY29uc3QgaGFzSWQgPSBpZCAmJiAoWydudW1iZXInLCAnc3RyaW5nJ10uaW5jbHVkZXModHlwZW9mIGlkKSk7XHJcblxyXG4gICAgICAgICAgICByZXMucHVzaChoYXNJZCA/XHJcbiAgICAgICAgICAgICAgIDxBbmNob3JcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWFkZG9uLWF1dGhvcidcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGF1dGhvci5pZCA/PyBhdXRob3IuZGlzY29yZF9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFVzZXJzPy5nZXRVc2VyKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgRGlzcGF0Y2hlci5kaXJ0eURpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VTRVJfUFJPRklMRV9NT0RBTF9PUEVOJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkOiBpZFxyXG4gICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7YXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgICAgIDwvQW5jaG9yPiA6XHJcbiAgICAgICAgICAgICAgIGF1dGhvci5uYW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGF1dGhvcnMpKSB7XHJcbiAgICAgICAgIGF1dGhvcnMubWFwKGhhbmRsZUF1dGhvcik7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGF1dGhvcnMgPT09ICdvYmplY3QnICYmIGF1dGhvcnMubmFtZSkge1xyXG4gICAgICAgICBoYW5kbGVBdXRob3IoYXV0aG9ycyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGF1dGhvcnMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgIHJlcy5wdXNoKGF1dGhvcnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzLm1hcCgoYXV0aG9yLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICBjb25zdCBpc0xhc3QgPSBpbmRleCArIDEgPT09IHJlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICBpZiAodHlwZW9mIGF1dGhvciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzTGFzdCA/IGF1dGhvciA6IGAke2F1dGhvcn0sIGA7XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbYXV0aG9yLCBpc0xhc3QgPyAnJyA6ICcsICddO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICByZW5kZXJUeXBlKHByb3BzKSB7XHJcbiAgICAgIGNvbnN0IHsgY2xpZW50IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcHJvcHMuY2xhc3NOYW1lID8/PSAndW5ib3VuZC1hZGRvbi10eXBlLWljb24nO1xyXG4gICAgICBwcm9wcy53aWR0aCA/Pz0gMTY7XHJcbiAgICAgIHByb3BzLmhlaWdodCA/Pz0gMTY7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNsaWVudCkge1xyXG4gICAgICAgICBjYXNlICdiZCc6XHJcbiAgICAgICAgICAgIHJldHVybiA8QmQgey4uLnByb3BzfSAvPjtcclxuICAgICAgICAgY2FzZSAncG93ZXJjb3JkJzpcclxuICAgICAgICAgICAgcmV0dXJuIDxQbHVnIHsuLi5wcm9wc30gLz47XHJcbiAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGdldCBpc0VuYWJsZWQoKSB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldElkKCk7XHJcbiAgICAgIGNvbnN0IGdsb2JhbCA9IHRoaXMuZ2V0R2xvYmFsKCk7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldFR5cGUoKTtcclxuXHJcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSAod2luZG93W2dsb2JhbF0/Llt0eXBlXSA/PyB3aW5kb3dbZ2xvYmFsXT8ubWFuYWdlcnM/Llt0eXBlXSk7XHJcbiAgICAgIHJldHVybiBtYW5hZ2VyPy5pc0VuYWJsZWQ/LihuYW1lKTtcclxuICAgfVxyXG5cclxuICAgZGVsZXRlKCkge1xyXG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRJZCgpO1xyXG4gICAgICBjb25zdCBnbG9iYWwgPSB0aGlzLmdldEdsb2JhbCgpO1xyXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XHJcblxyXG4gICAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG4gICAgICByZXR1cm4gbWFuYWdlcj8uZGVsZXRlPy4obmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIHRvZ2dsZSgpIHtcclxuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0SWQoKTtcclxuICAgICAgY29uc3QgZ2xvYmFsID0gdGhpcy5nZXRHbG9iYWwoKTtcclxuICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpO1xyXG5cclxuICAgICAgY29uc3QgbWFuYWdlciA9ICh3aW5kb3dbZ2xvYmFsXT8uW3R5cGVdID8/IHdpbmRvd1tnbG9iYWxdPy5tYW5hZ2Vycz8uW3R5cGVdKTtcclxuXHJcbiAgICAgIHJldHVybiBtYW5hZ2VyPy50b2dnbGU/LihuYW1lKTtcclxuICAgfVxyXG5cclxuICAgcmVsb2FkKCkge1xyXG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRJZCgpO1xyXG4gICAgICBjb25zdCBnbG9iYWwgPSB0aGlzLmdldEdsb2JhbCgpO1xyXG4gICAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCk7XHJcblxyXG4gICAgICBjb25zdCBtYW5hZ2VyID0gKHdpbmRvd1tnbG9iYWxdPy5bdHlwZV0gPz8gd2luZG93W2dsb2JhbF0/Lm1hbmFnZXJzPy5bdHlwZV0pO1xyXG5cclxuICAgICAgaWYgKG1hbmFnZXI/LnJlbG9hZCkge1xyXG4gICAgICAgICByZXR1cm4gbWFuYWdlci5yZWxvYWQobmFtZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAobWFuYWdlcj8ucmVtb3VudCkge1xyXG4gICAgICAgICByZXR1cm4gbWFuYWdlci5yZW1vdW50KG5hbWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIEBiaW5kXHJcbiAgIG9uVG9nZ2xlKG5hbWUpIHtcclxuICAgICAgY29uc3QgeyBlbnRpdHkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBpZiAoIVtlbnRpdHkuaWQsIGVudGl0eS5lbnRpdHlJRCwgZW50aXR5Lm5hbWVdLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xyXG4gICB9XHJcblxyXG4gICBnZXRUeXBlKCkge1xyXG4gICAgICBjb25zdCB7IHR5cGUsIGNsaWVudCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIHN3aXRjaCAoY2xpZW50KSB7XHJcbiAgICAgICAgIGNhc2UgJ3Bvd2VyY29yZCc6XHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAncGx1Z2lucycgPyAncGx1Z2luTWFuYWdlcicgOiAnc3R5bGVNYW5hZ2VyJztcclxuICAgICAgICAgY2FzZSAnYmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3BsdWdpbnMnID8gJ1BsdWdpbnMnIDogJ1RoZW1lcyc7XHJcbiAgICAgICAgIGNhc2UgJ3VuYm91bmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ3BsdWdpbnMnID8gJ3BsdWdpbnMnIDogJ3RoZW1lcyc7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0R2xvYmFsKCkge1xyXG4gICAgICBjb25zdCB7IGNsaWVudCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIHN3aXRjaCAoY2xpZW50KSB7XHJcbiAgICAgICAgIGNhc2UgJ3Bvd2VyY29yZCc6XHJcbiAgICAgICAgICAgIHJldHVybiAncG93ZXJjb3JkJztcclxuICAgICAgICAgY2FzZSAnYmQnOlxyXG4gICAgICAgICAgICByZXR1cm4gJ0JkQXBpJztcclxuICAgICAgICAgY2FzZSAndW5ib3VuZCc6XHJcbiAgICAgICAgICAgIHJldHVybiAndW5ib3VuZCc7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaGFzU2V0dGluZ3MoKSB7XHJcbiAgICAgIGNvbnN0IHsgY2xpZW50LCBlbnRpdHkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZCgpO1xyXG5cclxuICAgICAgc3dpdGNoIChjbGllbnQpIHtcclxuICAgICAgICAgY2FzZSAncG93ZXJjb3JkJzpcclxuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBwb3dlcmNvcmQuYXBpLnNldHRpbmdzLnNldHRpbmdzO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5zZXR0aW5ncy52YWx1ZXMoKV07XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuZmluZChlID0+IHtcclxuICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoYWJsZSA9IFtlLmxhYmVsLCBlLmNhdGVnb3J5XTtcclxuXHJcbiAgICAgICAgICAgICAgIGlmIChzZWFyY2hhYmxlLmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgY2FzZSAndW5ib3VuZCc6XHJcbiAgICAgICAgIGNhc2UgJ2JkJzpcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eS5pbnN0YW5jZT8uZ2V0U2V0dGluZ3NQYW5lbDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBnZXRJZCgpIHtcclxuICAgICAgY29uc3QgeyBjbGllbnQsIGVudGl0eSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIHN3aXRjaCAoY2xpZW50KSB7XHJcbiAgICAgICAgIGNhc2UgJ3Bvd2VyY29yZCc6XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHkuZW50aXR5SUQ7XHJcbiAgICAgICAgIGNhc2UgJ2JkJzpcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eS5uYW1lO1xyXG4gICAgICAgICBjYXNlICd1bmJvdW5kJzpcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eS5pZDtcclxuICAgICAgfVxyXG4gICB9XHJcbn07Il0sIm5hbWVzIjpbIkFkZG9uQ2FyZCIsIlN0eWxlcyIsImFwcGVuZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50V2lsbE1vdW50IiwiZ2xvYmFsIiwiZ2V0R2xvYmFsIiwidHlwZSIsImdldFR5cGUiLCJtYW5hZ2VyIiwid2luZG93IiwibWFuYWdlcnMiLCJvbiIsIm9uVG9nZ2xlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJvZmYiLCJyZW5kZXIiLCJlbnRpdHkiLCJjbGllbnQiLCJyZXNvbHZlIiwicHJvcHMiLCJhdXRob3IiLCJyYXciLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJjb2xvciIsIm5hbWUiLCJUb29sdGlwIiwicG9zaXRpb24iLCJ0ZXh0IiwiZmFpbGVkIiwiTG9jYWxlIiwiTWVzc2FnZXMiLCJ0b1VwcGVyQ2FzZSIsImhpZGVPbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2xhc3NuYW1lcyIsInN0eWxlIiwib25Db250ZXh0TWVudSIsImUiLCJDb250ZXh0TWVudSIsIm9wZW5Db250ZXh0TWVudSIsIk1lbnUiLCJkZWZhdWx0Iiwib25DbG9zZSIsImNsb3NlQ29udGV4dE1lbnUiLCJNZW51SXRlbSIsImlkIiwibGFiZWwiLCJVTkJPVU5EX0RFTEVURSIsImFjdGlvbiIsImRlbGV0ZSIsIlRvYXN0cyIsIm9wZW4iLCJ0aXRsZSIsIlVOQk9VTkRfQURET05fRkFJTEVEX0RFTEVURSIsImNvbnRlbnQiLCJVTkJPVU5EX0FERE9OX0ZBSUxFRF9ERUxFVEVfREVTQyIsImZvcm1hdCIsImFkZG9uIiwiaWNvbiIsInRpbWVvdXQiLCJVTkJPVU5EX1JFTE9BRCIsInJlbG9hZCIsIlVOQk9VTkRfQURET05fUkVMT0FERUQiLCJVTkJPVU5EX0FERE9OX1JFTE9BREVEX0RFU0MiLCJVTkJPVU5EX0FERE9OX0ZBSUxFRF9SRUxPQUQiLCJVTkJPVU5EX0FERE9OX0ZBSUxFRF9SRUxPQURfREVTQyIsIlRleHQiLCJzaXplIiwiU2l6ZXMiLCJTSVpFXzE2IiwiQ29sb3JzIiwiSU5URVJBQ1RJVkVfTk9STUFMIiwicmVuZGVyQXV0aG9ycyIsIlJlbGF0aXZlVG9vbHRpcCIsInAiLCJyZW5kZXJUeXBlIiwiaGFzU2V0dGluZ3MiLCJVTkJPVU5EX1NFVFRJTkdTIiwiSWNvbiIsIm9uQ2xpY2siLCJvcGVuU2V0dGluZ3MiLCJkYXRhLWlzLWRpc2FibGVkIiwiaXNFbmFibGVkIiwid2lkdGgiLCJoZWlnaHQiLCJTd2l0Y2giLCJjaGVja2VkIiwib25DaGFuZ2UiLCJ0b2dnbGUiLCJGb3JtVGV4dCIsIk1hcmtkb3duIiwiYXV0aG9ycyIsInJlcyIsImhhbmRsZUF1dGhvciIsInB1c2giLCJkaXNjb3JkX2lkIiwiaGFzSWQiLCJpbmNsdWRlcyIsIkFuY2hvciIsIlVzZXJzIiwiZ2V0VXNlciIsIkRpc3BhdGNoZXIiLCJkaXJ0eURpc3BhdGNoIiwidXNlcklkIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaW5kZXgiLCJpc0xhc3QiLCJsZW5ndGgiLCJCZCIsIlBsdWciLCJnZXRJZCIsInJlbW91bnQiLCJlbnRpdHlJRCIsImZvcmNlVXBkYXRlIiwic2V0dGluZ3MiLCJwb3dlcmNvcmQiLCJhcGkiLCJoYXMiLCJ2YWx1ZXMiLCJmaW5kIiwic2VhcmNoYWJsZSIsImNhdGVnb3J5IiwiaW5zdGFuY2UiLCJnZXRTZXR0aW5nc1BhbmVsIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUEsa0dBc0JBLFNBa1VDLHdCQWxVb0JBLFNBQVMsbUJBdEIyRCwwQkFBcUIsWUFDbkQsOEJBQWlCLFlBRTNDLGlDQUFZLHdmQUNyQixrQkFBYSxhQUNmLDJCQUFjLFlBQ2Ysd0JBQWEsbUNBQ2hCLE9BQU8sYUFFQSxlQUFTLG1DQUVmLG1DQUE4Qix3UEFDakRDLENBQU0sUUFBQSxDQUFDQyxNQUFNLEVBQUUsQUFVQSxPQUFNRixTQUFTLFNBQVNHLENBQUssUUFBQSxDQUFDQyxTQUFTLENBQ25EQyxrQkFBa0IsRUFBRyxDQUNsQixJQUFNQyxDQUFNLENBQUcsSUFBSSxDQUFDQyxTQUFTLEVBQUUsQ0FDekJDLENBQUksQ0FBRyxJQUFJ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