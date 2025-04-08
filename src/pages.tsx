import { AboutMe, PortfolioProjects } from "./components"

export const HomePage: React.FC = () => {
	return (
		<div>
			<div>
				<h3>About Me</h3>
				<AboutMe />
			</div>
			<div>
				<h3>Projects</h3>
				<PortfolioProjects />
			</div>
		</div>
	)
}

export const App: React.FC = () => {
	return (
		<div>
			<h1>App</h1>
		</div>
	)
}
