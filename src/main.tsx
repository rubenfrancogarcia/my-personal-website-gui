import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { AboutMePage, BlogPage, HomePage, ProjectsPage } from "./App.tsx"
import { BrowserRouter, Route, Routes } from "react-router"
import { Footer, Header } from "./components.tsx"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/aboutme" element={<AboutMePage/>} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
    </Routes>
    <Footer/>
		</BrowserRouter>
	</StrictMode>,
)
