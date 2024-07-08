import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Hem } from "./pages/Hem"
import { Butik } from "./pages/Butik"
import { Flyglar } from "./pages/Flyglar"
import { Piano } from "./pages/Piano"
import { Services } from "./pages/Services"
import { Kontakt } from "./pages/Kontakt"
import { Layout } from "./Layout"
import "./App.css"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hem />} />
            <Route path="/butik" element={<Butik />} />
            <Route path="/flyglar" element={<Flyglar />} />
            <Route path="/piano" element={<Piano />} />
            <Route path="/tjanster" element={<Services />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
