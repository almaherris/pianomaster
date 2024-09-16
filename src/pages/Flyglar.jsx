import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { Gallery } from "../components/ProductPage/Gallery"

export const Flyglar = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const flygelImages = [
    { src: "/flygel/flygel1.jpg" },
    { src: "/flygel/flygel2.jpg" },
    { src: "/flygel/flygel3.jpg" },
    { src: "/flygel/flygel4.jpg" },
    { src: "/flygel/flygel5.jpg" },
    { src: "/flygel/flygel6.jpg" },
    { src: "/flygel/flygel7.jpg" },
    { src: "/flygel/flygel8.jpg" },
    { src: "/flygel/flygel9.jpg" },
  ]

  return (
    <div>
      <ProductPage
        title="Flyglar"
        description={[
          "Våra flyglar representerar det ultimata inom pianokonst och hantverksskicklighet. Med enastående resonans och en dynamisk ton som fyller rummet, är varje flygel skapad för att möta de högsta kraven från professionella musiker och konserthus.",
          "Kombinationen av elegant design och överlägsen akustik gör våra flyglar till ett naturligt val för de som söker en djupare musikalisk upplevelse. Låt dig inspireras av den tidlösa skönheten och det kraftfulla ljudet som bara en flygel kan erbjuda.",
        ]}
      />
      <Gallery images={flygelImages} />
    </div>
  )
}
