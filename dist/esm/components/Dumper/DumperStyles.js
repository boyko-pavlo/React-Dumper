export var DumperStyles = {
    dumper: {
        position: 'absolute',
        border: '1px solid grey',
        borderRadius: '3px',
        overflow: 'hidden',
        padding: '1em 0 0 0',
        zIndex: 2147483647,
        opacity: 0.9
    },
    pre: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.9)',
        padding: '1em 0 0 1em',
        // color: '#fff',
        lineHeight: '12px',
        fontSize: '10px',
        fontFamily: 'monospace',
        display: 'flex',
        overflow: 'auto'
    },
    manipulator: { position: 'absolute' },
    resizer: {
        right: '0',
        bottom: '0',
        backgroundColor: '#ffff00',
        cursor: 'se-resize'
    },
    dragger: {
        top: '0',
        left: '0',
        backgroundColor: '#0000ff',
        cursor: 'move'
    },
    resizerVertical: { width: '1em', height: '1em' },
    resizerHorizontal: { width: '1em', height: '1em' },
    draggerHorizontal: { height: '1em', width: '100%' }
};
//# sourceMappingURL=DumperStyles.js.map