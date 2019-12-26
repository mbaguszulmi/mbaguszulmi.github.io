import React, { Component } from "react"
import { withRouter } from "react-router-dom"

class ProjectsDetail extends Component {
    state = {}

    componentDidMount() {
        this.setState({
            projectId: this.props.match.params.projectId
        })
    }

    render() {
        return (
            <div><h1>Projects Detail {this.state.projectId}</h1></div>
        )
    }
}

export default withRouter(ProjectsDetail)