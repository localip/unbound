"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("electron"),t=require("../../common/constants");e.ipcMain.handle(t.IPCEvents.PROCESS_ISOLATED,()=>{e.dialog.showMessageBox({type:"warning",title:"Not Supported",message:"The process is context isolated, unbound does not support isolated processes.",detail:"There can be two causes of this.\nEither nullbyte doesn't support your platform or nullbyte failed patching memory.\nYour discord will launch without unbound.",buttons:["OK"]})})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pcGMvbWFpbi9pc29sYXRlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWFsb2csIGlwY01haW4gfSBmcm9tICdlbGVjdHJvbic7XHJcbmltcG9ydCB7IElQQ0V2ZW50cyB9IGZyb20gJ0Bjb25zdGFudHMnO1xyXG5cclxuaXBjTWFpbi5oYW5kbGUoSVBDRXZlbnRzLlBST0NFU1NfSVNPTEFURUQsICgpID0+IHtcclxuICAgZGlhbG9nLnNob3dNZXNzYWdlQm94KHtcclxuICAgICAgdHlwZTogJ3dhcm5pbmcnLFxyXG4gICAgICB0aXRsZTogJ05vdCBTdXBwb3J0ZWQnLFxyXG4gICAgICBtZXNzYWdlOiAnVGhlIHByb2Nlc3MgaXMgY29udGV4dCBpc29sYXRlZCwgdW5ib3VuZCBkb2VzIG5vdCBzdXBwb3J0IGlzb2xhdGVkIHByb2Nlc3Nlcy4nLFxyXG4gICAgICBkZXRhaWw6ICdUaGVyZSBjYW4gYmUgdHdvIGNhdXNlcyBvZiB0aGlzLlxcbkVpdGhlciBudWxsYnl0ZSBkb2VzblxcJ3Qgc3VwcG9ydCB5b3VyIHBsYXRmb3JtIG9yIG51bGxieXRlIGZhaWxlZCBwYXRjaGluZyBtZW1vcnkuXFxuWW91ciBkaXNjb3JkIHdpbGwgbGF1bmNoIHdpdGhvdXQgdW5ib3VuZC4nLFxyXG4gICAgICBidXR0b25zOiBbJ09LJ11cclxuICAgfSk7XHJcbn0pOyJdLCJuYW1lcyI6WyJpcGNNYWluIiwiaGFuZGxlIiwiSVBDRXZlbnRzIiwiUFJPQ0VTU19JU09MQVRFRCIsImRpYWxvZyIsInNob3dNZXNzYWdlQm94IiwidHlwZSIsInRpdGxlIiwibWVzc2FnZSIsImRldGFpbCIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFnQyxVQUFVLFlBQ2hCLHdCQUFZLENBRXRDQSxDQUFBQSxDQUFPLFFBQUEsQ0FBQ0MsTUFBTSxDQUFDQyxDQUFTLFVBQUEsQ0FBQ0MsZ0JBQWdCLENBQUUsSUFBTSxDQUM5Q0MsQ0FBTSxPQUFBLENBQUNDLGNBQWMsQ0FBQyxDQUNuQkMsSUFBSSxDQUFFLFNBQVMsQ0FDZkMsS0FBSyxDQUFFLGVBQWUsQ0FDdEJDLE9BQU8sQ0FBRSwrRUFBK0UsQ0FDeEZDLE1BQU0sQ0FBRSxnS0FBaUssQ0FDektDLE9BQU8sQ0FBRSxDQUFDLElBQUksQ0FBQyxDQUNqQixDQUFDLENBQ0osQ0FBQyxBQUFDIn0=