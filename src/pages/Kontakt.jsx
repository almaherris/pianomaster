import { useEffect } from "react"
import { MapSection } from "../components/LandingPage/MapSection"
import { ProductPage } from "../components/ProductPage/ProductPage"
import LinusImg from "../assets/linus.jpg"
import { ContactForm } from "../components/ServicePage/ContactForm"

export const Kontakt = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <div className="contact-page">
        <div className="contact-text">
          <ProductPage
            title="Kontakt"
            description={[
              "Jag heter Linus och har över 10 års erfarenhet av att arbeta med instrument, särskilt flyglar och pianon. Genom mitt arbete strävar jag efter att bevara och förbättra instrumentens spelglädje och livslängd, oavsett om det handlar om stämning, service eller renovering.",
              "Har du frågor eller funderingar, tveka inte att kontakta mig – jag hjälper gärna till!",
            ]}
            section={<img src={LinusImg} alt="bild på linus" />}
          />
        </div>
      </div>
      <MapSection />
      <ContactForm introText="Frågor?" />
    </div>
  )
}
