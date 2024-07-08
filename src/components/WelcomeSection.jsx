import { Button } from "../reusable/Button"
import "./WelcomeSection.css"

export const WelcomeSection = () => {
  return (
    <div className="welcome-section">
      <h2>Välkommen!</h2>
      <p className="welcome-text">
        Vi på Pianomäster lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed blandit pharetra lorem quis hendrerit. Mauris elementum lorem
        sem, eget consequat tortor accumsan sed. Etiam congue, libero non tempus
        euismod, sem orci venenatis leo, ut condimentum
      </p>
      <p>
        säljer - köper - renovering - pianostämning - lackering - transport -
        uthyrning
      </p>

      <div className="button-div">
        <Button
          buttonText="Till Tjänster"
          link="/tjanster"
          aria-label="Gå till tjänster"
        />
      </div>

      <div className="partners">
        <img src="/feurich-logo.png" />
        <img src="/steinberg-logo.png" />
      </div>
    </div>
  )
}
