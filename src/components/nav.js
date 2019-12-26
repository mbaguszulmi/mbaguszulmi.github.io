import React from "react"
import { Link, withRouter } from "react-router-dom"
import '../assets/js/nav-control'

class Nav extends React.Component {
    state = {}

    onLocationChange(location) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0

        if (location.pathname === "/") {
            this.setState({
                activeIdx: 0
            })
        }
        else if (location.pathname === "/about") {
            this.setState({
                activeIdx: 1
            })
        }
        else if (location.pathname === "/project" || location.pathname.indexOf("/project") !== -1) {
            this.setState({
                activeIdx: 2
            })
        }
    }

    componentDidMount() {
        this.onLocationChange(window.location)
        window.listenNavScroll()
        this.props.history.listen(location => this.onLocationChange(location))
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
                    </div>
                </div>
    
                <div className="nav-drawer-wrapper">
                    <div className="nav-drawer">
                        <Link to="/" className={`nav-link ${this.state.activeIdx === 0 ? "active" : ""}`}>Home</Link>
                        <Link to="/about" className={`nav-link ${this.state.activeIdx === 1 ? "active" : ""}`}>About Me</Link>
                        <Link to="/projects" className={`nav-link ${this.state.activeIdx === 2 ? "active" : ""}`}>Projects</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav)