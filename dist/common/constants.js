"use strict";var e,o;Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(e,o){for(var r in o)Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}(exports,{IDs:()=>e,IPCEvents:()=>o,Paths:()=>s,Owners:()=>l,SplashQuotes:()=>a,BuildInfo:()=>t,Regex:()=>c,ReactSymbols:()=>d,Headers:()=>u,Colors:()=>g,LoggerStyles:()=>i});const r=require("fs"),n=require("path"),s={root:(0,n.resolve)(__dirname,"..",".."),storage:(0,n.resolve)(__dirname,"..","..","..","..","unbound"),themes:(0,n.resolve)(__dirname,"..","..","..","..","unbound","themes"),plugins:(0,n.resolve)(__dirname,"..","..","..","..","unbound","plugins"),settings:(0,n.resolve)(__dirname,"..","..","..","..","unbound","settings")};!function(e){e.BOT="934019188450816000"}(e||(e={}));const l={eternal:"263689920210534400"},a=["Unleash the chains"],t=JSON.parse((0,r.readFileSync)((0,n.resolve)(process.resourcesPath,"build_info.json"),"utf-8"));!function(o){o.GET_WINDOW_OPTIONS="GET_WINDOW_OPTIONS",o.PROCESS_ISOLATED="PROCESS_ISOLATED"}(o||(o={}));const c={newline:/\r?\n|\r/g,url:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi},d={Ref:Symbol.for("react.forward_ref"),Element:Symbol.for("react.element"),Memo:Symbol.for("react.memo")},u={delete:["x-frame-options","content-security-policy","content-security-policy-report-only"],append:[{name:"access-control-allow-origin",value:"*",exists:{name:"access-control-allow-credentials",condition:!1}}]},g={BRAND:"#C74050"},i={default:{padding:"2.5px 5px","border-radius":"5px","margin-right":"3px","border-bottom":"2px solid rgba(0, 0, 0, 0.5)"},success:{"background-color":"#6BFFB2",color:"black"},warn:{"background-color":"#FCEE83",color:"black"},error:{"background-color":"#FF0000",color:"white"},log:{"background-color":g.BRAND},debug:{"background-color":"#487DE9",color:"white"}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29uc3RhbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGhzID0ge1xyXG4gICByb290OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJy4uJyksXHJcbiAgIHN0b3JhZ2U6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nLCAnLi4nLCAndW5ib3VuZCcpLFxyXG4gICB0aGVtZXM6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nLCAnLi4nLCAndW5ib3VuZCcsICd0aGVtZXMnKSxcclxuICAgcGx1Z2luczogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICcuLicsICcuLicsICcuLicsICd1bmJvdW5kJywgJ3BsdWdpbnMnKSxcclxuICAgc2V0dGluZ3M6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4nLCAnLi4nLCAnLi4nLCAnLi4nLCAndW5ib3VuZCcsICdzZXR0aW5ncycpXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBJRHMge1xyXG4gICBCT1QgPSAnOTM0MDE5MTg4NDUwODE2MDAwJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgT3duZXJzID0ge1xyXG4gICAvLyBldGVybmFsIzEwMDBcclxuICAgZXRlcm5hbDogJzI2MzY4OTkyMDIxMDUzNDQwMCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGxhc2hRdW90ZXMgPSBbXHJcbiAgICdVbmxlYXNoIHRoZSBjaGFpbnMnXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQnVpbGRJbmZvID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocmVzb2x2ZShwcm9jZXNzLnJlc291cmNlc1BhdGgsICdidWlsZF9pbmZvLmpzb24nKSwgJ3V0Zi04JykpO1xyXG5cclxuZXhwb3J0IGVudW0gSVBDRXZlbnRzIHtcclxuICAgR0VUX1dJTkRPV19PUFRJT05TID0gJ0dFVF9XSU5ET1dfT1BUSU9OUycsXHJcbiAgIFBST0NFU1NfSVNPTEFURUQgPSAnUFJPQ0VTU19JU09MQVRFRCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBSZWdleCA9IHtcclxuICAgbmV3bGluZTogL1xccj9cXG58XFxyL2csXHJcbiAgIHVybDogL1stYS16QS1aMC05QDolLl9cXCt+Iz1dezEsMjU2fVxcLlthLXpBLVowLTkoKV17MSw2fVxcYihbLWEtekEtWjAtOSgpQDolX1xcKy5+Iz8mLy89XSopPy9naVxyXG59IGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWN0U3ltYm9scyA9IHtcclxuICAgUmVmOiBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpLFxyXG4gICBFbGVtZW50OiBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JyksXHJcbiAgIE1lbW86IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcnMgPSB7XHJcbiAgIGRlbGV0ZTogW1xyXG4gICAgICAneC1mcmFtZS1vcHRpb25zJyxcclxuICAgICAgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5JyxcclxuICAgICAgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5LXJlcG9ydC1vbmx5J1xyXG4gICBdLFxyXG5cclxuICAgYXBwZW5kOiBbXHJcbiAgICAgIHtcclxuICAgICAgICAgbmFtZTogJ2FjY2Vzcy1jb250cm9sLWFsbG93LW9yaWdpbicsXHJcbiAgICAgICAgIHZhbHVlOiAnKicsXHJcbiAgICAgICAgIGV4aXN0czoge1xyXG4gICAgICAgICAgICBuYW1lOiAnYWNjZXNzLWNvbnRyb2wtYWxsb3ctY3JlZGVudGlhbHMnLFxyXG4gICAgICAgICAgICBjb25kaXRpb246IGZhbHNlXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICBdXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sb3JzID0ge1xyXG4gICBCUkFORDogJyNDNzQwNTAnXHJcbn0gYXMgY29uc3Q7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nZ2VyU3R5bGVzID0ge1xyXG4gICBkZWZhdWx0OiB7XHJcbiAgICAgICdwYWRkaW5nJzogJzIuNXB4IDVweCcsXHJcbiAgICAgICdib3JkZXItcmFkaXVzJzogJzVweCcsXHJcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnM3B4JyxcclxuICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KSdcclxuICAgfSxcclxuICAgc3VjY2Vzczoge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjNkJGRkIyJyxcclxuICAgICAgJ2NvbG9yJzogJ2JsYWNrJ1xyXG4gICB9LFxyXG4gICB3YXJuOiB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGQ0VFODMnLFxyXG4gICAgICAnY29sb3InOiAnYmxhY2snXHJcbiAgIH0sXHJcbiAgIGVycm9yOiB7XHJcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGRjAwMDAnLFxyXG4gICAgICAnY29sb3InOiAnd2hpdGUnXHJcbiAgIH0sXHJcbiAgIGxvZzoge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IENvbG9ycy5CUkFORFxyXG4gICB9LFxyXG4gICBkZWJ1Zzoge1xyXG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjNDg3REU5JyxcclxuICAgICAgJ2NvbG9yJzogJ3doaXRlJ1xyXG4gICB9XHJcbn07Il0sIm5hbWVzIjpbIlBhdGhzIiwiT3duZXJzIiwiU3BsYXNoUXVvdGVzIiwiQnVpbGRJbmZvIiwiUmVnZXgiLCJSZWFjdFN5bWJvbHMiLCJIZWFkZXJzIiwiQ29sb3JzIiwiTG9nZ2VyU3R5bGVzIiwicm9vdCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJzdG9yYWdlIiwidGhlbWVzIiwicGx1Z2lucyIsInNldHRpbmdzIiwiSURzIiwiQk9UIiwiZXRlcm5hbCIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsInByb2Nlc3MiLCJyZXNvdXJjZXNQYXRoIiwiSVBDRXZlbnRzIiwiR0VUX1dJTkRPV19PUFRJT05TIiwiUFJPQ0VTU19JU09MQVRFRCIsIm5ld2xpbmUiLCJ1cmwiLCJSZWYiLCJTeW1ib2wiLCJmb3IiLCJFbGVtZW50IiwiTWVtbyIsImRlbGV0ZSIsImFwcGVuZCIsIm5hbWUiLCJ2YWx1ZSIsImV4aXN0cyIsImNvbmRpdGlvbiIsIkJSQU5EIiwiZGVmYXVsdCIsInN1Y2Nlc3MiLCJ3YXJuIiwiZXJyb3IiLCJsb2ciLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUEsaUJBV08sQ0FFTixDQWFNLENBR04sc0xBMUJZQSxLQUFLLEtBQUxBLENBQUssQ0FZTEMsTUFBTSxLQUFOQSxDQUFNLENBS05DLFlBQVksS0FBWkEsQ0FBWSxDQUlaQyxTQUFTLEtBQVRBLENBQVMsQ0FPVEMsS0FBSyxLQUFMQSxDQUFLLENBS0xDLFlBQVksS0FBWkEsQ0FBWSxDQU1aQyxPQUFPLEtBQVBBLENBQU8sQ0FtQlBDLE1BQU0sS0FBTkEsQ0FBTSxDQUlOQyxZQUFZLEtBQVpBLENBQVksbUJBakVJLElBQUksWUFDVCxNQUFNLEVBRWpCUixDQUFLLENBQUcsQ0FDbEJTLElBQUksQ0FBRUMsR0FBQUEsQ0FBTyxRQUFBLEVBQUNDLFNBQVMsQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFDLENBQ3BDQyxPQUFPLENBQUVGLEdBQUFBLENBQU8sUUFBQSxFQUFDQyxTQUFTLENBQUUsSUFBSSxDQUFFLElBQUksQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFFLFNBQVMsQ0FBQyxDQUM5REUsTUFBTSxDQUFFSCxHQUFBQSxDQUFPLFFBQUEsRUFBQ0MsU0FBUyxDQUFFLElBQUksQ0FBRSxJQUFJLENBQUUsSUFBSSxDQUFFLElBQUksQ0FBRSxTQUFTLENBQUUsUUFBUSxDQUFDLENBQ3ZFRyxPQUFPLENBQUVKLEdBQUFBLENBQU8sUUFBQSxFQUFDQyxTQUFTLENBQUUsSUFBSSxD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