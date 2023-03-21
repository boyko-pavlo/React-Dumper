"use strict";
exports.__esModule = true;
exports.DumperModel = void 0;
var react_1 = require("react");
var useLocalStorage_1 = require("./useLocalStorage");
var DumperModel = function () {
    var _a = (0, useLocalStorage_1.useLocalStorage)('react-dumper-state', ''), optStr = _a[0], setOpt = _a[1];
    var options = JSON.parse(optStr || '{}');
    var _b = (0, react_1.useState)(false), dragging = _b[0], setDragging = _b[1];
    var _c = (0, react_1.useState)(false), resizing = _c[0], setResizing = _c[1];
    var _d = (0, react_1.useState)((options === null || options === void 0 ? void 0 : options.mouseX) || 0), mouseX = _d[0], setMouseX = _d[1];
    var _e = (0, react_1.useState)((options === null || options === void 0 ? void 0 : options.mouseY) || 0), mouseY = _e[0], setMouseY = _e[1];
    var _f = (0, react_1.useState)((options === null || options === void 0 ? void 0 : options.componentX) || 0), componentX = _f[0], setComponentX = _f[1];
    var _g = (0, react_1.useState)((options === null || options === void 0 ? void 0 : options.componentY) || 0), componentY = _g[0], setComponentY = _g[1];
    var _h = (0, react_1.useState)((options === null || options === void 0 ? void 0 : options.width) || 200), width = _h[0], setWidth = _h[1];
    var _j = (0, react_1.useState)((options === null || options === void 0 ? void 0 : options.height) || 200), height = _j[0], setHeight = _j[1];
    (0, react_1.useEffect)(function () {
        setOpt(JSON.stringify({
            dragging: dragging,
            resizing: resizing,
            width: width,
            mouseX: mouseX,
            componentX: componentX,
            height: height,
            mouseY: mouseY,
            componentY: componentY
        }));
    }, [setOpt, dragging, resizing, width, mouseX, componentX, height, mouseY, componentY]);
    var handleMouseDown = function (e) {
        if (e.target.classList.contains('resize-handle')) {
            setResizing(true);
        }
        else {
            setDragging(true);
        }
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    };
    var handleMouseUp = function () {
        setDragging(false);
        setResizing(false);
    };
    (0, react_1.useEffect)(function () {
        var handleMouseMove = function (e) {
            var event = e;
            var deltaX = event.clientX - mouseX;
            var deltaY = event.clientY - mouseY;
            if (dragging) {
                setComponentX(componentX + deltaX);
                setComponentY(componentY + deltaY);
                setMouseX(event.clientX);
                setMouseY(event.clientY);
            }
            if (resizing) {
                setWidth(width + deltaX);
                setHeight(height + deltaY);
                setMouseX(event.clientX);
                setMouseY(event.clientY);
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return function () {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [componentX, componentY, dragging, height, mouseX, mouseY, resizing, width]);
    return {
        handleMouseDown: handleMouseDown,
        componentX: componentX,
        componentY: componentY,
        width: width,
        height: height
    };
};
exports.DumperModel = DumperModel;
//# sourceMappingURL=DumperModel.js.map