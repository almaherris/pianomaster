import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { Gallery } from "../components/ProductPage/Gallery"

export const Flyglar = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const flygelImages = [
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279804/flygel1_oh6jvl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279804/flygel2_htr42g.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279805/flygel3_gbwpub.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279805/flygel4_k7vhoi.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279805/flygel5_tdqs7z.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279806/flygel6_sthsmp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279806/flygel7_ejrtyn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279809/flygel8_diebsl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279810/flygel9_dlcxpr.jpg",
    },
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
