import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const animate = () => {
      if (dotRef.current)  dotRef.current.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%)`
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(id) }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="fixed top-0 left-0 z-[9999] w-2.5 h-2.5 bg-blue rounded-full pointer-events-none mix-blend-screen transition-[width,height,background] duration-200" />
      <div ref={ringRef} className="fixed top-0 left-0 z-[9998] w-8 h-8 border border-blue/50 rounded-full pointer-events-none transition-[width,height,opacity] duration-300" />
    </>
  )
}
