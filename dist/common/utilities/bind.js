"use strict";module.exports=function(a,b,c){let d=c.value;if("function"!=typeof d)throw TypeError("bind can only be used on functions");return{configurable:!0,get(){if(this===a.prototype||this.hasOwnProperty(b)||"function"!=typeof d)return d;let c=d.bind(this);return Object.defineProperty(this,b,{configurable:!0,get:()=>c,set(a){d=a,delete this[b]}}),c},set(a){d=a}}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbGl0aWVzL2JpbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBuYW1lIGJpbmRcclxuICogQGRlc2NyaXB0aW9uIFR5cGVTY3JpcHQgZGVjb3JhdG9yIHRvIGF1dG8tYmluZCBmdW5jdGlvbnMgaW4gY2xhc3Nlcy5cclxuICovXHJcblxyXG5mdW5jdGlvbiBiaW5kKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUmVjb3JkPHN0cmluZywgYW55Pik6IFByb3BlcnR5RGVzY3JpcHRvciB7XHJcbiAgIGxldCBwYXlsb2FkID0gZGVzY3JpcHRvci52YWx1ZTtcclxuXHJcbiAgIGlmICh0eXBlb2YgcGF5bG9hZCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdiaW5kIGNhbiBvbmx5IGJlIHVzZWQgb24gZnVuY3Rpb25zJyk7XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZ2V0KCkge1xyXG4gICAgICAgICBpZiAodGhpcyA9PT0gdGFyZ2V0LnByb3RvdHlwZSB8fCB0aGlzLmhhc093blByb3BlcnR5KGtleSkgfHwgdHlwZW9mIHBheWxvYWQgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBheWxvYWQ7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGNvbnN0IGJvdW5kID0gcGF5bG9hZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gYm91bmQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICBwYXlsb2FkID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICByZXR1cm4gYm91bmQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICBwYXlsb2FkID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgfTtcclxufVxyXG5cclxuZXhwb3J0ID0gYmluZDsiXSwibmFtZXMiOlsidGFyZ2V0Iiwia2V5IiwiZGVzY3JpcHRvciIsInBheWxvYWQiLCJ2YWx1ZSIsIlR5cGVFcnJvciIsImNvbmZpZ3VyYWJsZSIsImdldCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiYm91bmQiLCJiaW5kIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJzZXQiXSwibWFwcGluZ3MiOiJBQUtBLDRCQUFBLFNBQWNBLENBQVcsQ0FBRUMsQ0FBVyxDQUFFQyxDQUErQixDQUFzQixDQUMxRixJQUFJQyxDQUFPLENBQUdELEFBRHVCQSxDQUErQixDQUMzQ0UsS0FBSyxBQUFDLEFBRS9CLElBQUksQUFBbUIsVUFBVSxFQUE3QixPQUFPRCxDQUFPLEFBQWUsQ0FDOUIsTUFBTSxBQUFJRSxTQUFTLENBQUMsb0NBQW9DLENBQUMsQUFBQyxBQUM1RCxBQUVELE9BQU8sQ0FDSkMsWUFBWSxDQUFFLENBQUEsQ0FBSSxDQUNsQkMsR0FBRyxFQUFHLENBQ0gsR0FBSSxJQUFJLEdBQUtQLEFBVlJBLENBQVcsQ0FVSVEsU0FBUyxFQUFJLElBQUksQ0FBQ0MsY0FBYyxDQUFDUixDQUFHLENBQUMsRUFBSSxBQUFtQixVQUFVLEVBQTdCLE9BQU9FLENBQU8sQUFBZSxDQUN2RixPQUFPQSxDQUFPLEFBQUMsQUFDakIsQUFFRCxLQUFNTyxDQUFLLENBQUdQLENBQU8sQ0FBQ1EsSUFBSSxDQUFDLElBQUksQ0FBQyxBQUFDLEFBWWpDLFFBWEFDLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBRVosQ0FBRyxDQUFFLENBQzlCSyxZQUFZLENBQUUsQ0FBQSxDQUFJLENBQ2xCQyxHQUFHLENBQUhBLElBQ1VHLENBQUssQUFDZCxDQUNESSxHQUFHLENBQUNWLENBQUssQ0FBRSxDQUNSRCxDQUFPLENBRE5DLENBQUssQUFDUyxDQUNmLE9BQU8sSUFBSSxDQUFDSCxDQUFHLENBQUMsQ0FDbEIsQ0FDSCxDQUFDLENBRUtTLENBQUssQUFBQyxDQUNmLENBQ0RJLEdBQUcsQ0FBQ1YsQ0FBSyxDQUFFLENBQ1JELENBQU8sQ0FETkMsQ0FBSyxBQUNTLENBQ2pCLENBQ0gsQUFBQyxDQUNKLEFBRWEifQ==