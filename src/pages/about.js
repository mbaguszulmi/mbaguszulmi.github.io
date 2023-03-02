import React, { Component } from "react"
// import born_icon from '../assets/images/birthday-cake.svg'
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
                                Universitas Negeri Malang with a Bachelor's Degree of Engineering (S.T.) 
                                in Informatics Engineering Course. I Have experience in many software 
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
                                    <span>https://mbaguszulmi.github.io</span>
                                </div>

                                {/* <div className="content-item">
                                    <img src={born_icon} alt="location icon" />
                                    <span>Born in Surabaya, November 10th 1998</span>
                                </div> */}
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

                                <div className="dot last">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="school">
                                    <div className="year">2014 - 2017</div>
                                    <div className="school-name">
                                        IPA (Science) <br />
                                        SMA Negeri 11 Surabaya
                                    </div>
                                </div>

                                {/* <div className="dot last">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="school">
                                    <div className="year">2011 - 2014</div>
                                    <div className="school-name">
                                        SMP Negeri 20 Surabaya
                                    </div>
                                </div> */}
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
                                    <div className="date">Mar 2022 - Present</div>
                                    <div className="experience-place">Abacus.co | Senior Android Developer</div>
                                    <div className="experience-description">
                                        Abacus.co is one of the fastest growing Point Of Sale systems in Australia. They offer a high-quality product in POS and Online Ordering apps. As a Senior Android Developer, I am responsible for creating and maintaining Android apps to maintain their stability and quality. Our Android products can be found in the website.
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
                                                BOXI Express. In this project I hold the role of Android Developer and Web Developer. The main objective of this project is to manage the Air Waybills and Courier. The Courier can pickup the Package to the customer and change the status. I've implemented a Location Sync Service, so the User can also track the Courier location.
                                            </li>
                                            <li>
                                                Vespa World Days 2022 Bali. As a mobile developer, I responsible to create an Android app for ticketing. It is an honor to be an important part of such a big international event.
                                            </li>
                                            <li>
                                                Enhancing POS Information System for AHYPP (Astra Honda Youthpreneurship Program). Managing the SQL Query to speed up the execution time. Managing the CodeIgniter 3 Code to improve performance and security.
                                            </li>
                                            <li>
                                                Enhancing Online Shop Admin IS, REST API, and Online Shop App (Flutter) for Taniqu. They offer products from Agricultural.
                                            </li>
                                            <li>
                                                Maintaining Siginjai App for Polda Jambi (Android Native and Flutter), led by Illiyin Studio team.
                                            </li>
                                            <li>
                                                Creating Education game "Let's counting" for helping children to learn about numbers
                                            </li>
                                            <li>
                                                Fix and build Information System for Food order and delivery
                                            </li>
                                            <li>
                                                Fix and build Information System for Kantor Urusan Agama Batu Ampar
                                            </li>
                                            <li>
                                                Building Information System for Social and Worker Agency in Banjarmasin
                                            </li>
                                            <li>
                                                Build Letter Archiver Information System using CodeIgniter
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Mar 2021 - Mar 2022</div>
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
                                                Planning and Creating a Flutter Project for Monitoring Cleaning, attendance, and cash receipt
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
                                        Maintaining SIHMI APP, developing Global Bakery App, maintaining Jendela Muslim App (Flutter), build and maintain server.
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot" />
                                </div>

                                <div className="experience">
                                    <div className="date">Jun - Jul 2020</div>
                                    <div className="experience-place">KPRI Universitas Negeri Malang | Full-stack Web Developer (Internship)</div>
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