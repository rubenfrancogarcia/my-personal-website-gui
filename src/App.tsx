import './App.css'
import { PortfolioProjects, PopulatePortfolioLinks, AboutMe } from './portfoliolinks'

function App() {
  return (
    <div>
      <h1>welcome to my portfolio</h1>
      <PopulatePortfolioLinks />
      <h2>Project Links</h2>
      <PortfolioProjects/>
      <AboutMe />
    </div>
  )
}

export default App
