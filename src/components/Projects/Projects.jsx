import React from 'react'
import greenParadise from "./projectImages/Gemgarden.png"
import woodFans from "./projectImages/Pharmeasy.png"
import bewakoof from "./projectImages/Pharmeasy.png"
import myPortfolio from "./projectImages/Portfolio.png"
import "./Project.css"
import { motion } from "framer-motion"

const data = [
    {
        img: woodFans,
        projectTitle: "Pharmeasy Clone",
        techStack: ["HTML", "CSS", "JavaScript"],
        description: " PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.",
        githubLink: "https://github.com/Amritchandra/Pharmeasy-clone",
        appLink: "https://magnificent-pie-033e94.netlify.app/"
    },
    {
        img: greenParadise,
        projectTitle: "Gem Garden Jewellary ",
        techStack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        description: "Explore the exquisite world of Gem Garden, an online jewelry website where you can effortlessly purchase the jewelry of your choice from the comfort of your home.",
        githubLink: "https://github.com/Amritchandra/Gem-Garden-Project",
        appLink: "https://gem-garden-jewelry-store.vercel.app/"
    },
    {
        img: bewakoof,
        projectTitle: "Pharmeasy Clone",
        techStack: ["HTML", "CSS", "JavaScript",],
        description: " PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.",
        githubLink: "https://github.com/Amritchandra/Pharmeasy-clone",
        appLink: "https://magnificent-pie-033e94.netlify.app/"
    }, {
        img: myPortfolio,
        projectTitle: "My Portfolio",
        techStack: ["HTML", "CSS", "JavaScript", "React"],
        description: "Explore My Portfolio, I am a Full Stack Developer.With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and want to achieve great things.",
        githubLink: "https://github.com/Amritchandra/Amritchandra.github.io",
        appLink: "https://amritchandra.github.io/"
    }
]




function Projects() {
    return (
        <div id='projects'>
            <h1>Projects</h1>

            {
                data.map((e, index) => {
                    return (

                        index % 2 == 0 ? (
                            <div className="project-card proCard1" key={index}>
                                <div className='projectImg'>
                                    <img src={e.img} alt="image" />
                                </div>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="project-card proCard2" key={index}>
                                <div className='projectDetails'>
                                    <h2 className="project-title">{index + 1 + ". " + e.projectTitle}</h2>
                                    <div className="project-tech-stack">
                                        {
                                            e.techStack.map((ele, ind) => {
                                                return (
                                                    <span key={ind}>{ele}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <p className="project-description">{e.description}</p>
                                    <div className='projectButtons'>
                                        <a href={e.githubLink} target="_blank" className="project-github-link">View Code</a>
                                        <a href={e.appLink} target="_blank" className="project-deployed-link">View Live App</a>
                                    </div>
                                </div>
                                <div className='projectImg'>
                                    <img src={e.img} alt="" />
                                </div>
                            </div>
                        )
                    )
                })
            }
        </div>
    )
}

export default Projects