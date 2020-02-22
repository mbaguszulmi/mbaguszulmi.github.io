import React, { Component } from "react"

class Contact extends Component {
    componentDidMount() {
        document.title = "Contact | Muhammad Bagus Zulmi"

        let contactForm = document.querySelector("#email-form")
        let subjectInput = document.querySelector("#subject")
        let bodyInput = document.querySelector("#body")
        contactForm.addEventListener("submit", event => {
            let subjectValue = subjectInput.value
            let bodyValue = bodyInput.value

            if (subjectValue.trim().length !== 0 && bodyValue.trim().length !== 0) {
                event.preventDefault()
                let urlToOpen = `mailto:mbaguszulmi@gmail.com?subject=${subjectValue}&body=${bodyValue}`
                let anchorLink = document.createElement("a")
                anchorLink.href = urlToOpen
                anchorLink.target = "_blank"
                anchorLink.click()
            }
        })
    }

    render() {
        return (
            <div className="contact">
                <div className="contact-inner">
                    <p className="message">
                        Contact me via email <a href="mailto:mbaguszulmi@gmail.com">mbaguszulmi@gmail.com</a> <br/>
                        or you can fill this form bellow.
                    </p>

                    <form className="nx-form" id="email-form">
                        <div className="input-wrapper">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" name="subject" id="subject" placeholder="Type a subject..." required></input>
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="body">Body</label>
                            <textarea name="body" id="body" placeholder="Body of email" row="4" required></textarea>
                        </div>

                        <button type="submit" className="btn main rounded">Submit</button>
                    </form>

                    <div className="another-contact">
                        <span>
                            or chat me with one of these services
                        </span>
                    </div>

                    <div className="other-contact-service">
                        <a className="btn main rounded" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+6289682056995">WhatsApp</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact