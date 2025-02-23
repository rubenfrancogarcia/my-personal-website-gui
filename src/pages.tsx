import { AboutMe, PortfolioProjects } from './components'

export const  HomePage:React.FC = () => {
  return (
    <div>
      <h2 style={{textAlign: "left"}}>Home Page</h2>
      <p> Welcome to my portfolio site</p><br/>
      <p> This site is built with React and TypeScript. Any written content is done with markdown and parsed with a open-source library</p><br/>
      <p> The site is hosted on Netlify and the source code is available on GitHub</p>
    </div>
  )
}

export const AboutMePage: React.FC = () => {
  return (
    <div className="about-me">
      <h2 style={{textAlign: "left"}}>About Me</h2>
      <div>
        <AboutMe/>
      </div>
    </div>
  )
}

export const BlogPage: React.FC = () => {
  return (
    <div>
      <h2 style={{textAlign: "left"}}>Blog</h2>
    </div>
  )
}

export const ProjectsPage: React.FC = () => {
  return (
    <div>
      <h2 style={{textAlign: "left"}}>Projects</h2>
      <PortfolioProjects/>
    </div>
  )
}

export const App:React.FC = () => {
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

