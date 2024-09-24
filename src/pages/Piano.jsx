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
          "Vi erbjuder ett brett utbud av nya och renoverade pianon i Skövde och Linköping. Våra pianon är noggrant tillverkade för att ge en rik och klar klang, vilket gör dem perfekta för både nybörjare och erfarna musiker.",
          "Vi specialiserar oss på pianostämning och kan hjälpa dig att stämma ditt piano så att det alltid låter som bäst. Dessutom erbjuder vi tjänster för att flytta och renovera piano, så att du kan få ditt instrument i toppskick.",
          "Om du behöver ett piano för en kortare period, kan du även hyra piano från oss.",
          "Här finner du ett ungefärligt utbud av pianon som finns i vårt showroom.",
        ]}
        section={<Gallery images={pianoImages} />}
      />
    </div>
  )
}
