import { useEffect } from "react"

export const Flyglar = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <h2>Flyglar</h2>
    </div>
  )
}
