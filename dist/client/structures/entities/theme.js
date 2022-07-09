"use strict";const a=require("../../../common/logger"),b=require("../../api/settings"),c=require("../../modules/patcher/index"),d=function(a){return a&&a.__esModule?a:{default:a}}(require("./base"));class e extends d.default{constructor(){super(),this.logger=(0,a.createLogger)("Theme",this.data.name),this.patcher=(0,c.create)(this.data.id),this.settings=(0,b.makeStore)(this.data.id)}_stop(){this.patcher.unpatchAll(),this.stop()}}module.exports=e
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jbGllbnQvc3RydWN0dXJlcy9lbnRpdGllcy90aGVtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVMb2dnZXIgfSBmcm9tICdAY29tbW9uL2xvZ2dlcic7XHJcbmltcG9ydCB7IG1ha2VTdG9yZSB9IGZyb20gJ0BhcGkvc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdAcGF0Y2hlcic7XHJcbmltcG9ydCBCYXNlIGZyb20gJy4vYmFzZSc7XHJcblxyXG5jbGFzcyBUaGVtZSBleHRlbmRzIEJhc2Uge1xyXG4gIHB1YmxpYyBzZXR0aW5nczogUmV0dXJuVHlwZTx0eXBlb2YgbWFrZVN0b3JlPjtcclxuICBwdWJsaWMgcGF0Y2hlcjogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlPjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMubG9nZ2VyID0gY3JlYXRlTG9nZ2VyKCdUaGVtZScsIHRoaXMuZGF0YS5uYW1lKTtcclxuICAgIHRoaXMucGF0Y2hlciA9IGNyZWF0ZSh0aGlzLmRhdGEuaWQpO1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IG1ha2VTdG9yZSh0aGlzLmRhdGEuaWQpO1xyXG4gIH1cclxuXHJcbiAgX3N0b3AoKSB7XHJcbiAgICB0aGlzLnBhdGNoZXIudW5wYXRjaEFsbCgpO1xyXG4gICAgdGhpcy5zdG9wKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgPSBUaGVtZTsiXSwibmFtZXMiOlsiVGhlbWUiLCJCYXNlIiwiY29uc3RydWN0b3IiLCJsb2dnZXIiLCJjcmVhdGVMb2dnZXIiLCJkYXRhIiwibmFtZSIsInBhdGNoZXIiLCJjcmVhdGUiLCJpZCIsInNldHRpbmdzIiwibWFrZVN0b3JlIiwiX3N0b3AiLCJ1bnBhdGNoQWxsIiwic3RvcCJdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCLHdCQUFnQixZQUNuQixvQkFBZSxZQUNsQiw2QkFBVSw4REFDaEIsUUFBUSxFQUV6QixPQUFNQSxDQUFLLFNBQVNDLENBQUksUUFBQSxDQUl0QkMsYUFBYyxDQUNaLEtBQUssRUFBRSxDQUVQLElBQUksQ0FBQ0MsTUFBTSxDQUFHQyxHQUFBQSxDQUFZLGFBQUEsRUFBQyxPQUFPLENBQUUsSUFBSSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUNuRCxJQUFJLENBQUNDLE9BQU8sQ0FBR0MsR0FBQUEsQ0FBTSxPQUFBLEVBQUMsSUFBSSxDQUFDSCxJQUFJLENBQUNJLEVBQUUsQ0FBQyxDQUNuQyxJQUFJLENBQUNDLFFBQVEsQ0FBR0MsR0FBQUEsQ0FBUyxVQUFBLEVBQUMsSUFBSSxDQUFDTixJQUFJLENBQUNJLEVBQUUsQ0FBQyxDQUN4QyxBQUVERyxLQUFLLEVBQUcsQ0FDTixJQUFJLENBQUNMLE9BQU8sQ0FBQ00sVUFBVSxFQUFFLENBQ3pCLElBQUksQ0FBQ0MsSUFBSSxFQUFFLENBQ1osQ0FDRixlQUVRZCxDQUFLLEFBQUMifQ==