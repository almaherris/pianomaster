import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { Butik } from "./pages/Butik"
import { Flyglar } from "./pages/Flyglar"
import { Piano } from "./pages/Piano"
import { Services } from "./pages/ServicePage"
import { Kontakt } from "./pages/Kontakt"
import { Layout } from "./Layout"
import { NotFound } from "./pages/NotFound"
import "./App.css"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/butik" element={<Butik />} />
            <Route path="/flyglar" element={<Flyglar />} />
            <Route path="/pianon" element={<Piano />} />
            <Route path="/tjanster" element={<Services />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
