import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import {  HomePage } from "./pages.tsx"
import { BrowserRouter, Route, Routes } from "react-router"
import { Footer, Header } from "./components.tsx"

const rootElement = document.getElementById("root")
if (!rootElement) {
 console.log("initating root element")          
}else{
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
      <div className="App-container">
      <Header/>
      <main >
      <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </main>
      <footer>
      <Footer/>
      </footer>
      </div>
      </BrowserRouter>
    </StrictMode>
  )
}
