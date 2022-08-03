"use strict";const e=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(require("react"));module.exports=class Component{constructor(){let t=this.render,ComponentContainer=()=>t.call(this);this.render=()=>e.default.createElement(ComponentContainer)}render(){return null}isMounted(){return!!this._isMounted}forceUpdate(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")}isReactComponent(){return!0}replaceState(e,t){this.updater.enqueueReplaceState(this,t,e)}setState(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw"Silly.";this.updater.enqueueSetState(this,e,t,"setState")}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvc3RydWN0dXJlcy9jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgIF9pc01vdW50ZWQ6IGJvb2xlYW47XHJcbiAgIHVwZGF0ZXI6IGFueTtcclxuICAgY29udGV4dDogYW55O1xyXG4gICByZWZzOiBhbnk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXI7XHJcbiAgICAgIGNvbnN0IENvbXBvbmVudENvbnRhaW5lciA9ICgpID0+IHJlbmRlci5jYWxsKHRoaXMpO1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudENvbnRhaW5lcik7XHJcbiAgIH1cclxuXHJcbiAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgIH1cclxuXHJcbiAgIGlzTW91bnRlZCgpIHtcclxuICAgICAgcmV0dXJuICEhdGhpcy5faXNNb3VudGVkO1xyXG4gICB9XHJcblxyXG4gICBmb3JjZVVwZGF0ZShjYWxsYmFjaykge1xyXG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcclxuICAgfVxyXG5cclxuICAgaXNSZWFjdENvbXBvbmVudCgpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIHJlcGxhY2VTdGF0ZShzdGF0ZSwgY2FsbGJhY2spIHtcclxuICAgICAgdGhpcy51cGRhdGVyLmVucXVldWVSZXBsYWNlU3RhdGUodGhpcywgY2FsbGJhY2ssIHN0YXRlKTtcclxuICAgfVxyXG5cclxuICAgc2V0U3RhdGUoc3RhdGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygc3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBzdGF0ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBzdGF0ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgIHRocm93ICdTaWxseS4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XHJcbiAgIH1cclxufTtcclxuXHJcbmV4cG9ydCA9IENvbXBvbmVudDsiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJyZW5kZXIiLCJDb21wb25lbnRDb250YWluZXIiLCJjYWxsIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaXNNb3VudGVkIiwiX2lzTW91bnRlZCIsImZvcmNlVXBkYXRlIiwiY2FsbGJhY2siLCJ1cGRhdGVyIiwiZW5xdWV1ZUZvcmNlVXBkYXRlIiwiaXNSZWFjdENvbXBvbmVudCIsInJlcGxhY2VTdGF0ZSIsInN0YXRlIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsInNldFN0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxzR0FBa0IsT0FBTyxrQkFFekIsTUFBTUEsU0FBUyxDQU1aQyxhQUFjLENBQ1gsSUFBTUMsQ0FBTSxDQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUNwQkMsa0JBQWtCLENBQUcsSUFBTUQsQ0FBTSxDQUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEFBRHZCLEFBRzNCLENBQUEsSUFBSSxDQUFDRixNQUFNLENBQUcsSUFBTUcsQ0FBSyxRQUFBLENBQUNDLGFBQWEsQ0FBQ0gsa0JBQWtCLENBQUMsQ0FDN0QsQUFFREQsTUFBTSxFQUFHLENBQ04sT0FBTyxJQUFJLEFBQUMsQ0FDZCxBQUVESyxTQUFTLEVBQUcsQ0FDVCxNQUFPLENBQUMsQ0FBQyxJQUFJLENBQUNDLFVBQVUsQUFBQyxDQUMzQixBQUVEQyxXQUFXLENBQUNDLENBQVEsQ0FBRSxDQUNuQixJQUFJLENBQUNDLE9BQU8sQ0FBQ0Msa0JBQWtCLENBQUMsSUFBSSxDQUQzQkYsQ0FBUSxDQUMrQixhQUFhLENBQUMsQ0FDaEUsQUFFREcsZ0JBQWdCLEVBQUcsQ0FDaEIsTUFBTyxDQUFBLENBQUksQUFBQyxDQUNkLEFBRURDLFlBQVksQ0FBQ0MsQ0FBSyxDQUFFTCxDQUFRLENBQUUsQ0FDM0IsSUFBSSxDQUFDQyxPQUFPLENBQUNLLG1CQUFtQixDQUFDLElBQUksQ0FEcEJOLENBQVEsQ0FBZkssQ0FBSyxDQUN3QyxDQUN6RCxBQUVERSxRQUFRLENBQUNGLENBQUssQ0FBRUwsQ0FBUSxDQUFFLENBQ3ZCLEdBQUksQUFBaUIsUUFBUSxFQUF6QixPQURFSyxDQUFLLEFBQ0ssRUFBaUIsQUFBaUIsVUFBVSxFQUEzQixPQUQzQkEsQ0FBSyxBQUNrQyxBQUFlLEVBQUlBLEFBQVMsSUFBSSxFQUR2RUEsQ0FBSyxBQUNrRSxDQUMxRSxLQUFNLFFBQVEsQUFBQyxBQUNqQixBQUVELENBQUEsSUFBSSxDQUFDSixPQUFPLENBQUNPLGVBQWUsQ0FBQyxJQUFJLENBTDNCSCxDQUFLLENBQUVMLENBQVEsQ0FLK0IsVUFBVSxDQUFDLENBQ2pFLENBQ0gsQUFFa0IifQ==