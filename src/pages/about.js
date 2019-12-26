import React, { Component } from "react"

class About extends Component {
    componentDidMount() {
        document.title = "About Me | Muhammad Bagus Zulmi"
    }

    render() {
        return (
            <div><h1>About</h1></div>
        )
    }
}

export default About