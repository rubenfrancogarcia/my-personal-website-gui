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

export const AboutMe = () => {
	return (
		<div className="about-me">
			<h3>About Me</h3>
			<p>
			Hi Welcome to my site. 
			I'm a software developer. I'm seeking a new role where I can lead a team where I can take ownership of business outcomes using my technical expertise and experience. I have over 3.5 years in enterprise systems in the b2b telecommunications industry. I am a technology consultant and have been exclusively on a account in Verizon Partner Solutions (VPS). I have been on multiple teams across different domains within VPS as a full-stack developer. I worked closely with Verizon engineers in their migration away from vendor technology to an in-house microservice architecture utlizing a Java/Angular/Oracle DB tech stack which is projected to be saving $4 million annually. The system is in the mature phase so   Previously, I have worked for Nucleos,a for-profit public benefit company in the education-tech industry. It was a startup during the early phase, and the experience was invaluable in the lessons learned in how a start-up works,testing, embracing many roles, and working with a team. Lastly, I worked for the California Cooperative Development Center, a comunnity-driven nonprofit, in web development. There I had many roles including user research, design, and development of a new initiative in a Homecare Coop. It was my first experience in web development and an invaluable experience on my software engineering journey. 
			</p>
		</div>
	)
}
