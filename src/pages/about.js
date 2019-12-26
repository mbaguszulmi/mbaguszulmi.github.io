import React, { Component } from "react"
import pearl from '../assets/images/pearl.jpg'
import location_icon from '../assets/images/location_pin.svg'
import web_icon from '../assets/images/mdi_web_tiny.svg'
import tel_icon from '../assets/images/tel_icon.svg'
import mail_icon from '../assets/images/ic_round-mail.svg'
import born_icon from '../assets/images/birthday-cake.svg'

class About extends Component {
    componentDidMount() {
        document.title = "About Me | Muhammad Bagus Zulmi"
    }

    render() {
        return (
            <div className="about">
                <section className="about-section">
                    <div className="about-section-inner">
                        <img className="photo" src={pearl} alt="my photo" />

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
                        <div className="card">
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
                    </div>
                </section>
            </div>
        )
    }
}

export default About