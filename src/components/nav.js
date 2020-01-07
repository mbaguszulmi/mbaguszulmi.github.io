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
        // this.props.history.listen(location => this.onLocationChange(location))
        window.addEventListener("hashchange", () => {
            this.onLocationChange()
        })
    }

    render() {
        return (
            <nav className="top-nav">
                <div className="nav-wrapper">
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