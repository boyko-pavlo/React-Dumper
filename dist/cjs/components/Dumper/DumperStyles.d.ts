export declare const DumperStyles: {
    readonly dumper: {
        readonly position: "absolute";
        readonly border: "1px solid grey";
        readonly borderRadius: "3px";
        readonly overflow: "hidden";
        readonly padding: "1em 0 0 0";
        readonly zIndex: 2147483647;
        readonly opacity: 0.9;
    };
    readonly pre: {
        readonly width: "100%";
        readonly height: "100%";
        readonly backgroundColor: "rgba(0,0,0,0.9)";
        readonly padding: "1em 0 0 1em";
        readonly lineHeight: "12px";
        readonly fontSize: "10px";
        readonly fontFamily: "monospace";
        readonly display: "flex";
        readonly overflow: "auto";
    };
    readonly manipulator: {
        readonly position: "absolute";
    };
    readonly resizer: {
        readonly right: "0";
        readonly bottom: "0";
        readonly backgroundColor: "#ffff00";
        readonly cursor: "se-resize";
    };
    readonly dragger: {
        readonly top: "0";
        readonly left: "0";
        readonly backgroundColor: "#0000ff";
        readonly cursor: "move";
    };
    readonly resizerVertical: {
        readonly width: "1em";
        readonly height: "1em";
    };
    readonly resizerHorizontal: {
        readonly width: "1em";
        readonly height: "1em";
    };
    readonly draggerHorizontal: {
        readonly height: "1em";
        readonly width: "100%";
    };
};
