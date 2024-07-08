import { HeroSection } from "../components/LandingPage/HeroSection"
import { OfferSection } from "../components/LandingPage/OfferSection"
import { WelcomeSection } from "../components/LandingPage/WelcomeSection"
import PianoImg from "../assets/piano/piano2.jpg"
import FlygelImg from "../assets/flygel/flygel1.jpg"
import "./LandingPage.css"

export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <div className="landing-page">
        <WelcomeSection />
        <OfferSection
          title="Pianon"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          buttonText="Till Pianon"
          link="/pianon"
          ariaLabel="Se mer information om pianon"
          imgSrc={PianoImg}
          imgPosition="right"
        />
        <OfferSection
          title="Flyglar"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
          buttonText="Till Flyglar"
          link="/flyglar"
          ariaLabel="Se mer information om flyglar"
          imgSrc={FlygelImg}
          imgPosition="left"
        />{" "}
      </div>
    </div>
  )
}
