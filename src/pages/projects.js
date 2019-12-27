import React, { Component } from "react"
import Api from '../assets/js/api'
import ProjectCard from '../components/project-card'

class Projects extends Component {
    state = {}

    componentDidMount() {
        document.title = "Projects | Muhammad Bagus Zulmi"

        Api.getProjects().then(data => {
            let projectElems = []

            data.forEach((project, index) => {
                projectElems.push(
                    <ProjectCard 
                        title={project.project_name}
                        thumbnail={project.thumbnail_url}
                        label={project.status}
                        type={project.type}
                        href={`/projects/${index+1}`}
                    />
                )
            })

            this.setState({
                projects: projectElems
            })
        })
    }

    render() {
        return (
            <div className="projects-page">
                <div className="project-inner">
                    {this.state.projects}
                </div>
            </div>
        )
    }
}

export default Projects