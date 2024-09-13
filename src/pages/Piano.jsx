import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage"

export const Piano = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <ProductPage
        title="Piano"
        description="Våra pianon erbjuder en harmonisk blandning av klassisk skönhet och modern teknik. Varje piano är noggrant tillverkat för att ge en rik och uttrycksfull klang, perfekt för både nybörjare och erfarna musiker. Med högkvalitativa material och precision i varje detalj, är våra pianon utformade för att inspirera till kreativitet och musikalisk utveckling. Oavsett om du spelar för egen njutning eller inför publik, kommer du att upptäcka ett instrument som levererar på alla nivåer."
      />
    </div>
  )
}
