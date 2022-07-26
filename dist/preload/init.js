"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("./compilers/index"),require("./aliases"),require("./fixes/index");const a=require("electron"),b=require("../common/constants"),c=require("@webpack");function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}function e(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}global.isUnbound=!0;const{windowOptions:f}=a.ipcRenderer.sendSync(b.IPCEvents.GET_WINDOW_OPTIONS);f.webPreferences.nativeWindowOpen?(window.__MAIN__=!0,(0,c.initialize)().then(()=>Promise.resolve().then(()=>e(require("../client/index"))))):(window.__SPLASH__=!0,(0,c.initialize)().then(()=>Promise.resolve().then(()=>e(require("./splash/index")))))
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmVsb2FkL2luaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2NvbXBpbGVycyc7XHJcbmltcG9ydCAnLi9hbGlhc2VzJztcclxuaW1wb3J0ICcuL2ZpeGVzJztcclxuXHJcbmltcG9ydCB7IFdlYlByZWZlcmVuY2VzLCBpcGNSZW5kZXJlciB9IGZyb20gJ2VsZWN0cm9uJztcclxuaW1wb3J0IHsgSVBDRXZlbnRzIH0gZnJvbSAnQGNvbW1vbi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnQHdlYnBhY2snO1xyXG5cclxuZ2xvYmFsLmlzVW5ib3VuZCA9IHRydWU7XHJcblxyXG5pbnRlcmZhY2UgV2luZG93T3B0aW9ucyB7XHJcbiAgIG9yaWdpbmFsUHJlbG9hZDogc3RyaW5nO1xyXG4gICB3aW5kb3dPcHRpb25zOiB7XHJcbiAgICAgIHdlYlByZWZlcmVuY2VzOiBXZWJQcmVmZXJlbmNlcztcclxuICAgfTtcclxufVxyXG5cclxuY29uc3QgeyB3aW5kb3dPcHRpb25zIH06IFdpbmRvd09wdGlvbnMgPSBpcGNSZW5kZXJlci5zZW5kU3luYyhJUENFdmVudHMuR0VUX1dJTkRPV19PUFRJT05TKTtcclxuXHJcbmlmICghd2luZG93T3B0aW9ucy53ZWJQcmVmZXJlbmNlcy5uYXRpdmVXaW5kb3dPcGVuKSB7XHJcbiAgIHdpbmRvdy5fX1NQTEFTSF9fID0gdHJ1ZTtcclxuICAgaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4gaW1wb3J0KCcuL3NwbGFzaCcpKTtcclxufSBlbHNlIHtcclxuICAgd2luZG93Ll9fTUFJTl9fID0gdHJ1ZTtcclxuICAgaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4gaW1wb3J0KCdAY2xpZW50JykpO1xyXG59Il0sIm5hbWVzIjpbImdsb2JhbCIsImlzVW5ib3VuZCIsIndpbmRvd09wdGlvbnMiLCJpcGNSZW5kZXJlciIsInNlbmRTeW5jIiwiSVBDRXZlbnRzIiwiR0VUX1dJTkRPV19PUFRJT05TIiwid2ViUHJlZmVyZW5jZXMiLCJuYXRpdmVXaW5kb3dPcGVuIiwid2luZG93IiwiX19NQUlOX18iLCJpbml0aWFsaXplIiwidGhlbiIsIl9fU1BMQVNIX18iXSwibWFwcGluZ3MiOiJBQUFBLDRFQUFPLG1CQUFhLFVBQ2IsV0FBVyxVQUNYLGVBQVMsa0JBRTRCLFVBQVUsWUFDNUIscUJBQW1CLFlBQ2xCLFVBQVUsK2pCQUVyQ0EsTUFBTSxDQUFDQyxTQUFTLENBQUcsQ0FBQSxDQUFJLEFBU3ZCLE1BQU0sQ0FBRUMsYUFBYSxDQUFiQSxDQUFhLENBQUUsQ0FBa0JDLENBQVcsWUFBQSxDQUFDQyxRQUFRLENBQUNDLENBQVMsVUFBQSxDQUFDQyxrQkFBa0IsQ0FBQyxBQUFDLEFBRXZGSixDQUFBQSxDQUFhLENBQUNLLGNBQWMsQ0FBQ0MsZ0JBQWdCLEVBSS9DQyxNQUFNLENBQUNDLFFBQVEsQ0FBRyxDQUFBLENBQUksQ0FDdEJDLEdBQUFBLENBQVUsV0FBQSxHQUFFLENBQUNDLElBQUksQ0FBQyxJQUFNLDZCQUFBLE9BQU0sQ0FBQyxpQkFBUyxHQUFDLENBQUMsR0FKMUNILE1BQU0sQ0FBQ0ksVUFBVSxDQUFHLENBQUEsQ0FBSSxDQUN4QkYsR0FBQUEsQ0FBVSxXQUFBLEdBQUUsQ0FBQ0MsSUFBSSxDQUFDLElBQU0sNkJBQUEsT0FBTSxDQUFDLGdCQUFVLEdBQUMsQ0FBQyxDQUk3QyJ9