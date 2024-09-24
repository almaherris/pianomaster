import { Button } from "../Button"
import "./CTA.css"

export const CTA = () => {
  return (
    <div className="cta-wrapper">
      <div className="cta-box">
        <div className="cta-text">
          <p>Har du några funderingar?</p>
          <h4>KONTAKTA OSS</h4>
          <p>
            Här hittar du våra kontaktuppgifter och mer information om oss!{" "}
          </p>
          <Button
            buttonText="Till Kontakt"
            link="/kontakt"
            aria-label="Gå till kontaktsida"
            variant="alternate"
          />
        </div>
        <div className="cta-box-dot dot-top-left"></div>
        <div className="cta-box-dot dot-top-right"></div>
        <div className="cta-box-dot dot-bottom-left"></div>
        <div className="cta-box-dot dot-bottom-right"></div>
      </div>
    </div>
  )
}
