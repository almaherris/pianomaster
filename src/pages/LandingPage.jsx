import { useEffect } from "react"
import { HeroSection } from "../components/LandingPage/HeroSection"
import { OfferSection } from "../components/LandingPage/OfferSection"
import { WelcomeSection } from "../components/LandingPage/WelcomeSection"
import PianoImg from "../assets/piano2.jpg"
import FlygelImg from "../assets/flygel8.jpg"
import "./LandingPage.css"
import { CTA } from "../components/LandingPage/CTA"
import { MapSection } from "../components/LandingPage/MapSection"

export const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <HeroSection />
      <div className="landing-page">
        <WelcomeSection />
        <div className="offer-wrapper">
          <OfferSection
            title="Piano"
            description="Vi jobbar med allt som rör pianon: försäljning, köp, renovering, pianostämning, lackering, transport och uthyrning. Våra instrument kombinerar klassisk stil med modern teknik, vilket gör dem perfekta för både nybörjare och erfarna musiker. Oavsett om du vill spela hemma eller uppträda, har vi det du behöver!"
            buttonText="Till Pianon"
            link="/pianon"
            ariaLabel="Se mer information om pianon"
            imgSrc={PianoImg}
            imgPosition="right"
          />
          <OfferSection
            title="Flygel"
            description="Våra flyglar erbjuder en fantastisk ljudkvalitet och elegant design, perfekt för både professionella musiker och konserthus. Vi jobbar med försäljning, köp, renovering, stämning, transport och uthyrning, så att du får det stöd du behöver för en perfekt musikalisk upplevelse."
            buttonText="Till Flyglar"
            link="/flyglar"
            ariaLabel="Se mer information om flyglar"
            imgSrc={FlygelImg}
            imgPosition="left"
          />{" "}
        </div>
        <CTA />
      </div>{" "}
      <MapSection />
    </div>
  )
}
