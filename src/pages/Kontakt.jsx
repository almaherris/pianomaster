import { useEffect } from "react"
import { MapSection } from "../components/LandingPage/MapSection"

export const Kontakt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <h2>Kontakt</h2>
      <p>Kombinerad kontakt och om oss</p>
      <p>
        Vilka jobbar? Hur länge har de jobbat i branchen? Certifikat och att de
        är auktoriserade pianoförsäljare etc.
      </p>
      <MapSection />
    </div>
  )
}
