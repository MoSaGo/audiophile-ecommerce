import { useEffect, useState } from "react"

function useViewportMatchSize(breakpoint) {
  const [match, setMatch] = useState(false)
  function isMachingViewport() {
    setMatch(window.innerWidth <= Number(breakpoint.slice(0, -2)))
  }
  useEffect(() => {
    window.addEventListener("resize", isMachingViewport)
    isMachingViewport()
    return () => window.removeEventListener("resize", isMachingViewport)
  }, [])
  return match
}

export default useViewportMatchSize
