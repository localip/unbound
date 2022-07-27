"use strict";const a=require("@webpack"),b=function(a){return a&&a.__esModule?a:{default:a}}(require("react")),c={components:{},webpack:null};class d extends b.default.PureComponent{render(){if(!this.props.name)return null;let d=c.components[this.props.name]??(0,a.findByDisplayName)(this.props.name);return d&&(c.components[this.props.name]??=d),delete this.props.name,b.default.createElement(d,Object.assign({},this.props))}static get Names(){if(!c.webpack){c.webpack=(0,a.findByString)('"currentColor"',{all:!0});for(let b=0;b<c.webpack?.length;b++){let d=c.webpack[b];d.displayName&&(c.components[d.displayName]??=d)}}return c.webpack.map(a=>a.displayName).filter(Boolean)}}module.exports=d
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9JY29uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaW5kQnlEaXNwbGF5TmFtZSwgZmluZEJ5U3RyaW5nIH0gZnJvbSAnQHdlYnBhY2snO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgY2FjaGUgPSB7XHJcbiAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICB3ZWJwYWNrOiBudWxsXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgSWNvblByb3BzIHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmNsYXNzIEljb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEljb25Qcm9wcz4ge1xyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy5uYW1lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0IEljb24gPSBjYWNoZS5jb21wb25lbnRzW3RoaXMucHJvcHMubmFtZV0gPz8gZmluZEJ5RGlzcGxheU5hbWUodGhpcy5wcm9wcy5uYW1lKTtcclxuICAgICAgaWYgKEljb24pIGNhY2hlLmNvbXBvbmVudHNbdGhpcy5wcm9wcy5uYW1lXSA/Pz0gSWNvbjtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxyXG4gICAgICBkZWxldGUgdGhpcy5wcm9wcy5uYW1lO1xyXG5cclxuICAgICAgcmV0dXJuIDxJY29uIHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGdldCBOYW1lcygpIHtcclxuICAgICAgaWYgKCFjYWNoZS53ZWJwYWNrKSB7XHJcbiAgICAgICAgIGNhY2hlLndlYnBhY2sgPSBmaW5kQnlTdHJpbmcoJ1wiY3VycmVudENvbG9yXCInLCB7IGFsbDogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FjaGUud2VicGFjaz8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbWRsID0gY2FjaGUud2VicGFja1tpXTtcclxuICAgICAgICAgICAgaWYgKCFtZGwuZGlzcGxheU5hbWUpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBjYWNoZS5jb21wb25lbnRzW21kbC5kaXNwbGF5TmFtZV0gPz89IG1kbDtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2FjaGUud2VicGFjay5tYXAobSA9PiBtLmRpc3BsYXlOYW1lKS5maWx0ZXIoQm9vbGVhbik7XHJcbiAgIH1cclxufTtcclxuXHJcbmV4cG9ydCA9IEljb247Il0sIm5hbWVzIjpbImNhY2hlIiwiY29tcG9uZW50cyIsIndlYnBhY2siLCJJY29uIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJuYW1lIiwiZmluZEJ5RGlzcGxheU5hbWUiLCJOYW1lcyIsImZpbmRCeVN0cmluZyIsImFsbCIsImkiLCJsZW5ndGgiLCJtZGwiLCJkaXNwbGF5TmFtZSIsIm1hcCIsIm0iLCJmaWx0ZXIiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiQUFBQSw2QkFBZ0QsVUFBVSw4REFDeEMsT0FBTyxHQUVuQkEsQ0FBSyxDQUFHLENBQ1hDLFVBQVUsQ0FBRSxFQUFFLENBQ2RDLE9BQU8sQ0FBRSxJQUFJLENBQ2YsQUFPRCxPQUFNQyxDQUFJLFNBQVNDLENBQUssUUFBQSxDQUFDQyxhQUFhLENBQ25DQyxNQUFNLEVBQUcsQ0FDTixHQUFJLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBRSxPQUFPLElBQUksQUFBQyxBQUVsQyxLQUFNTCxDQUFJLENBQUdILENBQUssQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQ00sS0FBSyxDQUFDQyxJQUFJLENBQUMsRUFBSUMsR0FBQUEsQ0FBaUIsa0JBQUEsRUFBQyxJQUFJLENBQUNGLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEFBQUMsQUFLckYsUUFKSUwsQ0FBSSxFQUFFSCxDQUFBQSxDQUFLLENBQUNDLFVBQVUsQ0FBQyxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEdBQUtMLENBQUksQ0FBQSxDQUVwRCxPQUFPLElBQUksQ0FBQ0ksS0FBSyxDQUFDQyxJQUFJLENBRWYsd0JBQUNMLENBQUksa0JBQUssSUFBSSxDQUFDSSxLQUFLLEVBQUksQUFBQyxDQUNsQyxBQUVELFdBQVdHLEtBQUssRUFBRyxDQUNoQixHQUFJLENBQUNWLENBQUssQ0FBQ0UsT0FBTyxDQUFFLENBQ2pCRixDQUFLLENBQUNFLE9BQU8sQ0FBR1MsR0FBQUEsQ0FBWSxhQUFBLEVBQUMsZ0JBQWdCLENBQUUsQ0FBRUMsR0FBRyxDQUFFLENBQUEsQ0FBSSxDQUFFLENBQUMsQUFFN0QsS0FBSyxJQUFJQyxDQUFDLENBQUcsQ0FBQyxDQUFFQSxDQUFDLENBQUdiLENBQUssQ0FBQ0UsT0FBTyxFQUFFWSxNQUFNLENBQUVELENBQUMsRUFBRSxDQUFFLENBQzdDLElBQU1FLENBQUcsQ0FBR2YsQ0FBSyxDQUFDRSxPQUFPLENBQUNXLENBQUMsQ0FBQyxBQUFDLEFBQ3hCRSxDQUFBQSxDQUFHLENBQUNDLFdBQVcsRUFDcEJoQixDQUFBQSxDQUFLLENBQUNDLFVBQVUsQ0FBQ2MsQ0FBRyxDQUFDQyxXQUFXLENBQUMsR0FBS0QsQ0FBRyxDQUFBLENBQzNDLENBQ0gsQUFFRCxPQUFPZixDQUFLLENBQUNFLE9BQU8sQ0FBQ2UsR0FBRyxDQUFDQyxDQUFDLEVBQUlBLEFBQUxBLENBQUMsQ0FBTUYsV0FBVyxDQUFDLENBQUNHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLEFBQUMsQ0FDL0QsQ0FDSCxlQUVRakIsQ0FBSSxBQUFDIn0=