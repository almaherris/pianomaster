import { useEffect } from "react"

export const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <h2>Tjänster</h2>
      <p>
        Vår ambitionen är att erbjuda möjligheten att kombinera flera besök
        under samma resa för att hålla nere resekostnaden för våra kunder.
      </p>
      <p>
        {" "}
        Om du vill veta mer eller har några specifika frågor, är du välkommen
        att fråga.
      </p>
      <div className="partners">
        <img src="/logos/feurich-logo.svg" />
        <img src="/logos/steinberg-logo.svg" />
      </div>
    </div>
  )
}
