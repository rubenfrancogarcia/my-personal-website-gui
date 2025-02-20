import React, { useEffect } from "react"
import { FaJava, FaLinkedin } from "react-icons/fa"
import {
	SiSpring,
	SiPython,
	SiReact,
	SiJavascript,
	SiBluesky,
	SiAngular,
	SiAmazonwebservices,
} from "react-icons/si"
import Markdown from "react-markdown"

export const iconMap = {
	java: FaJava,
	spring: SiSpring,
	javascript: SiJavascript,
} as const

interface TechIconProps {
	techName: keyof typeof iconMap // Restrict prop to valid keys in iconMap
}

export const TechIcon: React.FC<TechIconProps> = ({ techName }) => {
	const IconComponent = iconMap[techName]

	if (!IconComponent) return null // Prevent errors if the icon name is incorrect

	return (
		<IconComponent
			size={40}
			title={techName}
		/>
	)
}

interface Link {
	id: number
	name: string
	url: string
}

interface Tech {
	name: string
	icon: React.FC
}

const link1 = {
	id: 1,
	name: "LinkedIn",
	url: "https://www.linkedin.com/in/rubengarcia12/",
}

const link2 = {
	id: 2,
	name: "GitHub",
	url: "https://github.com/rubenfrancogarcia",
}

const link3 = {
	id: 3,
	name: "leetcode profile",
	url: "https://leetcode.com/u/rubens1729/",
}

const link4 = {
	id: 4,
	name: "bluesky profile",
	url: "https://leetcode.com/u/rubens1729/",
}

const nucleos = {
	id: 5,
	name: "Nucleos",
	url: "https://www.nucleos.com/about/our-story",
}

const vps = {
	id: 5,
	name: "Verizon Partner Solutions",
	url: "https://www.verizon.com/business/verizonpartnersolutions/",
}

const cccd = {
	id: 6,
	name: "California Cooperative Development Center",
	url: "https://www.cccd.edu/",
}

const calendy = {
	id: 7,
	name: "Interested? Schedule a meeting and tell me more about inquire",
	url: "https://www.cccd.edu/",
}

const links: Link[] = [link1, link2, link3, link4]

interface Project {
	name: string
	description: string
	link: string
	image?: React.FC | null
	techStack: Tech[]
}

const memoryGame: Project = {
	name: "Memory Game",
	description: "A simple memory game built with React",
	link: "",
	techStack: [{ name: "javascript", icon: SiJavascript }],
}

const froggerImitation: Project = {
	name: "Frogger Imitation",
	description: "A simple imitation of the classic game Frogger",
	link: "",
	techStack: [{ name: "javascript", icon: SiJavascript }],
}

const projects: Project[] = [memoryGame, froggerImitation]

export function PopulatePortfolioLinks() {
	return (
		<div className="portfolio-links">
			<h3>Portfolio Links</h3>
			<ul
				className="noBullets"
				id="portfolio-links"
			>
				{links.map((link) => (
					<li key={link.id}>
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export const PortfolioProjects = () => {
	return (
		<div className="portfolio-projects">
			<h3>Projects</h3>
			<ul
				className="noBullets"
				id="portfolio-projects"
			>
				{projects.map((project) => (
					<li key={project.name}>
						<h4>{project.name}</h4>
						<p>{project.description}</p>
						<ul className="noBullets">
							{project.techStack.map((tech) => (
								<li key={tech.name}>
									<TechIcon techName={tech.name} />
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
}

export const MarkdownLoader: React.FC = () => {
	const [markdown, setMarkdown] = React.useState<string | null>("Loading...")
	useEffect(() => {
		const loadMarkdown = async () => {
			try {
				const response = await fetch("/aboutme.md")
				const text = await response.text()
				setMarkdown(text)
			} catch (error) {
				setMarkdown("Error loading markdown")
			}
		}
		loadMarkdown()
	}, [])
	return (
		<pre
			style={{
				maxWidth: "100vw",
				whiteSpace: "pre-wrap",
			}}
		>
			<Markdown>{markdown}</Markdown>
		</pre>
	)
}

export const AboutMe = () => {
	return (
		<div className="about-me">
			<h3>About Me</h3>
			<div>
				<MarkdownLoader />
			</div>
		</div>
	)
}

//https://www.npmjs.com/package/react-markdown?activeTab=readme   https://github.com/remarkjs/react-markdown
