import React, { Component } from "react"
import born_icon from '../assets/images/birthday-cake.svg'
import dot_progress from '../assets/images/dot_progress.svg'
import mail_icon from '../assets/images/ic_round-mail.svg'
import location_icon from '../assets/images/location_pin.svg'
import web_icon from '../assets/images/mdi_web_tiny.svg'
import pearl from '../assets/images/pearl.jpg'
import tel_icon from '../assets/images/tel_icon.svg'
import Api from '../assets/js/api'
import ProgressBar from '../components/progress-bar'
import SkillCard from '../components/skill-card'

class About extends Component {
    state = {}
    componentDidMount() {
        document.title = "About Me | Muhammad Bagus Zulmi"

        Api.getCertificate().then(data => {
            let certificateElems = []

            data.forEach(certificate => {
                certificateElems.push(
                    <a key={certificate.url} href={certificate.url} rel="noopener noreferrer" target="_blank" title={certificate.name}>
                        <img className="certificate-img" src={certificate.url} alt="certificate" />
                    </a>
                )
            });

            this.setState({
                certificates: certificateElems
            })
        })

        Api.getSkills().then(data => {
            let skillElems = []

            data.forEach((skill, index) => {
                skillElems.push(
                    <SkillCard skillName={skill.skill_name} percent={`${skill.percent}%`} skillImage={skill.thumbnail} key={index} />
                )
            });

            this.setState({
                skills: skillElems
            })
        })
    }

    render() {
        return (
            <div className="about">
                <section className="about-section">
                    <div className="about-section-inner">
                        <img className="my-photo" src={pearl} alt="mbz" />

                        <div className="card">
                            <h3 className="card-title">About me</h3>

                            <p>
                                I'm a professional Android and Web Developer. I graduated from
                                Universitas Negeri Malang with Bachelor Degree of Engineering (S.T.) in
                                Informatics Engineering Course. I Have experienced in many software
                                development especially in Android and Web.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="green-section">
                    <div className="green-section-inner">
                        <div className="card profile">
                            <h3 className="card-title">Profile</h3>

                            <div className="card-content">
                                <div className="content-item">
                                    <img src={location_icon} alt="location icon" />
                                    <span>Malang</span>
                                </div>

                                <div className="content-item">
                                    <img src={tel_icon} alt="tel icon" />
                                    <span>+62 896 8205 6995</span>
                                </div>

                                <div className="content-item">
                                    <img src={mail_icon} alt="location icon" />
                                    <span>mbaguszulmi@gmail.com</span>
                                </div>

                                <div className="content-item">
                                    <img src={web_icon} alt="location icon" />
                                    <span>https://mbaguszulmi.com</span>
                                </div>

                                <div className="content-item">
                                    <img src={born_icon} alt="location icon" />
                                    <span>Born in Surabaya, November 10th 1998</span>
                                </div>
                            </div>
                        </div>

                        <div className="card education">
                            <h3 className="card-title">Education</h3>

                            <div className="card-content">
                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="school">
                                    <div className="year">2017 - 2021</div>
                                    <div className="school-name">
                                        Informatics Engineering, BE (S.T.) <br />
                                        Universitas Negeri Malang
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="school">
                                    <div className="year">2014 - 2017</div>
                                    <div className="school-name">
                                        IPA (Science) <br />
                                        SMA Negeri 11 Surabaya
                                    </div>
                                </div>

                                <div className="dot last">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="school">
                                    <div className="year">2011 - 2014</div>
                                    <div className="school-name">
                                        SMP Negeri 20 Surabaya
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="orange-section">
                    <div className="orange-section-inner">
                        <div className="card language">
                            <h3 className="card-title">Language</h3>

                            <span className="language-name">Bahasa Indonesia</span>
                            <ProgressBar percent="100%" />

                            <span className="language-name">English</span>
                            <ProgressBar percent="60%" />
                        </div>

                        <div className="card experience-card">
                            <h3 className="card-title">Experience</h3>

                            <div className="card-content">
                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Mar 2021 - Present</div>
                                    <div className="experience-place">Finfleet | IT Developer</div>
                                    <div className="experience-description">
                                        <ul>
                                            <li>
                                                Managing REST API
                                            </li>
                                            <li>
                                                Managing Front-end in ReactJS and Angular
                                            </li>
                                            <li>
                                                Managing existing Android App for Driver
                                            </li>
                                            <li>
                                                Planning and Creating a Flutter Project for
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Mar 2019 - Present</div>
                                    <div className="experience-place">Freelance | Android and Web Developer</div>
                                    <div className="experience-description">
                                        <ul>
                                            <li>
                                                Build Letter Archiver Information System using CodeIgniter
                                            </li>
                                            <li>
                                                Building Information System for Social and Worker Agency in Banjarmasin
                                            </li>
                                            <li>
                                                Fix and build Information System for Kantor Urusan Agama Batu Ampar
                                            </li>
                                            <li>
                                                Fix and build Information System for Food order and delivery
                                            </li>
                                            <li>
                                                Creating Education game "Let's counting" for helping children to learn about numbers
                                            </li>
                                            <li>
                                                Maintaining Siginjai App for Polda Jambi, led by Illiyin Studio team.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Mar - Dec 2020</div>
                                    <div className="experience-place">Illiyin Studio | Android Developer</div>
                                    <div className="experience-description">
                                        Maintaining SIHMI APP, developing Global Bakery App, maintaining Jendela Muslim App, build and maintain server.
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Jun - Jul 2020</div>
                                    <div className="experience-place"> | Full-stack Web Developer (Internship)</div>
                                    <div className="experience-description">
                                        Full-stack Web Developer, Build Login Gate (SSO) and e-commerce.
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Jun - Sep 2019</div>
                                    <div className="experience-place">Jurusan Teknik Elektro, Universitas Negeri Malang | Full-stack Web Developer</div>
                                    <div className="experience-description">
                                        Build Information System of UKK (Uji Kompetensi Keahlian) simulation for SMK TKJ Ibnu Abbas, Bantur using CodeIgniter
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Aug - Nov 2018</div>
                                    <div className="experience-place">Jurusan Teknik Elektro, Universitas Negeri Malang | Assistant Lecturer</div>
                                    <div className="experience-description">
                                        Assistant Lecturer for managing practicum activities in Algorithm and Programming Course.
                                    </div>
                                </div>

                                <div className="dot last">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Jul - Nov 2018</div>
                                    <div className="experience-place">Jurusan HKN, Universitas Negeri Malang | Android and Web Developer</div>
                                    <div className="experience-description">
                                        Android Developer, Build and android app named "Madani Citizine"
                                    </div>
                                </div>

                                {/* <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">June - September 2019</div>
                                    <div className="experience-place">Electrical Departement, Universitas Negeri Malang</div>
                                    <div className="experience-description">A project with a Malang State University lecturer to create a simulation web application for the Skills Competency Examination (UKK) of SMK TKJ Ibnu Abbas Bantur.</div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">March - April 2019</div>
                                    <div className="experience-place">Self Employee</div>
                                    <div className="experience-description">Creating an information system about mail archives.</div>
                                </div>
                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">June - November 2018</div>
                                    <div className="experience-place">Department of Law and Citizenship, Universitas Negeri Malang</div>
                                    <div className="experience-description">Made the android application "Madani Citizine".</div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">March - November 2020</div>
                                    <div className="experience-place">Android Developer at Illiyin Studio Malang</div>
                                    <div className="experience-description">Managing SIHMI App, Developing Global Bakery App (KasirApp), Managing Jendela Muslim App, Managing servers.</div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">June - July 2020</div>
                                    <div className="experience-place">Web Developer at KPRI Universitas Negeri Malang</div>
                                    <div className="experience-description">Web developer Intern, responsible for developing Gate Login (SSO) and Web E-Commerce.</div>
                                </div>

                                <div className="dot last">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">June 2020 - Now</div>
                                    <div className="experience-place">Freelance Web and Android Developer</div>
                                    <div className="experience-description">Creating SIMSETA, KUA Batam Web, Optimus Sales Management app, Population registration application app (mobile android and web).</div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skill-section">
                    <div className="skill-section-inner">
                        <h3 className="title">Skill Certification</h3>

                        <div className="certificate">
                            {this.state.certificates}
                        </div>

                        <h3 className="title">Skills</h3>
                        <div className="skills">
                            {this.state.skills}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About