import { useEffect } from "react"
import { Service } from "../components/ServicePage/Service"
import { ContactForm } from "../components/ServicePage/ContactForm"
import services from "../data/services.json"
import "./ServicePage.css"

//Component holding all services
export const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <div className="service-page">
        <div className="service-message">
          <h2>Tjänster</h2>
          <p>
            Vår ambition är att erbjuda möjligheten att kombinera flera besök
            under samma resa för att hålla nere resekostnaden för våra kunder.
          </p>
          <p>
            Vi lämnar 5 års garanti på begagnade akustiska pianon och flyglar
            liksom 1 styck fri garantistämning efter leverans.
          </p>{" "}
          <p>
            {" "}
            Om du vill veta mer eller har några specifika frågor, är du
            välkommen att fråga.
          </p>
          <p>
            <i>Alla priser är inklusive moms</i>
          </p>
        </div>
        <div className="partners">
          <img src="/logos/feurich-logo.svg" />
          <img src="/logos/steinberg-logo.svg" />
        </div>
        <div className="service-container">
          {services.map((service) => (
            <Service
              key={service.title}
              title={service.title}
              description={service.description}
              pricingTitle={service.pricingTitle}
              pricingDescription={service.pricingDescription}
            />
          ))}
        </div>
      </div>
      <ContactForm />
    </>
  )
}
