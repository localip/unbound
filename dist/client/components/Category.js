"use strict";const a=require("./discord"),b=require("../../common/utilities/index"),c=g(require("react")),d=g(require("./Divider")),e=g(require("./Icon")),f=g(require("../styles/components/category.css"));function g(a){return a&&a.__esModule?a:{default:a}}f.default.append();class h extends c.default.PureComponent{render(){let{title:f,description:g,opened:h,onChange:i,children:j,icon:k,className:l,endDivider:m}=this.props;return c.default.createElement("div",{className:(0,b.classnames)(l,"unbound-category",h&&"unbound-category-opened")},c.default.createElement("div",{className:(0,b.classnames)("unbound-category-header",k&&"unbound-category-has-icon"),onClick:i},"function"==typeof k&&k({className:"unbound-category-icon"})||"string"==typeof k&&c.default.createElement(e.default,{className:"unbound-category-icon",name:k}),c.default.createElement("div",{className:"unbound-category-details"},c.default.createElement(a.FormTitle,{color:a.Text.Colors.HEADER_PRIMARY,tag:a.FormTitle.Tags.H3,size:a.Text.Sizes.SIZE_16,className:(0,b.classnames)("unbound-category-details-title",!g&&"unbound-category-details-title-no-description")},f),g&&c.default.createElement(a.FormText,{color:a.Text.Colors.HEADER_SECONDARY,size:a.Text.Sizes.SIZE_14,className:"unbound-category-details-description"},g)),c.default.createElement(a.Caret,{direction:h?a.Caret.Directions.DOWN:a.Caret.Directions.RIGHT,className:"unbound-category-caret"})),h&&c.default.createElement(d.default,{className:"unbound-category-divider"}),c.default.createElement("div",{"data-is-open":h,className:(0,b.classnames)("unbound-category-content",h&&"unbound-margin-top-20")},h&&c.default.createElement(c.default.Fragment,null,j)),h&&m&&c.default.createElement(d.default,{className:"unbound-category-divider"}))}}module.exports=h
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jbGllbnQvY29tcG9uZW50cy9DYXRlZ29yeS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybVRpdGxlLCBGb3JtVGV4dCwgQ2FyZXQsIFRleHQgfSBmcm9tICdAY29tcG9uZW50cy9kaXNjb3JkJztcclxuaW1wb3J0IHsgY2xhc3NuYW1lcyB9IGZyb20gJ0B1dGlsaXRpZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnLi9EaXZpZGVyJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuXHJcbmltcG9ydCBTdHlsZXMgZnJvbSAnQHN0eWxlcy9jb21wb25lbnRzL2NhdGVnb3J5LmNzcyc7XHJcblN0eWxlcy5hcHBlbmQoKTtcclxuXHJcbmludGVyZmFjZSBDYXRlZ29yeVByb3BzIHtcclxuICAgaWNvbj86IHN0cmluZyB8IENhbGxhYmxlRnVuY3Rpb247XHJcbiAgIG9uQ2hhbmdlPzogKC4uLmFyZ3MpID0+IGFueTtcclxuICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgIGVuZERpdmlkZXI/OiBib29sZWFuO1xyXG4gICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgIG9wZW5lZD86IGJvb2xlYW47XHJcbiAgIGNoaWxkcmVuPzogYW55O1xyXG4gICB0aXRsZT86IHN0cmluZztcclxuICAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5jbGFzcyBDYXRlZ29yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q2F0ZWdvcnlQcm9wcz4ge1xyXG4gICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBvcGVuZWQsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgaWNvbiwgY2xhc3NOYW1lLCBlbmREaXZpZGVyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3VuYm91bmQtY2F0ZWdvcnknLCBvcGVuZWQgJiYgJ3VuYm91bmQtY2F0ZWdvcnktb3BlbmVkJyl9PlxyXG4gICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndW5ib3VuZC1jYXRlZ29yeS1oZWFkZXInLCBpY29uICYmICd1bmJvdW5kLWNhdGVnb3J5LWhhcy1pY29uJyl9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2hhbmdlfVxyXG4gICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgdHlwZW9mIGljb24gPT09ICdmdW5jdGlvbicgJiYgaWNvbih7IGNsYXNzTmFtZTogJ3VuYm91bmQtY2F0ZWdvcnktaWNvbicgfSkgfHxcclxuICAgICAgICAgICAgICAgdHlwZW9mIGljb24gPT09ICdzdHJpbmcnICYmIDxJY29uIGNsYXNzTmFtZT0ndW5ib3VuZC1jYXRlZ29yeS1pY29uJyBuYW1lPXtpY29ufSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1bmJvdW5kLWNhdGVnb3J5LWRldGFpbHMnPlxyXG4gICAgICAgICAgICAgICA8Rm9ybVRpdGxlXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtUZXh0LkNvbG9ycy5IRUFERVJfUFJJTUFSWX1cclxuICAgICAgICAgICAgICAgICAgdGFnPXtGb3JtVGl0bGUuVGFncy5IM31cclxuICAgICAgICAgICAgICAgICAgc2l6ZT17VGV4dC5TaXplcy5TSVpFXzE2fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3VuYm91bmQtY2F0ZWdvcnktZGV0YWlscy10aXRsZScsICFkZXNjcmlwdGlvbiAmJiAndW5ib3VuZC1jYXRlZ29yeS1kZXRhaWxzLXRpdGxlLW5vLWRlc2NyaXB0aW9uJyl9XHJcbiAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICA8L0Zvcm1UaXRsZT5cclxuICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxGb3JtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17VGV4dC5Db2xvcnMuSEVBREVSX1NFQ09OREFSWX1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT17VGV4dC5TaXplcy5TSVpFXzE0fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3VuYm91bmQtY2F0ZWdvcnktZGV0YWlscy1kZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgIDwvRm9ybVRleHQ+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPENhcmV0XHJcbiAgICAgICAgICAgICAgIGRpcmVjdGlvbj17b3BlbmVkID8gQ2FyZXQuRGlyZWN0aW9ucy5ET1dOIDogQ2FyZXQuRGlyZWN0aW9ucy5SSUdIVH1cclxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd1bmJvdW5kLWNhdGVnb3J5LWNhcmV0J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAge29wZW5lZCAmJiA8RGl2aWRlciBjbGFzc05hbWU9J3VuYm91bmQtY2F0ZWdvcnktZGl2aWRlcicgLz59XHJcbiAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgZGF0YS1pcy1vcGVuPXtvcGVuZWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygndW5ib3VuZC1jYXRlZ29yeS1jb250ZW50Jywgb3BlbmVkICYmICd1bmJvdW5kLW1hcmdpbi10b3AtMjAnKX1cclxuICAgICAgICAgPlxyXG4gICAgICAgICAgICB7b3BlbmVkICYmIDw+XHJcbiAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAge29wZW5lZCAmJiBlbmREaXZpZGVyICYmIDxEaXZpZGVyIGNsYXNzTmFtZT0ndW5ib3VuZC1jYXRlZ29yeS1kaXZpZGVyJyAvPn1cclxuICAgICAgPC9kaXY+O1xyXG4gICB9XHJcbn07XHJcblxyXG5leHBvcnQgPSBDYXRlZ29yeTsiXSwibmFtZXMiOlsiU3R5bGVzIiwiYXBwZW5kIiwiQ2F0ZWdvcnkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib3BlbmVkIiwib25DaGFuZ2UiLCJjaGlsZHJlbiIsImljb24iLCJjbGFzc05hbWUiLCJlbmREaXZpZGVyIiwicHJvcHMiLCJkaXYiLCJjbGFzc25hbWVzIiwib25DbGljayIsIkljb24iLCJuYW1lIiwiRm9ybVRpdGxlIiwiY29sb3IiLCJUZXh0IiwiQ29sb3JzIiwiSEVBREVSX1BSSU1BUlkiLCJ0YWciLCJUYWdzIiwiSDMiLCJzaXplIiwiU2l6ZXMiLCJTSVpFXzE2IiwiRm9ybVRleHQiLCJIRUFERVJfU0VDT05EQVJZIiwiU0laRV8xNCIsIkNhcmV0IiwiZGlyZWN0aW9uIiwiRGlyZWN0aW9ucyIsIkRPV04iLCJSSUdIVCIsIkRpdmlkZXIiLCJkYXRhLWlzLW9wZW4iXSwibWFwcGluZ3MiOiJBQUFBLDZCQUFpRCxXQUFxQixZQUMzQyw4QkFBWSxjQUNyQixPQUFPLGVBRUwsV0FBVyxlQUNkLFFBQVEsZUFFTixtQ0FBaUMsc0RBQ3BEQSxDQUFNLFFBQUEsQ0FBQ0MsTUFBTSxFQUFFLEFBY2YsT0FBTUMsQ0FBUSxTQUFTQyxDQUFLLFFBQUEsQ0FBQ0MsYUFBYSxDQUN2Q0MsTUFBTSxFQUFHLENBQ04sR0FBTSxDQUFFQyxLQUFLLENBQUxBLENBQUssQ0FBRUMsV0FBVyxDQUFYQSxDQUFXLENBQUVDLE1BQU0sQ0FBTkEsQ0FBTSxDQUFFQyxRQUFRLENBQVJBLENBQVEsQ0FBRUMsUUFBUSxDQUFSQSxDQUFRLENBQUVDLElBQUksQ0FBSkEsQ0FBSSxDQUFFQyxTQUFTLENBQVRBLENBQVMsQ0FBRUMsVUFBVSxDQUFWQSxDQUFVLENBQUUsQ0FBRyxJQUFJLENBQUNDLEtBQUssQUFBQyxBQUVuRyxRQUFPLHdCQUFDQyxLQUFHLEVBQUNILFNBQVMsQ0FBRUksR0FBQUEsQ0FBVSxXQUFBLEVBQUNKLENBQVMsQ0FBRSxrQkFBa0IsQ0FBRUosQ0FBTSxFQUFJLHlCQUF5QixDQUFDLEVBQ2xHLHdCQUFDTyxLQUFHLEVBQ0RILFNBQVMsQ0FBRUksR0FBQUEsQ0FBVSxXQUFBLEVBQUMseUJBQXlCLENBQUVMLENBQUksRUFBSSwyQkFBMkIsQ0FBQyxDQUNyRk0sT0FBTyxDQUFFUixDQUFRLEVBR2QsQUFBZ0IsVUFBVSxFQUExQixPQUFPRSxDQUFJLEVBQW1CQSxDQUFJLENBQUMsQ0FBRUMsU0FBUyxDQUFFLHVCQUF1QixDQUFFLENBQUMsRUFDMUUsQUFBZ0IsUUFBUSxFQUF4QixPQUFPRCxDQUFJLEVBQWlCLHdCQUFDTyxDQUFJLFFBQUEsRUFBQ04sU0FBUyxDQUFDLHVCQUF1QixDQUFDTyxJQUFJLENBQUVSLENBQUksRUFBSSxDQUVyRix3QkFBQ0ksS0FBRyxFQUFDSCxTQUFTLENBQUMsMEJBQTBCLEVBQ3RDLHdCQUFDUSxDQUFTLFVBQUEsRUFDUEMsS0FBSyxDQUFFQyxDQUFJLEtBQUEsQ0FBQ0MsTUFBTSxDQUFDQyxjQUFjLENBQ2pDQyxHQUFHLENBQUVMLENBQVMsVUFBQSxDQUFDTSxJQUFJLENBQUNDLEVBQUUsQ0FDdEJDLElBQUksQ0FBRU4sQ0FBSSxLQUFBLENBQUNPLEtBQUssQ0FBQ0MsT0FBTyxDQUN4QmxCLFNBQVMsQ0FBRUksR0FBQUEsQ0FBVSxXQUFBLEVBQUMsZ0NBQWdDLENBQUUsQ0FBQ1QsQ0FBVyxFQUFJLCtDQUErQyxDQUFDLEVBRXZIRCxDQUFLLENBQ0csQ0FDWEMsQ0FBVyxFQUFJLHdCQUFDd0IsQ0FBUSxTQUFBLEVBQ3RCVixLQUFLLENBQUVDLENBQUksS0FBQSxDQUFDQyxNQUFNLENBQUNTLGdCQUFnQixDQUNuQ0osSUFBSSxDQUFFTixDQUFJLEtBQUEsQ0FBQ08sS0FBSyxDQUFDSSxPQUFPLENBQ3hCckIsU0FBUyxDQUFDLHNDQUFzQyxFQUUvQ0wsQ0FBVyxDQUNKLENBQ1IsQ0FDTix3QkFBQzJCLENBQUssTUFBQSxFQUNIQyxTQUFTLENBQUUzQixDQUFNLENBQUcwQixDQUFLLE1BQUEsQ0FBQ0UsVUFBVSxDQUFDQyxJQUFJLENBQUdILENBQUssTUFBQSxDQUFDRSxVQUFVLENBQUNFLEtBQUssQ0FDbEUxQixTQUFTLENBQUMsd0JBQXdCLEVBQ25DLENBQ0MsQ0FDTEosQ0FBTSxFQUFJLHdCQUFDK0IsQ0FBTyxRQUFBLEVBQUMzQixTQUFTLENBQUMsMEJBQTBCLEVBQUcsQ0FDM0Qsd0JBQUNHLEtBQUcsRUFDRHlCLGNBQVksQ0FBRWhDLENBQU0sQ0FDcEJJLFNBQVMsQ0FBRUksR0FBQUEsQ0FBVSxXQUFBLEVBQUMsMEJBQTBCLENBQUVSLENBQU0sRUFBSSx1QkFBdUIsQ0FBQyxFQUVuRkEsQ0FBTSxFQUFJLGdEQUNQRSxDQUFRLENBQ1QsQ0FDQSxDQUNMRixDQUFNLEVBQUlLLENBQVUsRUFBSSx3QkFBQzBCLENBQU8sUUFBQSxFQUFDM0IsU0FBUyxDQUFDLDBCQUEwQixFQUFHLENBQ3RFLEFBQUMsQ0FDVCxDQUNILGVBRVFWLENBQVEsQUFBQyJ9