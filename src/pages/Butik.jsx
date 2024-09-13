import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage"

export const Butik = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <ProductPage
        title="Butik"
        description="Våra flyglar representerar det ultimata inom pianokonst och hantverksskicklighet. Med enastående resonans och en dynamisk ton som fyller rummet, är varje flygel skapad för att möta de högsta kraven från professionella musiker och konserthus. Kombinationen av elegant design och överlägsen akustik gör våra flyglar till ett naturligt val för de som söker en djupare musikalisk upplevelse. Låt dig inspireras av den tidlösa skönheten och det kraftfulla ljudet som bara en flygel kan erbjuda."/>
    </div>
  )
}
