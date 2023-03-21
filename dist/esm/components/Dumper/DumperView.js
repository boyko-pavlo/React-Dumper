import { __assign } from "tslib";
import * as React from 'react';
import { DumperModel } from './DumperModel';
import { useEffect, useMemo, useRef } from 'react';
import JSONFormatter from 'json-formatter-js';
import CustomScroll from 'react-custom-scroll';
import { DumperStyles } from './DumperStyles';
var DumperView = function (_a) {
    var data = _a.data, _b = _a.config, config = _b === void 0 ? {
        hoverPreviewEnabled: true,
        hoverPreviewArrayCount: 100,
        hoverPreviewFieldCount: 5,
        theme: 'dark',
        animateOpen: true,
        animateClose: true,
        useToJSON: true,
    } : _b;
    var _c = DumperModel(), handleMouseDown = _c.handleMouseDown, componentX = _c.componentX, componentY = _c.componentY, width = _c.width, height = _c.height;
    var dumper = DumperStyles.dumper, pre = DumperStyles.pre, manipulator = DumperStyles.manipulator, dragger = DumperStyles.dragger, draggerHorizontal = DumperStyles.draggerHorizontal, resizer = DumperStyles.resizer, resizerVertical = DumperStyles.resizerVertical, resizerHorizontal = DumperStyles.resizerHorizontal;
    var preRef = useRef(null);
    var formatter = useMemo(function () {
        return new JSONFormatter(data, 1, config);
    }, [data, config]);
    useEffect(function () {
        if (preRef === null || preRef === void 0 ? void 0 : preRef.current) {
            var element = formatter.render();
            Array.from(document.getElementsByClassName(element.className)).forEach(function (el) {
                el.remove();
            });
            preRef.current.appendChild(element);
        }
    }, [formatter, preRef]);
    return (React.createElement("div", { style: __assign(__assign(__assign({}, pre), dumper), { left: componentX, top: componentY, width: width, height: height }) },
        React.createElement(CustomScroll, null,
            React.createElement("div", { style: { width: width, height: height }, ref: preRef })),
        React.createElement("div", { style: __assign(__assign(__assign({}, manipulator), dragger), draggerHorizontal), onMouseDown: handleMouseDown }),
        React.createElement("div", { className: 'resize-handle', style: __assign(__assign(__assign({}, manipulator), resizer), resizerVertical), onMouseDown: handleMouseDown }),
        React.createElement("div", { className: 'resize-handle', style: __assign(__assign(__assign({}, manipulator), resizer), resizerHorizontal), onMouseDown: handleMouseDown })));
};
export default DumperView;
//# sourceMappingURL=DumperView.js.map