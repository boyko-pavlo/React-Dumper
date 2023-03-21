"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var DumperModel_1 = require("./DumperModel");
var react_1 = require("react");
var json_formatter_js_1 = tslib_1.__importDefault(require("json-formatter-js"));
var react_custom_scroll_1 = tslib_1.__importDefault(require("react-custom-scroll"));
var DumperStyles_1 = require("./DumperStyles");
var Dumper = function (_a) {
    var data = _a.data, _b = _a.config, config = _b === void 0 ? {
        hoverPreviewEnabled: true,
        hoverPreviewArrayCount: 100,
        hoverPreviewFieldCount: 5,
        theme: 'dark',
        animateOpen: true,
        animateClose: true,
        useToJSON: true
    } : _b;
    var _c = (0, DumperModel_1.DumperModel)(), handleMouseDown = _c.handleMouseDown, componentX = _c.componentX, componentY = _c.componentY, width = _c.width, height = _c.height;
    var dumper = DumperStyles_1.DumperStyles.dumper, pre = DumperStyles_1.DumperStyles.pre, manipulator = DumperStyles_1.DumperStyles.manipulator, dragger = DumperStyles_1.DumperStyles.dragger, draggerHorizontal = DumperStyles_1.DumperStyles.draggerHorizontal, resizer = DumperStyles_1.DumperStyles.resizer, resizerVertical = DumperStyles_1.DumperStyles.resizerVertical, resizerHorizontal = DumperStyles_1.DumperStyles.resizerHorizontal;
    var preRef = (0, react_1.useRef)(null);
    var formatter = (0, react_1.useMemo)(function () {
        return new json_formatter_js_1["default"](data, 1, config);
    }, [data, config]);
    (0, react_1.useEffect)(function () {
        if (preRef === null || preRef === void 0 ? void 0 : preRef.current) {
            var element = formatter.render();
            Array.from(document.getElementsByClassName(element.className)).forEach(function (el) {
                el.remove();
            });
            preRef.current.appendChild(element);
        }
    }, [formatter, preRef]);
    return (React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pre), dumper), { left: componentX, top: componentY, width: width, height: height }) },
        React.createElement(react_custom_scroll_1["default"], null,
            React.createElement("div", { style: { width: width, height: height }, ref: preRef })),
        React.createElement("div", { style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, manipulator), dragger), draggerHorizontal), onMouseDown: handleMouseDown }),
        React.createElement("div", { className: 'resize-handle', style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, manipulator), resizer), resizerVertical), onMouseDown: handleMouseDown }),
        React.createElement("div", { className: 'resize-handle', style: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, manipulator), resizer), resizerHorizontal), onMouseDown: handleMouseDown })));
};
exports["default"] = Dumper;
//# sourceMappingURL=Dumper.js.map