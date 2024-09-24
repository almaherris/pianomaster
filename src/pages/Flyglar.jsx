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
          "Utforska vårt omfattande sortiment av både nya och renoverade flyglar i Skövde och Linköping, designade för att möta de högsta kraven från både professionella musiker och entusiaster. Våra flyglar har enastående resonans och en dynamisk ton som fyller rummet, vilket ger en fantastisk musikupplevelse.",
          "Vi erbjuder även tjänster för att stämma flygel och renovera flygel, så att ditt instrument alltid presterar på topp. Om du behöver hjälp med att flytta flygel, kan vi också erbjuda professionell transport.",
          "Här finner du ett ungefärligt utbud av flyglar som finns i vårt showroom.",
        ]}
        section={<Gallery images={flygelImages} />}
      />
    </div>
  )
}
