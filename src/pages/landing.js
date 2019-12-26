import React, { Component } from "react"
import Socials from '../components/socials'
import btn_down from '../assets/images/BTN_down.svg'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/project-card'

class Landing extends Component {
    componentDidMount() {
        document.title = "Muhammad Bagus Zulmi"
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
                                <ProjectCard 
                                    title="Lorem ipsum dolor sit amet"
                                    thumbnail="thmb.png"
                                    label="developing"
                                    type="android"
                                    limit="limit"
                                    href="#"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Landing