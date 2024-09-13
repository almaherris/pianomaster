import { useEffect } from "react"
import { HeroSection } from "../components/LandingPage/HeroSection"
import { OfferSection } from "../components/LandingPage/OfferSection"
import { WelcomeSection } from "../components/LandingPage/WelcomeSection"
import PianoImg from "/piano/piano2.jpg"
import FlygelImg from "/flygel/flygel8.jpg"
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
            description="Våra pianon erbjuder en harmonisk blandning av klassisk skönhet och modern teknik. Varje piano är noggrant tillverkat för att ge en rik och uttrycksfull klang, perfekt för både nybörjare och erfarna musiker. Med högkvalitativa material och precision i varje detalj, är våra pianon utformade för att inspirera till kreativitet och musikalisk utveckling. Oavsett om du spelar för egen njutning eller inför publik, kommer du att upptäcka ett instrument som levererar på alla nivåer."
            buttonText="Till Pianon"
            link="/pianon"
            ariaLabel="Se mer information om pianon"
            imgSrc={PianoImg}
            imgPosition="right"
          />
          <OfferSection
            title="Flygel"
            description="Våra flyglar representerar det ultimata inom pianokonst och hantverksskicklighet. Med enastående resonans och en dynamisk ton som fyller rummet, är varje flygel skapad för att möta de högsta kraven från professionella musiker och konserthus. Kombinationen av elegant design och överlägsen akustik gör våra flyglar till ett naturligt val för de som söker en djupare musikalisk upplevelse. Låt dig inspireras av den tidlösa skönheten och det kraftfulla ljudet som bara en flygel kan erbjuda."
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
