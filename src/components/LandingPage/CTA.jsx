import { Button } from "../Button"
import "./CTA.css"

export const CTA = () => {
  return (
    <div className="cta-wrapper">
      <div className="cta-box">
        <div className="cta-text">
          <p>Har du några funderingar?</p>
          <h4>FRÅGOR OCH SVAR</h4>
          <p>
            Här hittar du våra kontaktuppgifter samt svar på de vanligaste
            frågorna
          </p>
          <Button
            buttonText="Kontakta Oss"
            link="/kontakt"
            aria-label="Gå till kontaktsida"
            variant="alternate"
          />
        </div>
      </div>
    </div>
  )
}
