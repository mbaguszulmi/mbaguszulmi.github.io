import React, { Component } from "react"

class Contact extends Component {
    componentDidMount() {
        document.title = "Contact | Muhammad Bagus Zulmi"
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
                            <label for="">Subject</label>
                            <input type="text" name="subject" id="subject" placeholder="Type a subject..." required></input>
                        </div>

                        <div className="input-wrapper">
                            <label for="">Body</label>
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