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
import { Link } from "react-router"

export const iconMap = {
	java: FaJava,
	spring: SiSpring,
	javascript: SiJavascript,
	react: SiReact
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
	name: keyof typeof iconMap
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
	name: "Leetcode",
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

const links: Link[] = [link1, link2, link3]

interface Project {
	name: string
	description: string
	link: string
	image?: React.FC | null
	techStack: Tech[]
}

const memoryGame: Project = {
	name: "Memory Game",
	description: "Match pairs of cards where user is scored based on time and moves",
	link: "https://memory-game-js12.netlify.app/",
	techStack: [{ name: "javascript", icon: SiJavascript }],
}

const froggerImitation: Project = {
	name: "Frogger Imitation",
	description: "A simple imitation of the classic game Frogger. Reach the other side of the road while avoiding cars and obstacles.",
	link: "https://classic-arcade-game-rg.netlify.app/",
	techStack: [{ name: "javascript", icon: SiJavascript }],
}

const myReads: Project = {
	name: "My Reads",
	description: "A book tracking app that allows users to search for books and categorize them into three shelves: currently reading, want to read, and read.",
	link: "https://my-reacts-app.netlify.app/",
	techStack: [{ name: "react", icon: SiReact }],
}

const projects: Project[] = [memoryGame, froggerImitation,myReads]

export function Footer() {
	return (
		<div >
			<ul
				className="footer-container"
				id="footer-links"
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
		<div className="portfolio-projects-container">
			<p> Here are a few of old projects of mine. Stay tuned for updates. </p>
			<ul
				className="noBullets"
				id="portfolio-projects"
			>
				{projects.map((project) => (
					<li key={project.name}>
						<h4>
							<p><a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
						><u>{project.name}</u></a></p>
				</h4>
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
interface MarkdownLoaderProps {
	path: string
}

export const MarkdownLoader: React.FC<MarkdownLoaderProps> = ({ path }) => {
	const [markdown, setMarkdown] = React.useState<string | null>("Loading...")
	useEffect(() => {
		const loadMarkdown = async () => {
			try {
				const response = await fetch(path)
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
				margin: "2rem",
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
			<MarkdownLoader path="./aboutme.md" />
		</div>
	)
}

interface HeaderProps {
	name?: string
	src: string
	alt?: string
	size?: string
}

//https://www.npmjs.com/package/react-markdown?activeTab=readme   https://github.com/remarkjs/react-markdown

export const HeaderShot: React.FC<HeaderProps> = ({ src, alt, size }) => {
	return (
		<div className="headshot-container">
			<img
				className="headshot"
				src={src}
				alt={alt}
				width={size}
				height={size}
			/>
		</div>
	)
}

export const Header: React.FC = () => {
	return (
		<div className="header-container" style={{display: "flex", flexDirection: "row", alignItems:"center"}}>
			<span style={{color: "white"}}><h1>Ruben Garcia</h1></span>
			<HeaderShot src={"/headshot.jpg"} />
		</div>
	)
}
