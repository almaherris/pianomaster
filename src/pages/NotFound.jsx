import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { Link } from "react-router-dom"

export const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <ProductPage
        title="Sidan kunde inte hittas"
        description={[
          <span key="link">
            Oops! Den här sidan är ostämd. Gå tillbaka till <strong><Link to="/">startsidan</Link></strong> och låt oss hjälpa
            dig med allt inom piano.
          </span>,
        ]}
      />
    </div>
  )
}
