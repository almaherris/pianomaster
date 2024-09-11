import { useEffect } from "react"

export const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
 
  return (
    <div>
      <h2>Tjänster</h2>
    </div>
  )
}
