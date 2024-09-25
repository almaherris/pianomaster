import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { Gallery } from "../components/ProductPage/Gallery"

export const Butik = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const butikImages = [
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279798/butik1_weijb1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279798/butik2_fenq3i.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279798/butik3_ggcg02.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279798/butik4_pcspm8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279798/butik5_ptbz1y.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279799/butik6_on6bfs.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279798/butik7_t7pqak.jpg",
    },
    {
      src: "https://res.cloudinary.com/dcowhgigh/image/upload/v1727279798/butik8_okvlti.jpg",
    },
  ]

  return (
    <div>
      <ProductPage
        title="Butiken"
        description={[
          "Hos oss hittar du ett brett utbud av nya och begagnade pianon och flyglar av högsta kvalitet. Vi erbjuder allt från stämning, service och reparation till transport och renovering av ditt instrument.",
          "Med vår expertis och långa erfarenhet hjälper vi dig att få ut det mesta av ditt piano eller flygel. Välkommen till vår butik, belägen i centrala Skövde, där både musikinstrument och spelglädje står i fokus!",
        ]}
        section={<Gallery images={butikImages} />}
      />
    </div>
  )
}
