import { useEffect } from "react"
import { MapSection } from "../components/LandingPage/MapSection"

export const Kontakt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <h2>Kontakt</h2>
      <p>
        Jag heter Linus och har över 10 års erfarenhet av att arbeta med
        instrument, särskilt flyglar och pianon. Genom mitt arbete strävar jag
        efter att bevara och förbättra instrumentens spelglädje och livslängd,
        oavsett om det handlar om stämning, service eller renovering. Har du
        frågor eller funderingar, tveka inte att kontakta mig – jag hjälper
        gärna till!
      </p>
      <MapSection />
    </div>
  )
}
