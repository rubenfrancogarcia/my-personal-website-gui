import './App.css'
import { PortfolioProjects, AboutMe, HeaderShot, Header, Footer } from './components'

function App() {
  return (
    <div>
      <Header/>
      <h1>welcome to my portfolio</h1>
      <h2>Project Links</h2>
      <PortfolioProjects/>
      <AboutMe />
      <Footer/>
    </div>
  )
}

export default App
