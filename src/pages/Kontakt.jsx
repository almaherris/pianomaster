import { useEffect } from "react"
import { MapSection } from "../components/LandingPage/MapSection"
import { ProductPage } from "../components/ProductPage/ProductPage"

export const Kontakt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <ProductPage
        title="Kontakt"
        description={[
          "Jag heter Linus och har över 10 års erfarenhet av att arbeta med instrument, särskilt flyglar och pianon. Genom mitt arbete strävar jag efter att bevara och förbättra instrumentens spelglädje och livslängd, oavsett om det handlar om stämning, service eller renovering.",
          "Har du frågor eller funderingar, tveka inte att kontakta mig – jag hjälper gärna till!",
        ]}
      />

      <MapSection />
    </div>
  )
}
