"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),!function _export(t,e){for(var a in e)Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}(exports,{data:()=>d,initialize:()=>initialize,shutdown:()=>shutdown});const t=require("../../../common/logger"),e=require("@webpack"),a=require("../../modules/patcher/index"),n=(0,a.create)("unbound-anti-track"),i=(0,t.createLogger)("Anti-Track"),[r,c,o,s]=(0,e.findByProps)(["trackWithMetadata"],["AnalyticsActionHandlers"],["encodeProperties","track"],["submitLiveCrashReport"],{bulk:!0}),d={name:"Anti-Track",id:"misc.antiTrack",wait:!1,default:!1};function initialize(){try{patchMetadata()}catch(t){i.error("Failed to patch metadata",t.message)}try{patchAnalytics()}catch(e){i.error("Failed to patch analytics",e.message)}try{patchProperties()}catch(a){i.error("Failed to patch properties",a.message)}try{patchReporter()}catch(n){i.error("Failed to patch crash reporter",n.message)}}function shutdown(){n.unpatchAll()}function patchMetadata(){n.instead(r,"trackWithMetadata",()=>{}),n.instead(r,"trackWithGroupMetadata",()=>{}),n.instead(r,"trackWithGroupMetadata",()=>{})}function patchAnalytics(){n.instead(c.AnalyticsActionHandlers,"handleTrack",()=>{})}function patchProperties(){n.instead(o,"track",()=>{})}function patchReporter(){n.instead(s,"submitLiveCrashReport",()=>{})}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvY29yZS9idWlsdGlucy9hbnRpLXRyYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ0Bjb21tb24vbG9nZ2VyJztcclxuaW1wb3J0IHsgZmluZEJ5UHJvcHMgfSBmcm9tICdAd2VicGFjayc7XHJcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ0BwYXRjaGVyJztcclxuXHJcbmNvbnN0IFBhdGNoZXIgPSBjcmVhdGUoJ3VuYm91bmQtYW50aS10cmFjaycpO1xyXG5jb25zdCBMb2dnZXIgPSBjcmVhdGVMb2dnZXIoJ0FudGktVHJhY2snKTtcclxuXHJcbmNvbnN0IFtcclxuICAgTWV0YWRhdGEsXHJcbiAgIEFuYWx5dGljcyxcclxuICAgUHJvcGVydGllcyxcclxuICAgUmVwb3J0ZXJcclxuXSA9IGZpbmRCeVByb3BzKFxyXG4gICBbJ3RyYWNrV2l0aE1ldGFkYXRhJ10sXHJcbiAgIFsnQW5hbHl0aWNzQWN0aW9uSGFuZGxlcnMnXSxcclxuICAgWydlbmNvZGVQcm9wZXJ0aWVzJywgJ3RyYWNrJ10sXHJcbiAgIFsnc3VibWl0TGl2ZUNyYXNoUmVwb3J0J10sXHJcbiAgIHsgYnVsazogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZGF0YSA9IHtcclxuICAgbmFtZTogJ0FudGktVHJhY2snLFxyXG4gICBpZDogJ21pc2MuYW50aVRyYWNrJyxcclxuICAgd2FpdDogZmFsc2UsXHJcbiAgIGRlZmF1bHQ6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgdHJ5IHtcclxuICAgICAgcGF0Y2hNZXRhZGF0YSgpO1xyXG4gICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIExvZ2dlci5lcnJvcignRmFpbGVkIHRvIHBhdGNoIG1ldGFkYXRhJywgZS5tZXNzYWdlKTtcclxuICAgfVxyXG5cclxuICAgdHJ5IHtcclxuICAgICAgcGF0Y2hBbmFseXRpY3MoKTtcclxuICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBMb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBwYXRjaCBhbmFseXRpY3MnLCBlLm1lc3NhZ2UpO1xyXG4gICB9XHJcblxyXG4gICB0cnkge1xyXG4gICAgICBwYXRjaFByb3BlcnRpZXMoKTtcclxuICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBMb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBwYXRjaCBwcm9wZXJ0aWVzJywgZS5tZXNzYWdlKTtcclxuICAgfVxyXG5cclxuICAgdHJ5IHtcclxuICAgICAgcGF0Y2hSZXBvcnRlcigpO1xyXG4gICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIExvZ2dlci5lcnJvcignRmFpbGVkIHRvIHBhdGNoIGNyYXNoIHJlcG9ydGVyJywgZS5tZXNzYWdlKTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2h1dGRvd24oKSB7XHJcbiAgIFBhdGNoZXIudW5wYXRjaEFsbCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXRjaE1ldGFkYXRhKCk6IHZvaWQge1xyXG4gICBQYXRjaGVyLmluc3RlYWQoTWV0YWRhdGEsICd0cmFja1dpdGhNZXRhZGF0YScsICgpID0+IHsgfSk7XHJcbiAgIFBhdGNoZXIuaW5zdGVhZChNZXRhZGF0YSwgJ3RyYWNrV2l0aEdyb3VwTWV0YWRhdGEnLCAoKSA9PiB7IH0pO1xyXG4gICBQYXRjaGVyLmluc3RlYWQoTWV0YWRhdGEsICd0cmFja1dpdGhHcm91cE1ldGFkYXRhJywgKCkgPT4geyB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGF0Y2hBbmFseXRpY3MoKTogdm9pZCB7XHJcbiAgIFBhdGNoZXIuaW5zdGVhZChBbmFseXRpY3MuQW5hbHl0aWNzQWN0aW9uSGFuZGxlcnMsICdoYW5kbGVUcmFjaycsICgpID0+IHsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoUHJvcGVydGllcygpOiB2b2lkIHtcclxuICAgUGF0Y2hlci5pbnN0ZWFkKFByb3BlcnRpZXMsICd0cmFjaycsICgpID0+IHsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhdGNoUmVwb3J0ZXIoKTogdm9pZCB7XHJcbiAgIFBhdGNoZXIuaW5zdGVhZChSZXBvcnRlciwgJ3N1Ym1pdExpdmVDcmFzaFJlcG9ydCcsICgpID0+IHsgfSk7XHJcbn0iXSwibmFtZXMiOlsiZGF0YSIsImluaXRpYWxpemUiLCJzaHV0ZG93biIsIlBhdGNoZXIiLCJjcmVhdGUiLCJMb2dnZXIiLCJjcmVhdGVMb2dnZXIiLCJNZXRhZGF0YSIsIkFuYWx5dGljcyIsIlByb3BlcnRpZXMiLCJSZXBvcnRlciIsImZpbmRCeVByb3BzIiwiYnVsayIsIm5hbWUiLCJpZCIsIndhaXQiLCJkZWZhdWx0IiwicGF0Y2hNZXRhZGF0YSIsImUiLCJlcnJvciIsIm1lc3NhZ2UiLCJwYXRjaEFuYWx5dGljcyIsInBhdGNoUHJvcGVydGllcyIsInBhdGNoUmVwb3J0ZXIiLCJ1bnBhdGNoQWxsIiwiaW5zdGVhZCIsIkFuYWx5dGljc0FjdGlvbkhhbmRsZXJzIl0sIm1hcHBpbmdzIjoiQUFBQSx3S0FvQmFBLElBQUksS0FBSkEsQ0FBSSxDQU9EQyxVQUFVLEtBQVZBLFVBQVUsQ0EwQlZDLFFBQVEsS0FBUkEsUUFBUSxtQkFyREssd0JBQWdCLFlBQ2pCLFVBQVUsWUFDZiw2QkFBVSxFQUUzQkMsQ0FBTyxDQUFHQyxHQUFBQSxDQUFNLE9BQUEsRUFBQyxvQkFBb0IsQ0FBQyxDQUN0Q0MsQ0FBTSxDQUFHQyxHQUFBQSxDQUFZLGFBQUEsRUFBQyxZQUFZLENBQUMsQ0FFbkMsQ0FDSEMsQ0FBUSxDQUNSQyxDQUFTLENBQ1RDLENBQVUsQ0FDVkMsQ0FBUSxDQUNWLENBQUdDLEdBQUFBLENBQVcsWUFBQSxFQUNaLENBQUMsbUJBQW1CLENBQUMsQ0FDckIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUMzQixDQUFDLGtCQUFrQixDQUFFLE9BQU8sQ0FBQyxDQUM3QixDQUFDLHVCQUF1QixDQUFDLENBQ3pCLENBQUVDLElBQUksQ0FBRSxDQUFBLENBQUksQ0FBRSxDQUNoQixDQUVZWixDQUFJLENBQUcsQ0FDakJhLElBQUksQ0FBRSxZQUFZLENBQ2xCQyxFQUFFLENBQUUsZ0JBQWdCLENBQ3BCQyxJQUFJLENBQUUsQ0FBQSxDQUFLLENBQ1hDLE9BQU8sQ0FBRSxDQUFBLENBQUssQ0FDaEIsQUFFTSxVQUFTZixVQUFVLEVBQUcsQ0FDMUIsR0FBSSxDQUNEZ0IsYUFBYSxFQUFFLENBQ2pCLEFBQUMsTUFBT0MsQ0FBQyxDQUFFLENBQ1RiLENBQU0sQ0FBQ2MsS0FBSyxDQUFDLDBCQUEwQixDQUFFRCxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUNyRCxBQUVELEdBQUksQ0FDREMsY0FBYyxFQUFFLENBQ2xCLEFBQUMsTUFBT0gsQ0FBQyxDQUFFLENBQ1RiLENBQU0sQ0FBQ2MsS0FBSyxDQUFDLDJCQUEyQixDQUFFRCxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUN0RCxBQUVELEdBQUksQ0FDREUsZUFBZSxFQUFFLENBQ25CLEFBQUMsTUFBT0osQ0FBQyxDQUFFLENBQ1RiLENBQU0sQ0FBQ2MsS0FBSyxDQUFDLDRCQUE0QixDQUFFRCxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUN2RCxBQUVELEdBQUksQ0FDREcsYUFBYSxFQUFFLENBQ2pCLEFBQUMsTUFBT0wsQ0FBQyxDQUFFLENBQ1RiLENBQU0sQ0FBQ2MsS0FBSyxDQUFDLGdDQUFnQyxDQUFFRCxDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUMzRCxDQUNILEFBRU0sU0FBU2xCLFFBQVEsRUFBRyxDQUN4QkMsQ0FBTyxDQUFDcUIsVUFBVSxFQUFFLENBQ3RCLEFBRUQsU0FBU1AsYUFBYSxFQUFTLENBQzVCZCxDQUFPLENBQUNzQixPQUFPLENBQUNsQixDQUFRLENBQUUsbUJBQW1CLENBQUUsSUFBTSxFQUFHLENBQUMsQ0FDekRKLENBQU8sQ0FBQ3NCLE9BQU8sQ0FBQ2xCLENBQVEsQ0FBRSx3QkFBd0IsQ0FBRSxJQUFNLEVBQUcsQ0FBQyxDQUM5REosQ0FBTyxDQUFDc0IsT0FBTyxDQUFDbEIsQ0FBUSxDQUFFLHdCQUF3QixDQUFFLElBQU0sRUFBRyxDQUFDLENBQ2hFLEFBRUQsU0FBU2MsY0FBYyxFQUFTLENBQzdCbEIsQ0FBTyxDQUFDc0IsT0FBTyxDQUFDakIsQ0FBUyxDQUFDa0IsdUJBQXVCLENBQUUsYUFBYSxDQUFFLElBQU0sRUFBRyxDQUFDLENBQzlFLEFBRUQsU0FBU0osZUFBZSxFQUFTLENBQzlCbkIsQ0FBTyxDQUFDc0IsT0FBTyxDQUFDaEIsQ0FBVSxDQUFFLE9BQU8sQ0FBRSxJQUFNLEVBQUcsQ0FBQyxDQUNqRCxBQUVELFNBQVNjLGFBQWEsRUFBUyxDQUM1QnBCLENBQU8sQ0FBQ3NCLE9BQU8sQ0FBQ2YsQ0FBUSxDQUFFLHVCQUF1QixDQUFFLElBQU0sRUFBRyxDQUFDLENBQy9EIn0=