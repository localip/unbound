"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(exports,{data:()=>d,initialize:()=>e,shutdown:()=>f});const a=require("@webpack"),b=require("../../modules/webpack/common"),c=(0,a.bulk)(a.filters.byStrings("devtools-closed"),a.filters.byProps("hideToken"),{wait:!0}),d={name:"DevTools Warning",id:"dev.devtoolsWarning",default:!1,wait:!1};async function e(){await c,DiscordNative.window.setDevtoolsCallbacks(()=>{},()=>{})}async function f(){let[a,d]=await c;a(b.Locale,d,DiscordNative)}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9idWlsdGlucy9kZXZ0b29scy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaWx0ZXJzLCBidWxrIH0gZnJvbSAnQHdlYnBhY2snO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICdAd2VicGFjay9jb21tb24nO1xyXG5cclxuY29uc3QgTW9kdWxlcyA9IGJ1bGsoXHJcbiAgZmlsdGVycy5ieVN0cmluZ3MoJ2RldnRvb2xzLWNsb3NlZCcpLFxyXG4gIGZpbHRlcnMuYnlQcm9wcygnaGlkZVRva2VuJyksXHJcbiAgeyB3YWl0OiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhID0ge1xyXG4gIG5hbWU6ICdEZXZUb29scyBXYXJuaW5nJyxcclxuICBpZDogJ2Rldi5kZXZ0b29sc1dhcm5pbmcnLFxyXG4gIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIHdhaXQ6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICBhd2FpdCBNb2R1bGVzO1xyXG4gIERpc2NvcmROYXRpdmUud2luZG93LnNldERldnRvb2xzQ2FsbGJhY2tzKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNodXRkb3duKCkge1xyXG4gIGNvbnN0IFtzZXREZXZUb29sc0NhbGxiYWNrLCBNYW5hZ2VyXSA9IGF3YWl0IE1vZHVsZXM7XHJcbiAgc2V0RGV2VG9vbHNDYWxsYmFjayhMb2NhbGUsIE1hbmFnZXIsIERpc2NvcmROYXRpdmUpO1xyXG59Il0sIm5hbWVzIjpbImRhdGEiLCJpbml0aWFsaXplIiwic2h1dGRvd24iLCJNb2R1bGVzIiwiYnVsayIsImZpbHRlcnMiLCJieVN0cmluZ3MiLCJieVByb3BzIiwid2FpdCIsIm5hbWUiLCJpZCIsImRlZmF1bHQiLCJEaXNjb3JkTmF0aXZlIiwid2luZG93Iiwic2V0RGV2dG9vbHNDYWxsYmFja3MiLCJzZXREZXZUb29sc0NhbGxiYWNrIiwiTWFuYWdlciIsIkxvY2FsZSJdLCJtYXBwaW5ncyI6IkFBQUEsZ0tBU2FBLElBQUksS0FBSkEsQ0FBSSxDQU9LQyxVQUFVLEtBQVZBLENBQVUsQ0FLVkMsUUFBUSxLQUFSQSxDQUFRLG1CQXJCQSxVQUFVLFlBQ2pCLDhCQUFpQixFQUVsQ0MsQ0FBTyxDQUFHQyxHQUFBQSxDQUFJLEtBQUEsRUFDbEJDLENBQU8sUUFBQSxDQUFDQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FDcENELENBQU8sUUFBQSxDQUFDRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQzVCLENBQUVDLElBQUksQ0FBRSxDQUFBLENBQUksQ0FBRSxDQUNmLENBRVlSLENBQUksQ0FBRyxDQUNsQlMsSUFBSSxDQUFFLGtCQUFrQixDQUN4QkMsRUFBRSxDQUFFLHFCQUFxQixDQUN6QkMsT0FBTyxDQUFFLENBQUEsQ0FBSyxDQUNkSCxJQUFJLENBQUUsQ0FBQSxDQUFLLENBQ1osQUFFTSxnQkFBZVAsQ0FBVSxFQUFHLENBQ2pDLE1BQU1FLENBQU8sQ0FDYlMsYUFBYSxDQUFDQyxNQUFNLENBQUNDLG9CQUFvQixDQUFDLElBQU0sRUFBRyxDQUFFLElBQU0sRUFBRyxDQUFDLENBQ2hFLEFBRU0sZUFBZVosQ0FBUSxFQUFHLENBQy9CLEdBQU0sQ0FBQ2EsQ0FBbUIsQ0FBRUMsQ0FBTyxDQUFDLENBQUcsTUFBTWIsQ0FBTyxBQUFDLEFBQ3JEWSxDQUFBQSxDQUFtQixDQUFDRSxDQUFNLE9BQUEsQ0FBRUQsQ0FBTyxDQUFFSixhQUFhLENBQUMsQ0FDcEQifQ==