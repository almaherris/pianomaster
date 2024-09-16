import { useEffect } from "react"
import { ProductPage } from "../components/ProductPage/ProductPage"
import { Gallery } from "../components/ProductPage/Gallery"

export const Butik = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const butikImages = [
    { src: "/butik/butik1.jpg" },
    { src: "/butik/butik2.jpg" },
    { src: "/butik/butik3.jpg" },
    { src: "/butik/butik4.jpg" },
    { src: "/butik/butik5.jpg" },
    { src: "/butik/butik6.jpg" },
    { src: "/butik/butik7.jpg" },
    { src: "/butik/butik8.jpg" },
  ]

  return (
    <div>
      <ProductPage
        title="Butik"
        description={[
          "Hos oss hittar du ett brett utbud av nya och begagnade pianon och flyglar av högsta kvalitet. Vi erbjuder allt från stämning, service och reparation till transport och renovering av ditt instrument.",
          "Med vår expertis och långa erfarenhet hjälper vi dig att få ut det mesta av ditt piano eller flygel. Välkommen till vår butik, belägen i centrala Skövde, där både musikinstrument och spelglädje står i fokus!",
        ]}
      />
      <Gallery images={butikImages} />
    </div>
  )
}
