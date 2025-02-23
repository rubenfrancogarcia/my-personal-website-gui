import './App.css'
import { AboutMe, PortfolioProjects } from './components'

export const  HomePage:React.FC = () => {
  return (
    <div>
      <h3>home page</h3>
    </div>
  )
}

export const AboutMePage: React.FC = () => {
  return (
    <div className="about-me">
      <h3>About Me</h3>
      <div>
        <AboutMe/>
      </div>
    </div>
  )
}

export const BlogPage: React.FC = () => {
  return (
    <div>
      <h3>Blog</h3>
    </div>
  )
}

export const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h3>Projects</h3>
      <PortfolioProjects/>
    </div>
  )
}

