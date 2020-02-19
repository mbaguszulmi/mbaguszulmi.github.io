import React from "react"
import { Link, withRouter } from "react-router-dom"
import '../assets/js/nav-control'

class Nav extends React.Component {
    state = {}

    onLocationChange(location) {
        let hash = window.location.hash;
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

        if (hash === "#/") {
            this.setState({
                activeIdx: 0
            })
        }
        else if (hash === "#/about") {
            this.setState({
                activeIdx: 1
            })
        }
        else if (hash === "#/project" || hash.indexOf("#/project") !== -1) {
            this.setState({
                activeIdx: 2
            })
        }
        else if (hash === "#/contact") {
            this.setState({
                activeIdx: 3
            })
        }
    }

    componentDidMount() {
        this.onLocationChange()
        window.listenNavScroll()
        window.addEventListener("hashchange", () => {
            this.onLocationChange()
        })

        let nav = document.querySelector("#top-nav")
        let hamburger = document.querySelector("#hamburger")
        hamburger.addEventListener("click", event => {
            if (nav.classList.contains("open-drawer")) {
                nav.classList.remove("open-drawer")
            }
            else {
                nav.classList.add("open-drawer")
            }
        })
    }

    render() {
        return (
            <nav id="top-nav" className="top-nav">
                <div className="nav-wrapper">
                    <div id="hamburger" className="hamburger">
                        <div className="bar bar-1"></div>
                        <div className="bar bar-2"></div>
                        <div className="bar bar-3"></div>
                    </div>
                    <div className="logo">
                        <img src={this.props.logo} alt="logo"></img>
                    </div>
    
                    <div className="nav-content">
                        <Link to="/" className={`nav-link ${this.state.activeIdx === 0 ? "active" : ""}`}>Home</Link>
                        <Link to="/about" className={`nav-link ${this.state.activeIdx === 1 ? "active" : ""}`}>About Me</Link>
                        <Link to="/projects" className={`nav-link ${this.state.activeIdx === 2 ? "active" : ""}`}>Projects</Link>
                        <Link to="/contact" className={`nav-link ${this.state.activeIdx === 3 ? "active" : ""}`}>Contact</Link>
                    </div>
                </div>
    
                <div className="nav-drawer-wrapper">
                    <div className="nav-drawer">
                        <Link to="/" className={`nav-link ${this.state.activeIdx === 0 ? "active" : ""}`}>Home</Link>
                        <Link to="/about" className={`nav-link ${this.state.activeIdx === 1 ? "active" : ""}`}>About Me</Link>
                        <Link to="/projects" className={`nav-link ${this.state.activeIdx === 2 ? "active" : ""}`}>Projects</Link>
                        <Link to="/contact" className={`nav-link ${this.state.activeIdx === 3 ? "active" : ""}`}>Contact</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav)