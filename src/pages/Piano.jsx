import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { Gallery } from "../components/ProductPage/Gallery"

export const Piano = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const pianoImages = [
    { src: "/piano/piano1.jpg" },
    { src: "/piano/piano2.jpg" },
    { src: "/piano/piano3.jpg" },
    { src: "/piano/piano4.jpg" },
    { src: "/piano/piano5.jpg" },
    { src: "/piano/piano6.jpg" },
    { src: "/piano/piano7.jpg" },
    { src: "/piano/piano8.jpg" },
    { src: "/piano/piano9.jpg" },
    { src: "/piano/piano10.jpg" },
    { src: "/piano/piano11.jpg" },
    { src: "/piano/piano12.jpg" },
  ]

  return (
    <div>
      <ProductPage
        title="Piano"
        description={[
          "Våra pianon erbjuder en harmonisk blandning av klassisk skönhet och modern teknik. Varje piano är noggrant tillverkat för att ge en rik och uttrycksfull klang, perfekt för både nybörjare och erfarna musiker.",
          "Med högkvalitativa material och precision i varje detalj, är våra pianon utformade för att inspirera till kreativitet och musikalisk utveckling. Oavsett om du spelar för egen njutning eller inför publik, kommer du att upptäcka ett instrument som levererar på alla nivåer.",
          "Här finner du ett ungefärligt utbud av pianon som finns i vårt showroom."
        ]}
        section={<Gallery images={pianoImages} />}

      />
    </div>
  )
}
