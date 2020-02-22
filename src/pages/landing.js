import React, { Component } from "react"
import Socials from '../components/socials'
import btn_down from '../assets/images/BTN_down.svg'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/project-card'
import '../assets/js/slider'
import Api from '../assets/js/api'

class Landing extends Component {
    state = {}

    componentDidMount() {
        document.title = "Muhammad Bagus Zulmi"
        window.listenSlider()

        Api.getProjects().then(data => {
            let projectElems = []

            data.forEach((project, index) => {
                if (index > 4) return

                projectElems.push(
                    <ProjectCard 
                        title={project.project_name}
                        thumbnail={project.thumbnail_url}
                        label={project.status}
                        type={project.type}
                        limit="limit"
                        href={`/projects/${index+1}`}
                        key={index+1}
                        onClick={window.projectCardClick}
                    />
                )
            })

            this.setState({
                projects: projectElems
            })
        })
    }

    render() {
        return (
            <div className="landing">
                <header className="header">
                    <div className="my-avatar"></div>
                    <h1 className="my-name">Muhammad Bagus Zulmi</h1>
                    <p className="description">Web and Android Developer</p>
                    <Socials/>
                    <img className="btn-down" src={btn_down} alt="down button" />
                </header>

                <section id="about-me-section" className="about-me-section">
                    <div className="bg"></div>

                    <div className="about-me-content-wrapper">
                        <div className="about-me-content">
                            <p>
                                Hi, my name is Muhammad Bagus Zulmi. I am a Informatics 
                                Engineering student at Universitas Negeri Malang. Currently 
                                I will take 6th semester. I really like developing 
                                information systems, especially in the form of web and 
                                Android applications. I also like artificial intelligence.
                            </p>

                            <Link to="/about" className="btn main rounded">Read more</Link>
                        </div>
                    </div>
                </section>

                <section className="recent-project-section">
                    <h2 className="title section-title">Recent Project</h2>

                    <div className="slider">
                        <div className="slider-inner">
                            <div className="slider-content">
                                {this.state.projects}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Landing