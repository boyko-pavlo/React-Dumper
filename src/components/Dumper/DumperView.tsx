import * as React from 'react'
import { DumperModel } from './DumperModel'
import { FC, useEffect, useMemo, useRef } from 'react'
import JSONFormatter, { JSONFormatterConfiguration } from 'json-formatter-js'
import CustomScroll from 'react-custom-scroll'
import { DumperStyles } from './DumperStyles'
interface IDumperProps {
  data: any
  config?: JSONFormatterConfiguration
}

const DumperView: FC<IDumperProps> = ({
  data,
  config = {
    hoverPreviewEnabled: true,
    hoverPreviewArrayCount: 100,
    hoverPreviewFieldCount: 5,
    theme: 'dark',
    animateOpen: true,
    animateClose: true,
    useToJSON: true,
  },
}) => {
  const { handleMouseDown, componentX, componentY, width, height } = DumperModel()
  const { dumper, pre, manipulator, dragger, draggerHorizontal, resizer, resizerVertical, resizerHorizontal } =
    DumperStyles
  const preRef = useRef<HTMLDivElement>(null)
  const formatter = useMemo(() => {
    return new JSONFormatter(data, 1, config)
  }, [data, config])

  useEffect(() => {
    if (preRef?.current) {
      const element = formatter.render()
      Array.from(document.getElementsByClassName(element.className)).forEach((el: Element) => {
        el.remove()
      })
      preRef.current.appendChild(element)
    }
  }, [formatter, preRef])

  return (
    <div style={{ ...pre, ...dumper, left: componentX, top: componentY, width, height }}>
      <CustomScroll>
        <div style={{ width, height }} ref={preRef} />
      </CustomScroll>
      <div style={{ ...manipulator, ...dragger, ...draggerHorizontal }} onMouseDown={handleMouseDown} />
      <div
        className={'resize-handle'}
        style={{ ...manipulator, ...resizer, ...resizerVertical }}
        onMouseDown={handleMouseDown}
      />
      <div
        className={'resize-handle'}
        style={{ ...manipulator, ...resizer, ...resizerHorizontal }}
        onMouseDown={handleMouseDown}
      />
    </div>
  )
}

export default DumperView
