"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:()=>a});const e=require("../../api/settings"),t=require("../components/Icons"),n=require("../../components/discord"),r=require("../../modules/webpack/common"),o=function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(require("../../api/toasts")),l=require("../../../common/utilities/index"),i=_interopRequireDefault(require("./Manager")),u=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}class Plugins extends i.default{constructor(e){super(e,"plugins"),this.state={search:"",breadcrumbs:[],settings:{entity:null,client:null}}}componentWillMount(){let e=this.forceUpdate.bind(this,null);window.powercord&&powercord.pluginManager.on("updated",e),window.BdApi&&BdApi.Plugins.on("updated",e),window.unbound&&unbound.managers.plugins.on("updated",e)}componentWillUnmount(){let e=this.forceUpdate.bind(this,null);window.powercord&&powercord.pluginManager.off("updated",e),window.BdApi&&BdApi.Plugins.off("updated",e),window.unbound&&unbound.managers.plugins.off("updated",e)}getAddons(){let e={unbound:[...unbound.managers.plugins.entities.values()],powercord:[],bd:[]};return window.powercord&&e.powercord.push(...powercord.pluginManager.addons),window.BdApi&&e.bd.push(...BdApi.Plugins.getAll()),{addons:e,count:Object.values(e).flat().length}}onReload(){let e={unbound:[],powercord:[]};if(window.unbound){let l=unbound.managers.plugins.loadMissing();e.unbound.push(...l.loaded)}if(window.powercord){let i=powercord.pluginManager.loadAll(!0,!1);e.powercord.push(...i)}let a=Object.entries(e).flatMap(([e,r])=>{if(!r.length)return;let o=[];for(let l of r){let i=this.resolve(l,e,"name");o.push(u.default.createElement(n.Flex,{direction:n.Flex.Direction.HORIZONTAL,align:n.Flex.Align.CENTER,wrap:n.Flex.Wrap.NO_WRAP},"powercord"===e?u.default.createElement(t.Plug,{width:12,height:12}):null," ",i))}return o}).filter(Boolean);if(!a.length)return o.open({title:r.Locale.Messages.UNREADS_EMPTY_STATE_HEADER,content:r.Locale.Messages.UNBOUND_ADDONS_MISSING_NONE,color:"var(--info-positive-foreground)",timeout:2500,icon:"CheckmarkCircle"});o.open({title:r.Locale.Messages.UNBOUND_ADDONS_FOUND.format({type:"plugins"}),icon:"CheckmarkCircle",color:"var(--info-positive-foreground)",timeout:5e3,content:()=>a})}}!function(e,t,n,r){var o,l=arguments.length,i=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(l<3?o(i):l>3?o(t,n,i):o(t,n))||i);return l>3&&i&&Object.defineProperty(t,n,i),i}([l.bind],Plugins.prototype,"onReload",null);const a=(0,e.connectComponent)(Plugins,"plugins-manager")
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9wYW5lbHMvUGx1Z2lucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdENvbXBvbmVudCB9IGZyb20gJ0BhcGkvc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBQbHVnIH0gZnJvbSAnQGNvcmUvY29tcG9uZW50cy9JY29ucyc7XHJcbmltcG9ydCB7IEZsZXggfSBmcm9tICdAY29tcG9uZW50cy9kaXNjb3JkJztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnQHdlYnBhY2svY29tbW9uJztcclxuaW1wb3J0ICogYXMgVG9hc3RzIGZyb20gJ0BhcGkvdG9hc3RzJztcclxuaW1wb3J0IHsgYmluZCB9IGZyb20gJ0B1dGlsaXRpZXMnO1xyXG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL01hbmFnZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUGx1Z2lucyBleHRlbmRzIE1hbmFnZXIge1xyXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcywgJ3BsdWdpbnMnKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgIGJyZWFkY3J1bWJzOiBbXSxcclxuICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgZW50aXR5OiBudWxsLFxyXG4gICAgICAgICAgICBjbGllbnQ6IG51bGxcclxuICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICB9XHJcblxyXG4gICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMsIG51bGwpO1xyXG5cclxuICAgICAgd2luZG93LnBvd2VyY29yZCAmJiBwb3dlcmNvcmQucGx1Z2luTWFuYWdlci5vbigndXBkYXRlZCcsIGZvcmNlVXBkYXRlKTtcclxuICAgICAgd2luZG93LkJkQXBpICYmIEJkQXBpLlBsdWdpbnMub24oJ3VwZGF0ZWQnLCBmb3JjZVVwZGF0ZSk7XHJcbiAgICAgIHdpbmRvdy51bmJvdW5kICYmIHVuYm91bmQubWFuYWdlcnMucGx1Z2lucy5vbigndXBkYXRlZCcsIGZvcmNlVXBkYXRlKTtcclxuICAgfVxyXG5cclxuICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IGZvcmNlVXBkYXRlID0gdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMsIG51bGwpO1xyXG5cclxuICAgICAgd2luZG93LnBvd2VyY29yZCAmJiBwb3dlcmNvcmQucGx1Z2luTWFuYWdlci5vZmYoJ3VwZGF0ZWQnLCBmb3JjZVVwZGF0ZSk7XHJcbiAgICAgIHdpbmRvdy5CZEFwaSAmJiBCZEFwaS5QbHVnaW5zLm9mZigndXBkYXRlZCcsIGZvcmNlVXBkYXRlKTtcclxuICAgICAgd2luZG93LnVuYm91bmQgJiYgdW5ib3VuZC5tYW5hZ2Vycy5wbHVnaW5zLm9mZigndXBkYXRlZCcsIGZvcmNlVXBkYXRlKTtcclxuICAgfVxyXG5cclxuICAgb3ZlcnJpZGUgZ2V0QWRkb25zKCkge1xyXG4gICAgICBjb25zdCBhZGRvbnMgPSB7XHJcbiAgICAgICAgIHVuYm91bmQ6IFsuLi51bmJvdW5kLm1hbmFnZXJzLnBsdWdpbnMuZW50aXRpZXMudmFsdWVzKCldLFxyXG4gICAgICAgICBwb3dlcmNvcmQ6IFtdLFxyXG4gICAgICAgICBiZDogW11cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3cucG93ZXJjb3JkKSB7XHJcbiAgICAgICAgIGFkZG9ucy5wb3dlcmNvcmQucHVzaCguLi5wb3dlcmNvcmQucGx1Z2luTWFuYWdlci5hZGRvbnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAod2luZG93LkJkQXBpKSB7XHJcbiAgICAgICAgIGFkZG9ucy5iZC5wdXNoKC4uLkJkQXBpLlBsdWdpbnMuZ2V0QWxsKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBhZGRvbnMsIGNvdW50OiBPYmplY3QudmFsdWVzKGFkZG9ucykuZmxhdCgpLmxlbmd0aCB9O1xyXG4gICB9XHJcblxyXG4gICBAYmluZFxyXG4gICBvdmVycmlkZSBvblJlbG9hZCgpIHtcclxuICAgICAgY29uc3QgbWlzc2luZyA9IHtcclxuICAgICAgICAgdW5ib3VuZDogW10sXHJcbiAgICAgICAgIHBvd2VyY29yZDogW11cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3cudW5ib3VuZCkge1xyXG4gICAgICAgICBjb25zdCBwYXlsb2FkID0gdW5ib3VuZC5tYW5hZ2Vycy5wbHVnaW5zLmxvYWRNaXNzaW5nKCk7XHJcbiAgICAgICAgIG1pc3NpbmcudW5ib3VuZC5wdXNoKC4uLnBheWxvYWQubG9hZGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHdpbmRvdy5wb3dlcmNvcmQpIHtcclxuICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHBvd2VyY29yZC5wbHVnaW5NYW5hZ2VyLmxvYWRBbGwodHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgICBtaXNzaW5nLnBvd2VyY29yZC5wdXNoKC4uLnBheWxvYWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBPYmplY3QuZW50cmllcyhtaXNzaW5nKS5mbGF0TWFwKChbY2xpZW50LCBhZGRvbnNdKSA9PiB7XHJcbiAgICAgICAgIGlmICghYWRkb25zLmxlbmd0aCkgcmV0dXJuO1xyXG4gICAgICAgICBjb25zdCBjb250ZW50ID0gW107XHJcblxyXG4gICAgICAgICBmb3IgKGNvbnN0IGFkZG9uIG9mIGFkZG9ucykge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5yZXNvbHZlKGFkZG9uLCBjbGllbnQsICduYW1lJyk7XHJcblxyXG4gICAgICAgICAgICBjb250ZW50LnB1c2goPEZsZXhcclxuICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtGbGV4LkRpcmVjdGlvbi5IT1JJWk9OVEFMfVxyXG4gICAgICAgICAgICAgICBhbGlnbj17RmxleC5BbGlnbi5DRU5URVJ9XHJcbiAgICAgICAgICAgICAgIHdyYXA9e0ZsZXguV3JhcC5OT19XUkFQfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIHtjbGllbnQgPT09ICdwb3dlcmNvcmQnID8gPFBsdWdcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyfVxyXG4gICAgICAgICAgICAgICAvPiA6IG51bGx9IHtuYW1lfVxyXG4gICAgICAgICAgICA8L0ZsZXg+KTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICAgIH0pLmZpbHRlcihCb29sZWFuKSBhcyBhbnkgYXMgSlNYLkVsZW1lbnRbXTtcclxuXHJcbiAgICAgIGlmICghcmVzLmxlbmd0aCkge1xyXG4gICAgICAgICByZXR1cm4gVG9hc3RzLm9wZW4oe1xyXG4gICAgICAgICAgICB0aXRsZTogTG9jYWxlLk1lc3NhZ2VzLlVOUkVBRFNfRU1QVFlfU1RBVEVfSEVBREVSLFxyXG4gICAgICAgICAgICBjb250ZW50OiBMb2NhbGUuTWVzc2FnZXMuVU5CT1VORF9BRERPTlNfTUlTU0lOR19OT05FLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLWluZm8tcG9zaXRpdmUtZm9yZWdyb3VuZCknLFxyXG4gICAgICAgICAgICB0aW1lb3V0OiAyNTAwLFxyXG4gICAgICAgICAgICBpY29uOiAnQ2hlY2ttYXJrQ2lyY2xlJ1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgVG9hc3RzLm9wZW4oe1xyXG4gICAgICAgICB0aXRsZTogTG9jYWxlLk1lc3NhZ2VzLlVOQk9VTkRfQURET05TX0ZPVU5ELmZvcm1hdCh7IHR5cGU6ICdwbHVnaW5zJyB9KSxcclxuICAgICAgICAgaWNvbjogJ0NoZWNrbWFya0NpcmNsZScsXHJcbiAgICAgICAgIGNvbG9yOiAndmFyKC0taW5mby1wb3NpdGl2ZS1mb3JlZ3JvdW5kKScsXHJcbiAgICAgICAgIHRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgIGNvbnRlbnQ6ICgpOiBKU1guRWxlbWVudCA9PiByZXMgYXMgYW55IGFzIEpTWC5FbGVtZW50XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RDb21wb25lbnQoUGx1Z2lucywgJ3BsdWdpbnMtbWFuYWdlcicpOyJdLCJuYW1lcyI6WyJQbHVnaW5zIiwiTWFuYWdlciIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaCIsImJyZWFkY3J1bWJzIiwic2V0dGluZ3MiLCJlbnRpdHkiLCJjbGllbnQiLCJjb21wb25lbnRXaWxsTW91bnQiLCJmb3JjZVVwZGF0ZSIsImJpbmQiLCJ3aW5kb3ciLCJwb3dlcmNvcmQiLCJwbHVnaW5NYW5hZ2VyIiwib24iLCJCZEFwaSIsInVuYm91bmQiLCJtYW5hZ2VycyIsInBsdWdpbnMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm9mZiIsImdldEFkZG9ucyIsImFkZG9ucyIsImVudGl0aWVzIiwidmFsdWVzIiwiYmQiLCJwdXNoIiwiZ2V0QWxsIiwiY291bnQiLCJPYmplY3QiLCJmbGF0IiwibGVuZ3RoIiwib25SZWxvYWQiLCJtaXNzaW5nIiwicGF5bG9hZCIsImxvYWRNaXNzaW5nIiwibG9hZGVkIiwibG9hZEFsbCIsInJlcyIsImVudHJpZXMiLCJmbGF0TWFwIiwiY29udGVudCIsImFkZG9uIiwibmFtZSIsInJlc29sdmUiLCJGbGV4IiwiZGlyZWN0aW9uIiwiRGlyZWN0aW9uIiwiSE9SSVpPTlRBTCIsImFsaWduIiwiQWxpZ24iLCJDRU5URVIiLCJ3cmFwIiwiV3JhcCIsIk5PX1dSQVAiLCJQbHVnIiwid2lkdGgiLCJoZWlnaHQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiVG9hc3RzIiwib3BlbiIsInRpdGxlIiwiTG9jYWxlIiwiTWVzc2FnZXMiLCJVTlJFQURTX0VNUFRZX1NUQVRFX0hFQURFUiIsIlVOQk9VTkRfQURET05TX01JU1NJTkdfTk9ORSIsImNvbG9yIiwidGltZW91dCIsImljb24iLCJVTkJPVU5EX0FERE9OU19GT1VORCIsImZvcm1hdCIsInR5cGUiLCJjb25uZWN0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxrR0FvSEEsU0FBNEQsd0JBQTVELENBQTRELG1CQXBIM0Isb0JBQWUsWUFDM0IscUJBQXdCLFlBQ3hCLDBCQUFxQixZQUNuQiw4QkFBaUIsd2ZBQ2hCLGtCQUFhLGFBQ2hCLGlDQUFZLG1DQUNiLFdBQVcsb0NBQ2IsT0FBTyx3UEFFekIsTUFBTUEsT0FBTyxTQUFTQyxDQUFPLFFBQUEsQ0FDMUJDLFlBQVlDLENBQUssQ0FBRSxDQUNoQixLQUFLLENBQUNBLENBQUssQ0FBRSxTQUFTLENBQUMsQ0FFdkIsSUFBSSxDQUFDQyxLQUFLLENBQUcsQ0FDVkMsTUFBTSxDQUFFLEVBQUUsQ0FDVkMsV0FBVyxDQUFFLEVBQUUsQ0FDZkMsUUFBUSxDQUFFLENBQ1BDLE1BQU0sQ0FBRSxJQUFJLENBQ1pDLE1BQU0sQ0FBRSxJQUFJLENBQ2QsQ0FDSCxDQUNILEFBRURDLGtCQUFrQixFQUFHLENBQ2xCLElBQU1DLENBQVcsQ0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsQUFBQyxBQUV0REMsQ0FBQUEsTUFBTSxDQUFDQyxTQUFTLEVBQUlBLFNBQVMsQ0FBQ0MsYUFBYSxDQUFDQyxFQUFFLENBQUMsU0FBUyxDQUFFTCxDQUFXLENBQUMsQ0FDdEVFLE1BQU0sQ0FBQ0ksS0FBSyxFQUFJQSxLQUFLLENBQUNqQixPQUFPLENBQUNnQixFQUFFLENBQUMsU0FBUyxDQUFFTCxDQUFXLENBQUMsQ0FDeERFLE1BQU0sQ0FBQ0ssT0FBTyxFQUFJQSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDSixFQUFFLENBQUMsU0FBUyxDQUFFTCxDQUFXLENBQUMsQ0FDdkUs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