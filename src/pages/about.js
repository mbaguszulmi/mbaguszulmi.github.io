import React, { Component } from "react"
import pearl from '../assets/images/pearl.jpg'
import location_icon from '../assets/images/location_pin.svg'
import web_icon from '../assets/images/mdi_web_tiny.svg'
import tel_icon from '../assets/images/tel_icon.svg'
import mail_icon from '../assets/images/ic_round-mail.svg'
import born_icon from '../assets/images/birthday-cake.svg'
import dot_progress from '../assets/images/dot_progress.svg'
import ProgressBar from '../components/progress-bar'
import Api from '../assets/js/api'
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
                                Hi, my name is Muhammad Bagus Zulmi. I am a 
                                Informatics Engineering student at Universitas 
                                Negeri Malang. Currently I will take 6th semester. 
                                I really like developing information systems, especially 
                                in the form of web and Android applications. I also 
                                like artificial intelligence.
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
                                    <span>Jl. Terusan Surabaya 55A RT. 01 RW. 03, Klojen, Malang</span>
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
                                    <img src={dot_progress} alt="dot"/>
                                </div>

                                <div className="school">
                                    <div className="year">2017 - Now</div>
                                    <div className="school-name">
                                        S1 Teknik Informatika <br/>
                                        Universitas Negeri Malang
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot"/>
                                </div>

                                <div className="school">
                                    <div className="year">2014 - 2017</div>
                                    <div className="school-name">
                                        IPA <br/>
                                        SMA Negeri 11 Surabaya
                                    </div>
                                </div>

                                <div className="dot">
                                    <img src={dot_progress} alt="dot"/>
                                </div>

                                <div className="school">
                                    <div className="year">2011 - 2014</div>
                                    <div className="school-name">
                                        SMP Negeri 20 Surabaya
                                    </div>
                                </div>

                                <div className="dot last">
                                    <img src={dot_progress} alt="dot"/>
                                </div>

                                <div className="school">
                                    <div className="year">2005 - 2011</div>
                                    <div className="school-name">
                                        MI Nyai Hj. Ashfiyah
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

                            <span className="language-name">Javanese</span>
                            <ProgressBar percent="90%" />
                        </div>

                        <div className="card experience-card">
                            <h3 className="card-title">Experience</h3>

                            <div className="card-content">
                                <div className="dot">
                                    <img src={dot_progress} alt="dot"/>
                                </div>

                                <div className="experience">
                                    <div className="date">Juni - September 2019</div>
                                    <div className="experience-place">Jurusan Teknik Elektro, Universitas Negeri Malang</div>
                                    <div className="experience-description">Proyek dengan dosen Universitas Negeri Malang untuk membuat aplikasi web simulasi UKK SMK TKJ Ibnu Abbas Bantur.</div>
                                </div>
                                
                                <div className="dot">
                                    <img src={dot_progress} alt="dot"/>
                                </div>

                                <div className="experience">
                                    <div className="date">Maret - April 2019</div>
                                    <div className="experience-place">Self Employee</div>
                                    <div className="experience-description">Membuat sistem informasi tentang Arsip surat.</div>
                                </div>
                                <div className="dot last">
                                    <img src={dot_progress} alt="dot"/>
                                </div>

                                <div className="experience">
                                    <div className="date">Juni - November 2018</div>
                                    <div className="experience-place">Jurusan HKN, Universitas Negeri Malang</div>
                                    <div className="experience-description">Membuat aplikasi android "Madani Citizine".</div>
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