import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { Gallery } from "../components/ProductPage/Gallery"

export const Piano = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const pianoImages = [
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279811/piano1_eqn40h.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279857/piano2_vdwoqh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279882/piano3_w65duo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279881/piano4_s8lo2w.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279882/piano5_jbfe1c.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279883/piano6_nfzg53.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279882/piano7_kmj2ob.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279882/piano8_v3pxsk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279883/piano9_o7bfqn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279885/piano10_fiq77l.jpg",
    },
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
