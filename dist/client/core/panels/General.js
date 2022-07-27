"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>q});const a=require("../../components/index"),b=require("../../api/settings"),c=require("../../modules/webpack/common"),d=require("../../../common/utilities/index"),e=require("../../components/discord"),f=require("@webpack"),g=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=m(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!==f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}(require("../../api/toasts")),h=l(require("react")),i=require("../../components/settings"),j=l(require("../../styles/panels/general.css")),k=require("../components/Icons");function l(a){return a&&a.__esModule?a:{default:a}}function m(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(m=function(a){return a?c:b})(a)}j.default.append();const n=(0,d.memoize)(()=>(0,f.findLazy)(f.filters.byDisplayName("NotificationSettings"))),o=a.AsyncComponent.from(n);class p extends h.default.Component{constructor(a){super(a),this.state={toasts:!1,developer:!1,bd:!1}}render(){return h.default.createElement(a.ErrorBoundary,null,h.default.createElement(e.FormTitle,{tag:"h1",className:"unbound-settings-title"},c.Locale.Messages.UNBOUND_GENERAL),this.renderToasts(),this.renderDeveloper(),this.renderBDSettings())}renderToasts(){let{settings:b}=this.props,e=(0,d.parseColor)("--background-tertiary");return h.default.createElement(a.Category,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_TITLE,description:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_DESCRIPTION,icon:"ChatBubble",className:"unbound-settings-toast-category",opened:this.state.toasts,onChange:()=>this.setState(a=>({...a,toasts:!a.toasts}))},h.default.createElement(o,{className:"unbound-settings-toast-position",position:this.parsePosition(b.get("toasts.position","bottom-right")),onChange:(a,c)=>{let d=this.parsePosition(c);b.set("toasts.position",d),this.onToastsChange(),"disabled"===d&&g.clear()}}),h.default.createElement(a.Divider,{style:{marginTop:10}}),h.default.createElement(i.Switch,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_RESET_TIMEOUT_TITLE,description:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_RESET_TIMEOUT_DESCRIPTION,checked:b.get("toasts.resetTimeoutOnHover",!1),onChange:()=>b.toggle("toasts.resetTimeoutOnHover",!1)}),h.default.createElement(i.Switch,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_CUSTOM_TITLE,description:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_CUSTOM_DESCRIPTION,checked:b.get("toasts.useCustomColours",!1),endDivider:b.get("toasts.useCustomColours",!1),onChange:()=>b.toggle("toasts.useCustomColours",!1),bottomMargin:b.get("toasts.useCustomColours",!1)?15:7.5}),b.get("toasts.useCustomColours",!1)&&h.default.createElement(h.default.Fragment,null,h.default.createElement(i.ColorPicker,{value:b.get("toasts.bgColor"),className:"unbound-settings-toast-color",onChange:a=>b.set("toasts.bgColor",a),default:c.Colors.rgb2int(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}),h.default.createElement(i.SliderInput,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_OPACITY_TITLE,minValue:1,maxValue:10,markers:[1,2,3,4,5,6,7,8,9,10],defaultValue:10,initialValue:10*b.get("toasts.bgOpacity",.5),onValueChange:a=>b.set("toasts.bgOpacity",a/10),onMarkerRender:a=>`${a/10}`,onValueRender:a=>(a/10).toFixed(2)}),h.default.createElement(i.SliderInput,{title:c.Locale.Messages.UNBOUND_TOAST_SETTINGS_BLUR_TITLE,minValue:0,maxValue:15,markers:[0,2.5,5,7.5,10,12.5,15],defaultValue:7.5,initialValue:b.get("toasts.blurAmount",7.5),onValueChange:a=>b.set("toasts.blurAmount",a),endDivider:!1,bottomMargin:7.5,onValueRender:a=>a.toFixed(1)})))}renderDeveloper(){let{settings:b}=this.props;return h.default.createElement(a.Category,{title:c.Locale.Messages.UNBOUND_DEV_SETTINGS_TITLE,description:c.Locale.Messages.UNBOUND_DEV_SETTINGS_DESCRIPTION,icon:"InlineCode",className:"unbound-settings-developer-category",opened:this.state.developer,onChange:()=>this.setState(a=>({...a,developer:!a.developer}))},h.default.createElement(i.Switch,{title:c.Locale.Messages.UNBOUND_DEV_SETTINGS_WARNING_TITLE,description:c.Locale.Messages.UNBOUND_DEV_SETTINGS_WARNING_DESCRIPTION,checked:b.get("dev.devtoolsWarning",!1),onChange:()=>b.toggle("dev.devtoolsWarning",!1)}),h.default.createElement(i.Switch,{title:c.Locale.Messages.UNBOUND_DEV_SETTINGS_EXPERIMENTS_TITLE,description:c.Locale.Messages.UNBOUND_DEV_SETTINGS_EXPERIMENTS_DESCRIPTION,checked:b.get("dev.experiments",!1),onChange:()=>b.toggle("dev.experiments",!1),bottomMargin:7.5,endDivider:!1}),h.default.createElement("div",{style:{marginBottom:2.5}}))}renderBDSettings(){if(!window.BdApi)return null;let b=window.BDInternal?.SettingsManager;return h.default.createElement(a.Category,{title:c.Locale.Messages.UNBOUND_BD_SETTINGS_TITLE,description:c.Locale.Messages.UNBOUND_BD_SETTINGS_DESCRIPTION,icon:()=>h.default.createElement(k.Bd,{className:"unbound-category-icon"}),opened:this.state.bd,onChange:()=>this.setState({bd:!this.state.bd})},Object.entries(b.defaultSettings).map(([a,{settings:b}])=>b.map(b=>this.renderBDSetting(a,b))))}renderBDSetting(b,c){let d=window.BDInternal?.SettingsManager;switch(c.type){case"switch":return c.requires&&c.requires.some(a=>!d.isEnabled(a))?null:h.default.createElement(i.Switch,{endDivider:!1,className:"unbound-bd-switch",title:c.name,checked:d.isEnabled(c.id)??c.value,onChange:a=>{d.setSetting(c.id,a),this.forceUpdate()}});case"category":return c.requires&&c.requires.some(a=>!d.isEnabled(a))?null:h.default.createElement(a.Category,{className:"unbound-bd-category",title:c.name,endDivider:!0,opened:this.state[`${b}-${c.name}`]?? !1,onChange:()=>this.setState({[`${b}-${c.name}`]:!this.state[`${b}-${c.name}`]})},c.items.map(a=>this.renderBDSetting(b,a)))}}componentWillUnmount(){if(this.toasts)for(let a of this.toasts)g.close(a)}onToastsChange(){for(let a of(this.toasts??=[],this.toasts))g.close(a,!0);this.toasts.push(g.open({title:c.Locale.Messages.UNBOUND_TOAST_EXAMPLE_TITLE,color:"var(--info-positive-foreground)",icon:"CheckmarkCircle",content:c.Locale.Messages.UNBOUND_TOAST_EXAMPLE_CONTENT}))}parsePosition(a){return a.includes("-")?a.split("-").map((a,b)=>0===b?a:`${a[0].toUpperCase()}${a.slice(1)}`).join(""):a.split(/(top|bottom)/).filter(Boolean).join("-").toLowerCase()}}const q=(0,b.connectComponent)(p,"unbound")
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9wYW5lbHMvR2VuZXJhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSwgQ2F0ZWdvcnksIEFzeW5jQ29tcG9uZW50LCBEaXZpZGVyIH0gZnJvbSAnQGNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdHlwZSBUb2FzdCBmcm9tICdAYXBpL3RvYXN0cy9jb21wb25lbnRzL1RvYXN0JztcclxuaW1wb3J0IHsgY29ubmVjdENvbXBvbmVudCB9IGZyb20gJ0BhcGkvc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMb2NhbGUsIENvbG9ycyB9IGZyb20gJ0B3ZWJwYWNrL2NvbW1vbic7XHJcbmltcG9ydCB7IG1lbW9pemUsIHBhcnNlQ29sb3IgfSBmcm9tICdAdXRpbGl0aWVzJztcclxuaW1wb3J0IHsgRm9ybVRpdGxlIH0gZnJvbSAnQGNvbXBvbmVudHMvZGlzY29yZCc7XHJcbmltcG9ydCB7IGZpbHRlcnMsIGZpbmRMYXp5IH0gZnJvbSAnQHdlYnBhY2snO1xyXG5pbXBvcnQgKiBhcyBUb2FzdHMgZnJvbSAnQGFwaS90b2FzdHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JQaWNrZXIsIFNsaWRlcklucHV0LCBTd2l0Y2ggfSBmcm9tICdAY29tcG9uZW50cy9zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQgU3R5bGVzIGZyb20gJ0BzdHlsZXMvcGFuZWxzL2dlbmVyYWwuY3NzJztcclxuaW1wb3J0IHsgQmQgfSBmcm9tICdAY29yZS9jb21wb25lbnRzL0ljb25zJztcclxuU3R5bGVzLmFwcGVuZCgpO1xyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uU2V0dGluZ3MgPSBtZW1vaXplKCgpID0+IGZpbmRMYXp5KGZpbHRlcnMuYnlEaXNwbGF5TmFtZSgnTm90aWZpY2F0aW9uU2V0dGluZ3MnKSkpO1xyXG5jb25zdCBCb3VuZFNlbGVjdG9yID0gQXN5bmNDb21wb25lbnQuZnJvbShOb3RpZmljYXRpb25TZXR0aW5ncyk7XHJcblxyXG5pbnRlcmZhY2UgR2VuZXJhbFBhbmVsUHJvcHMge1xyXG4gICBzZXR0aW5nczogU2V0dGluZ3NTdG9yZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEdlbmVyYWxQYW5lbFN0YXRlIHtcclxuICAgdG9hc3RzOiBib29sZWFuO1xyXG4gICBkZXZlbG9wZXI6IGJvb2xlYW47XHJcbiAgIGJkOiBib29sZWFuO1xyXG4gICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmNsYXNzIEdlbmVyYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8R2VuZXJhbFBhbmVsUHJvcHMsIEdlbmVyYWxQYW5lbFN0YXRlPiB7XHJcbiAgIHB1YmxpYyB0b2FzdHM6IFRvYXN0W107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICB0b2FzdHM6IGZhbHNlLFxyXG4gICAgICAgICBkZXZlbG9wZXI6IGZhbHNlLFxyXG4gICAgICAgICBiZDogZmFsc2VcclxuICAgICAgfTtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gPEVycm9yQm91bmRhcnk+XHJcbiAgICAgICAgIDxGb3JtVGl0bGUgdGFnPSdoMScgY2xhc3NOYW1lPSd1bmJvdW5kLXNldHRpbmdzLXRpdGxlJz5cclxuICAgICAgICAgICAge0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0dFTkVSQUx9XHJcbiAgICAgICAgIDwvRm9ybVRpdGxlPlxyXG4gICAgICAgICB7dGhpcy5yZW5kZXJUb2FzdHMoKX1cclxuICAgICAgICAge3RoaXMucmVuZGVyRGV2ZWxvcGVyKCl9XHJcbiAgICAgICAgIHt0aGlzLnJlbmRlckJEU2V0dGluZ3MoKX1cclxuICAgICAgPC9FcnJvckJvdW5kYXJ5PjtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyVG9hc3RzKCkge1xyXG4gICAgICBjb25zdCB7IHNldHRpbmdzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgY29uc3QgZGVmYXVsdEJnID0gcGFyc2VDb2xvcignLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5Jyk7XHJcblxyXG4gICAgICByZXR1cm4gPENhdGVnb3J5XHJcbiAgICAgICAgIHRpdGxlPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9UT0FTVF9TRVRUSU5HU19USVRMRX1cclxuICAgICAgICAgZGVzY3JpcHRpb249e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX1NFVFRJTkdTX0RFU0NSSVBUSU9OfVxyXG4gICAgICAgICBpY29uPSdDaGF0QnViYmxlJ1xyXG4gICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtc2V0dGluZ3MtdG9hc3QtY2F0ZWdvcnknXHJcbiAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZS50b2FzdHN9XHJcbiAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHMgPT4gKHsgLi4ucywgdG9hc3RzOiAhcy50b2FzdHMgfSkpfVxyXG4gICAgICA+XHJcbiAgICAgICAgIDxCb3VuZFNlbGVjdG9yXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndW5ib3VuZC1zZXR0aW5ncy10b2FzdC1wb3NpdGlvbidcclxuICAgICAgICAgICAgcG9zaXRpb249e3RoaXMucGFyc2VQb3NpdGlvbihzZXR0aW5ncy5nZXQoJ3RvYXN0cy5wb3NpdGlvbicsICdib3R0b20tcmlnaHQnKSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoXywgdikgPT4ge1xyXG4gICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGFyc2VQb3NpdGlvbih2KTtcclxuICAgICAgICAgICAgICAgc2V0dGluZ3Muc2V0KCd0b2FzdHMucG9zaXRpb24nLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgIHRoaXMub25Ub2FzdHNDaGFuZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJ2Rpc2FibGVkJykge1xyXG4gICAgICAgICAgICAgICAgICBUb2FzdHMuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwIH19IC8+XHJcbiAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgdGl0bGU9e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX1NFVFRJTkdTX1JFU0VUX1RJTUVPVVRfVElUTEV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9UT0FTVF9TRVRUSU5HU19SRVNFVF9USU1FT1VUX0RFU0NSSVBUSU9OfVxyXG4gICAgICAgICAgICBjaGVja2VkPXtzZXR0aW5ncy5nZXQoJ3RvYXN0cy5yZXNldFRpbWVvdXRPbkhvdmVyJywgZmFsc2UpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0dGluZ3MudG9nZ2xlKCd0b2FzdHMucmVzZXRUaW1lb3V0T25Ib3ZlcicsIGZhbHNlKX1cclxuICAgICAgICAgLz5cclxuICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICB0aXRsZT17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfQ1VTVE9NX1RJVExFfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfQ1VTVE9NX0RFU0NSSVBUSU9OfVxyXG4gICAgICAgICAgICBjaGVja2VkPXtzZXR0aW5ncy5nZXQoJ3RvYXN0cy51c2VDdXN0b21Db2xvdXJzJywgZmFsc2UpfVxyXG4gICAgICAgICAgICBlbmREaXZpZGVyPXtzZXR0aW5ncy5nZXQoJ3RvYXN0cy51c2VDdXN0b21Db2xvdXJzJywgZmFsc2UpfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0dGluZ3MudG9nZ2xlKCd0b2FzdHMudXNlQ3VzdG9tQ29sb3VycycsIGZhbHNlKX1cclxuICAgICAgICAgICAgYm90dG9tTWFyZ2luPXtzZXR0aW5ncy5nZXQoJ3RvYXN0cy51c2VDdXN0b21Db2xvdXJzJywgZmFsc2UpID8gMTUgOiA3LjV9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIHtzZXR0aW5ncy5nZXQoJ3RvYXN0cy51c2VDdXN0b21Db2xvdXJzJywgZmFsc2UpICYmIDw+XHJcbiAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MuZ2V0KCd0b2FzdHMuYmdDb2xvcicpfVxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtc2V0dGluZ3MtdG9hc3QtY29sb3InXHJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ID0+IHNldHRpbmdzLnNldCgndG9hc3RzLmJnQ29sb3InLCB2KX1cclxuICAgICAgICAgICAgICAgZGVmYXVsdD17Q29sb3JzLnJnYjJpbnQoYHJnYigke2RlZmF1bHRCZ1swXX0sICR7ZGVmYXVsdEJnWzFdfSwgJHtkZWZhdWx0QmdbMl19KWApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2xpZGVySW5wdXRcclxuICAgICAgICAgICAgICAgdGl0bGU9e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX1NFVFRJTkdTX09QQUNJVFlfVElUTEV9XHJcbiAgICAgICAgICAgICAgIG1pblZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICBtYXhWYWx1ZT17MTB9XHJcbiAgICAgICAgICAgICAgIG1hcmtlcnM9e1sxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF19XHJcbiAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MTB9XHJcbiAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17KHNldHRpbmdzLmdldCgndG9hc3RzLmJnT3BhY2l0eScsIDAuNSkgKiAxMCl9XHJcbiAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U9e3YgPT4gc2V0dGluZ3Muc2V0KCd0b2FzdHMuYmdPcGFjaXR5JywgdiAvIDEwKX1cclxuICAgICAgICAgICAgICAgb25NYXJrZXJSZW5kZXI9e3YgPT4gYCR7diAvIDEwfWB9XHJcbiAgICAgICAgICAgICAgIG9uVmFsdWVSZW5kZXI9e3YgPT4gKHYgLyAxMCkudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNsaWRlcklucHV0XHJcbiAgICAgICAgICAgICAgIHRpdGxlPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9UT0FTVF9TRVRUSU5HU19CTFVSX1RJVExFfVxyXG4gICAgICAgICAgICAgICBtaW5WYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgbWF4VmFsdWU9ezE1fVxyXG4gICAgICAgICAgICAgICBtYXJrZXJzPXtbMCwgMi41LCA1LCA3LjUsIDEwLCAxMi41LCAxNV19XHJcbiAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Ny41fVxyXG4gICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e3NldHRpbmdzLmdldCgndG9hc3RzLmJsdXJBbW91bnQnLCA3LjUpfVxyXG4gICAgICAgICAgICAgICBvblZhbHVlQ2hhbmdlPXt2ID0+IHNldHRpbmdzLnNldCgndG9hc3RzLmJsdXJBbW91bnQnLCB2KX1cclxuICAgICAgICAgICAgICAgZW5kRGl2aWRlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgIGJvdHRvbU1hcmdpbj17Ny41fVxyXG4gICAgICAgICAgICAgICBvblZhbHVlUmVuZGVyPXt2ID0+IHYudG9GaXhlZCgxKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgPC8+fVxyXG4gICAgICA8L0NhdGVnb3J5PjtcclxuICAgfVxyXG5cclxuICAgcmVuZGVyRGV2ZWxvcGVyKCkge1xyXG4gICAgICBjb25zdCB7IHNldHRpbmdzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcmV0dXJuIDxDYXRlZ29yeVxyXG4gICAgICAgICB0aXRsZT17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfREVWX1NFVFRJTkdTX1RJVExFfVxyXG4gICAgICAgICBkZXNjcmlwdGlvbj17TG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfREVWX1NFVFRJTkdTX0RFU0NSSVBUSU9OfVxyXG4gICAgICAgICBpY29uPSdJbmxpbmVDb2RlJ1xyXG4gICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtc2V0dGluZ3MtZGV2ZWxvcGVyLWNhdGVnb3J5J1xyXG4gICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUuZGV2ZWxvcGVyfVxyXG4gICAgICAgICBvbkNoYW5nZT17KCkgPT4gdGhpcy5zZXRTdGF0ZShzID0+ICh7IC4uLnMsIGRldmVsb3BlcjogIXMuZGV2ZWxvcGVyIH0pKX1cclxuICAgICAgPlxyXG4gICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgIHRpdGxlPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9ERVZfU0VUVElOR1NfV0FSTklOR19USVRMRX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0RFVl9TRVRUSU5HU19XQVJOSU5HX0RFU0NSSVBUSU9OfVxyXG4gICAgICAgICAgICBjaGVja2VkPXtzZXR0aW5ncy5nZXQoJ2Rldi5kZXZ0b29sc1dhcm5pbmcnLCBmYWxzZSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXR0aW5ncy50b2dnbGUoJ2Rldi5kZXZ0b29sc1dhcm5pbmcnLCBmYWxzZSl9XHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgdGl0bGU9e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0RFVl9TRVRUSU5HU19FWFBFUklNRU5UU19USVRMRX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0RFVl9TRVRUSU5HU19FWFBFUklNRU5UU19ERVNDUklQVElPTn1cclxuICAgICAgICAgICAgY2hlY2tlZD17c2V0dGluZ3MuZ2V0KCdkZXYuZXhwZXJpbWVudHMnLCBmYWxzZSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXR0aW5ncy50b2dnbGUoJ2Rldi5leHBlcmltZW50cycsIGZhbHNlKX1cclxuICAgICAgICAgICAgYm90dG9tTWFyZ2luPXs3LjV9XHJcbiAgICAgICAgICAgIGVuZERpdmlkZXI9e2ZhbHNlfVxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMi41IH19IC8+XHJcbiAgICAgIDwvQ2F0ZWdvcnk+O1xyXG4gICB9XHJcblxyXG4gICByZW5kZXJCRFNldHRpbmdzKCkge1xyXG4gICAgICBpZiAoIXdpbmRvdy5CZEFwaSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHdpbmRvdy5CREludGVybmFsPy5TZXR0aW5nc01hbmFnZXI7XHJcblxyXG4gICAgICByZXR1cm4gPENhdGVnb3J5XHJcbiAgICAgICAgIHRpdGxlPXtMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9CRF9TRVRUSU5HU19USVRMRX1cclxuICAgICAgICAgZGVzY3JpcHRpb249e0xvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX0JEX1NFVFRJTkdTX0RFU0NSSVBUSU9OfVxyXG4gICAgICAgICBpY29uPXsoKSA9PiA8QmQgY2xhc3NOYW1lPSd1bmJvdW5kLWNhdGVnb3J5LWljb24nIC8+fVxyXG4gICAgICAgICBvcGVuZWQ9e3RoaXMuc3RhdGUuYmR9XHJcbiAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgYmQ6ICF0aGlzLnN0YXRlLmJkIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgIHsoT2JqZWN0LmVudHJpZXMoc2V0dGluZ3MuZGVmYXVsdFNldHRpbmdzKSBhcyBhbnkpLm1hcCgoW2NhdGVnb3J5LCB7IHNldHRpbmdzIH1dKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5tYXAocyA9PiB0aGlzLnJlbmRlckJEU2V0dGluZyhjYXRlZ29yeSwgcykpO1xyXG4gICAgICAgICB9KX1cclxuICAgICAgPC9DYXRlZ29yeT47XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlckJEU2V0dGluZyhjYXRlZ29yeSwgc2V0dGluZykge1xyXG4gICAgICBjb25zdCBzZXR0aW5ncyA9IHdpbmRvdy5CREludGVybmFsPy5TZXR0aW5nc01hbmFnZXI7XHJcblxyXG4gICAgICBzd2l0Y2ggKHNldHRpbmcudHlwZSkge1xyXG4gICAgICAgICBjYXNlICdzd2l0Y2gnOlxyXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZy5yZXF1aXJlcyAmJiBzZXR0aW5nLnJlcXVpcmVzLnNvbWUocyA9PiAhc2V0dGluZ3MuaXNFbmFibGVkKHMpKSA/IG51bGwgOiA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgIGVuZERpdmlkZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYmQtc3dpdGNoJ1xyXG4gICAgICAgICAgICAgICB0aXRsZT17c2V0dGluZy5uYW1lfVxyXG4gICAgICAgICAgICAgICBjaGVja2VkPXtzZXR0aW5ncy5pc0VuYWJsZWQoc2V0dGluZy5pZCkgPz8gc2V0dGluZy52YWx1ZX1cclxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e3YgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zZXRTZXR0aW5nKHNldHRpbmcuaWQsIHYpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICBjYXNlICdjYXRlZ29yeSc6XHJcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5nLnJlcXVpcmVzICYmIHNldHRpbmcucmVxdWlyZXMuc29tZShzID0+ICFzZXR0aW5ncy5pc0VuYWJsZWQocykpID8gbnVsbCA6IDxDYXRlZ29yeVxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtYmQtY2F0ZWdvcnknXHJcbiAgICAgICAgICAgICAgIHRpdGxlPXtzZXR0aW5nLm5hbWV9XHJcbiAgICAgICAgICAgICAgIGVuZERpdmlkZXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgIG9wZW5lZD17dGhpcy5zdGF0ZVtgJHtjYXRlZ29yeX0tJHtzZXR0aW5nLm5hbWV9YF0gPz8gZmFsc2V9XHJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgW2Ake2NhdGVnb3J5fS0ke3NldHRpbmcubmFtZX1gXTogISh0aGlzLnN0YXRlW2Ake2NhdGVnb3J5fS0ke3NldHRpbmcubmFtZX1gXSA/PyBmYWxzZSlcclxuICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAge3NldHRpbmcuaXRlbXMubWFwKHNldHRpbmcgPT4gdGhpcy5yZW5kZXJCRFNldHRpbmcoY2F0ZWdvcnksIHNldHRpbmcpKX1cclxuICAgICAgICAgICAgPC9DYXRlZ29yeT47XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIGlmICghdGhpcy50b2FzdHMpIHJldHVybjtcclxuXHJcbiAgICAgIGZvciAoY29uc3QgdG9hc3Qgb2YgdGhpcy50b2FzdHMpIHtcclxuICAgICAgICAgVG9hc3RzLmNsb3NlKHRvYXN0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBvblRvYXN0c0NoYW5nZSgpIHtcclxuICAgICAgdGhpcy50b2FzdHMgPz89IFtdO1xyXG5cclxuICAgICAgZm9yIChjb25zdCB0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xyXG4gICAgICAgICBUb2FzdHMuY2xvc2UodG9hc3QsIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRvYXN0cy5wdXNoKFRvYXN0cy5vcGVuKHtcclxuICAgICAgICAgdGl0bGU6IExvY2FsZS5NZXNzYWdlcy5VTkJPVU5EX1RPQVNUX0VYQU1QTEVfVElUTEUsXHJcbiAgICAgICAgIGNvbG9yOiAndmFyKC0taW5mby1wb3NpdGl2ZS1mb3JlZ3JvdW5kKScsXHJcbiAgICAgICAgIGljb246ICdDaGVja21hcmtDaXJjbGUnLFxyXG4gICAgICAgICBjb250ZW50OiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9UT0FTVF9FWEFNUExFX0NPTlRFTlRcclxuICAgICAgfSkpO1xyXG4gICB9XHJcblxyXG4gICBwYXJzZVBvc2l0aW9uKHBvc2l0aW9uKTogJ3RvcC1yaWdodCcgfCAnYm90dG9tLXJpZ2h0JyB8ICd0b3AtbGVmdCcgfCAnYm90dG9tLWxlZnQnIHwgJ2Rpc2FibGVkJyB7XHJcbiAgICAgIGlmIChwb3NpdGlvbi5pbmNsdWRlcygnLScpKSB7XHJcbiAgICAgICAgIHJldHVybiBwb3NpdGlvbi5zcGxpdCgnLScpLm1hcCgoaXRlbSwgaWR4KSA9PiBpZHggPT09IDAgPyBpdGVtIDogYCR7aXRlbVswXS50b1VwcGVyQ2FzZSgpfSR7aXRlbS5zbGljZSgxKX1gKS5qb2luKCcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgcmV0dXJuIHBvc2l0aW9uLnNwbGl0KC8odG9wfGJvdHRvbSkvKS5maWx0ZXIoQm9vbGVhbikuam9pbignLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0Q29tcG9uZW50KEdlbmVyYWwsICd1bmJvdW5kJyk7Il0sIm5hbWVzIjpbIlN0eWxlcyIsImFwcGVuZCIsIk5vdGlmaWNhdGlvblNldHRpbmdzIiwibWVtb2l6ZSIsImZpbmRMYXp5IiwiZmlsdGVycyIsImJ5RGlzcGxheU5hbWUiLCJCb3VuZFNlbGVjdG9yIiwiQXN5bmNDb21wb25lbnQiLCJmcm9tIiwiR2VuZXJhbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidG9hc3RzIiwiZGV2ZWxvcGVyIiwiYmQiLCJyZW5kZXIiLCJFcnJvckJvdW5kYXJ5IiwiRm9ybVRpdGxlIiwidGFnIiwiY2xhc3NOYW1lIiwiTG9jYWxlIiwiTWVzc2FnZXMiLCJVTkJPVU5EX0dFTkVSQUwiLCJyZW5kZXJUb2FzdHMiLCJyZW5kZXJEZXZlbG9wZXIiLCJyZW5kZXJCRFNldHRpbmdzIiwic2V0dGluZ3MiLCJkZWZhdWx0QmciLCJwYXJzZUNvbG9yIiwiQ2F0ZWdvcnkiLCJ0aXRsZSIsIlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfVElUTEUiLCJkZXNjcmlwdGlvbiIsIlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfREVTQ1JJUFRJT04iLCJpY29uIiwib3BlbmVkIiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsInMiLCJwb3NpdGlvbiIsInBhcnNlUG9zaXRpb24iLCJnZXQiLCJfIiwidiIsInNldCIsIm9uVG9hc3RzQ2hhbmdlIiwiVG9hc3RzIiwiY2xlYXIiLCJEaXZpZGVyIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJTd2l0Y2giLCJVTkJPVU5EX1RPQVNUX1NFVFRJTkdTX1JFU0VUX1RJTUVPVVRfVElUTEUiLCJVTkJPVU5EX1RPQVNUX1NFVFRJTkdTX1JFU0VUX1RJTUVPVVRfREVTQ1JJUFRJT04iLCJjaGVja2VkIiwidG9nZ2xlIiwiVU5CT1VORF9UT0FTVF9TRVRUSU5HU19DVVNUT01fVElUTEUiLCJVTkJPVU5EX1RPQVNUX1NFVFRJTkdTX0NVU1RPTV9ERVNDUklQVElPTiIsImVuZERpdmlkZXIiLCJib3R0b21NYXJnaW4iLCJDb2xvclBpY2tlciIsInZhbHVlIiwiZGVmYXVsdCIsIkNvbG9ycyIsInJnYjJpbnQiLCJTbGlkZXJJbnB1dCIsIlVOQk9VTkRfVE9BU1RfU0VUVElOR1NfT1BBQ0lUWV9USVRMRSIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJtYXJrZXJzIiwiZGVmYXVsdFZhbHVlIiwiaW5pdGlhbFZhbHVlIiwib25WYWx1ZUNoYW5nZSIsIm9uTWFya2VyUmVuZGVyIiwib25WYWx1ZVJlbmRlciIsInRvRml4ZWQiLCJVTkJPVU5EX1RPQVNUX1NFVFRJTkdTX0JMVVJfVElUTEUiLCJVTkJPVU5EX0RFVl9TRVRUSU5HU19USVRMRSIsIlVOQk9VTkRfREVWX1NFVFRJTkdTX0RFU0NSSVBUSU9OIiwiVU5CT1VORF9ERVZfU0VUVElOR1NfV0FSTklOR19USVRMRSIsIlVOQk9VTkRfREVWX1NFVFRJTkdTX1dBUk5JTkdfREVTQ1JJUFRJT04iLCJVTkJPVU5EX0RFVl9TRVRUSU5HU19FWFBFUklNRU5UU19USVRMRSIsIlVOQk9VTkRfREVWX1NFVFRJTkdTX0VYUEVSSU1FTlRTX0RFU0NSSVBUSU9OIiwiZGl2IiwibWFyZ2luQm90dG9tIiwid2luZG93IiwiQmRBcGkiLCJCREludGVybmFsIiwiU2V0dGluZ3NNYW5hZ2VyIiwiVU5CT1VORF9CRF9TRVRUSU5HU19USVRMRSIsIlVOQk9VTkRfQkRfU0VUVElOR1NfREVTQ1JJUFRJT04iLCJCZCIsIk9iamVjdCIsImVudHJpZXMiLCJkZWZhdWx0U2V0dGluZ3MiLCJtYXAiLCJjYXRlZ29yeSIsInJlbmRlckJEU2V0dGluZyIsInNldHRpbmciLCJ0eXBlIiwicmVxdWlyZXMiLCJzb21lIiwiaXNFbmFibGVkIiwibmFtZSIsImlkIiwic2V0U2V0dGluZyIsImZvcmNlVXBkYXRlIiwiaXRlbXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInRvYXN0IiwiY2xvc2UiLCJwdXNoIiwib3BlbiIsIlVOQk9VTkRfVE9BU1RfRVhBTVBMRV9USVRMRSIsImNvbG9yIiwiY29udGVudCIsIlVOQk9VTkRfVE9BU1RfRVhBTVBMRV9DT05URU5UIiwiaW5jbHVkZXMiLCJzcGxpdCIsIml0ZW0iLCJpZHgiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImZpbHRlciIsIkJvb2xlYW4iLCJ0b0xvd2VyQ2FzZSIsImNvbm5lY3RDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBLGtHQThPQSxT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