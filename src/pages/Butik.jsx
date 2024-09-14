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
        description={[
          "Hos oss hittar du ett brett utbud av nya och begagnade pianon och flyglar av högsta kvalitet. Vi erbjuder allt från stämning, service och reparation till transport och renovering av ditt instrument.",
          "Med vår expertis och långa erfarenhet hjälper vi dig att få ut det mesta av ditt piano eller flygel. Välkommen till vår butik, belägen i centrala Skövde, där både musikinstrument och spelglädje står i fokus!",
        ]}
      />
    </div>
  )
}
