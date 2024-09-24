import { Button } from "../Button"
import "./WelcomeSection.css"

export const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h2>Välkommen!</h2>
      <p className="welcome-text">
        PianoMäster är auktoriserad återförsäljare av WILH. STEINBERG (etabl.
        1877) och FEURICH (etabl. 1851) i Sverige. I vårt showroom finns alltid
        ett stort urval av nya flyglar och pianon från dessa båda tyska
        tillverkare av kvalitetsinstrument. Stort utval av begagnade och
        renoverade instrument med upp till 5 års garanti t.ex. Bechstein,
        Blüthner, Grotrian Steinweg, Schimmel, Steinway och Malmsjö.
      </p>
      <p>
        Säljer - Köper - Renovering - Pianostämning - Lackering - Transport -
        Uthyrning
      </p>

      <div className="button-div">
        <Button
          buttonText="Till Tjänster"
          link="/tjanster"
          aria-label="Gå till tjänster"
        />
      </div>

      <div className="partners">
        <img src="/logos/feurich-logo.svg" />
        <img src="/logos/steinberg-logo.svg" />
      </div>
    </div>
  )
}
