import { useEffect } from "react"

export const Piano = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <h2>Pianon</h2>
    </div>
  )
}
