import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {
    let { label, thumbnail, type, title, limit, href, onClick } = props;
    return(
        <Link to={href} className={`project-card ${limit}`} title={title} onClick={onClick}>
            <div className="thumbnail" style={{backgroundImage: `url(${thumbnail})`}}>
                <div className={`label ${type}`}><span>{label}</span></div>
            </div>
            <h3 className="project-title">{title}</h3>
        </Link>
    )
}

export default ProjectCard;

