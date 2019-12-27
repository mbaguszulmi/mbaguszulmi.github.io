import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Api from '../assets/js/api'
import ReactHtmlParser from 'react-html-parser'

class ProjectsDetail extends Component {
    state = {}

    componentDidMount() {
        let { projectId } = this.props.match.params
        projectId = parseInt(projectId)

        if (isNaN(projectId)) {
            this.props.history.replace('/projects')
        }
        
        Api.getProjects().then(data => {
            let dataSelected = data[projectId-1]
            let buttonElems = []

            if (dataSelected.source) {
                buttonElems.push(
                    <a class="btn main rounded inline" href={dataSelected.source.url} target="_blank" rel="noopener noreferer" >View Source</a>
                )
            }

            if (dataSelected.preview) {
                if(dataSelected.preview.type === "download") {
                    buttonElems.push(
                        <a class="btn main rounded inline" href={dataSelected.preview.url} target="_blank" rel="noopener noreferer" >Download Binary</a>
                    )
                }
                else {
                    buttonElems.push(
                        <a class="btn main rounded inline" href={dataSelected.preview.url} target="_blank" rel="noopener noreferer" >Live Preview</a>
                    )
                }
            }

            this.setState(dataSelected)
            this.setState({
                buttons: buttonElems
            })
        })
    }

    render() {
        return (
            <div className="project-detail">
                <div className="project-detail-inner">
                    <div className="thumbnail" style={{backgroundImage: `url(${this.state.thumbnail_url})`}}>
                        <div className={`status ${this.state.type}`}><span>{this.state.status}</span></div>
                    </div>

                    <h1 className="project-title">{this.state.project_name}</h1>

                    <div className="source-preview-wrapper">
                        {this.state.buttons}
                    </div>

                    <div className="description">
                        {ReactHtmlParser(this.state.description)}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectsDetail)