import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { AboutMePage, BlogPage, HomePage, ProjectsPage } from "./pages.tsx"
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
      <main style={{padding: "2rem"}}>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/aboutme" element={<AboutMePage/>} />
          {/*<Route path="/blog" element={<BlogPage/>} />*/}
          <Route path="/projects" element={<ProjectsPage/>} />
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
