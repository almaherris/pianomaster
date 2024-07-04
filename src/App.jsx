import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Hem } from "./pages/Hem"
import { Butik } from "./pages/Butik"
import { Flyglar } from "./pages/Flyglar"
import { Piano } from "./pages/Piano"
import { Villkor } from "./pages/Villkor"
import { Kontakt } from "./pages/Kontakt"
import { Layout } from "./Layout"
import "./App.css"

export const App = () => {
  return (
    <>
      <h1>titel</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hem />} />
            <Route path="/butik" element={<Butik />} />
            <Route path="/flyglar" element={<Flyglar />} />
            <Route path="/piano" element={<Piano />} />
            <Route path="/kopvillkor" element={<Villkor />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
