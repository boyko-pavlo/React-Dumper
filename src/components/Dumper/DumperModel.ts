import { MouseEvent, useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const DumperModel = () => {
  const [optStr, setOpt] = useLocalStorage<string>('react-dumper-state', '')
  const options = JSON.parse(optStr || '{}')
  const [dragging, setDragging] = useState<boolean>(false)
  const [resizing, setResizing] = useState<boolean>(false)
  const [mouseX, setMouseX] = useState<number>(options?.mouseX || 0)
  const [mouseY, setMouseY] = useState(options?.mouseY || 0)
  const [componentX, setComponentX] = useState<number>(options?.componentX || 0)
  const [componentY, setComponentY] = useState<number>(options?.componentY || 0)
  const [width, setWidth] = useState<number>(options?.width || 200)
  const [height, setHeight] = useState<number>(options?.height || 200)

  useEffect(() => {
    setOpt(
      JSON.stringify({
        dragging,
        resizing,
        width,
        mouseX,
        componentX,
        height,
        mouseY,
        componentY,
      }),
    )
  }, [setOpt, dragging, resizing, width, mouseX, componentX, height, mouseY, componentY])

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('resize-handle')) {
      setResizing(true)
    } else {
      setDragging(true)
    }
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  const handleMouseUp = () => {
    setDragging(false)
    setResizing(false)
  }

  useEffect(() => {
    const handleMouseMove = (e: Event): void => {
      const event = e as unknown as MouseEvent
      const deltaX = event.clientX - mouseX
      const deltaY = event.clientY - mouseY
      if (dragging) {
        setComponentX(componentX + deltaX)
        setComponentY(componentY + deltaY)
        setMouseX(event.clientX)
        setMouseY(event.clientY)
      }
      if (resizing) {
        setWidth(width + deltaX)
        setHeight(height + deltaY)
        setMouseX(event.clientX)
        setMouseY(event.clientY)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [componentX, componentY, dragging, height, mouseX, mouseY, resizing, width])

  return {
    handleMouseDown,
    componentX,
    componentY,
    width,
    height,
  }
}
