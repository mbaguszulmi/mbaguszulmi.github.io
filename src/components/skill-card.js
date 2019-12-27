import React from 'react'
import ProgressBar from './progress-bar'

const SkillCard = (props) => {
    let { skillName, percent, skillImage } = props

    return(
        <div className="skill-card">
            <div className="thumbnail" style={{backgroundImage: `url(${skillImage})`}}></div>

            <div className="card-content">
                <h4 className="skill-name">{skillName}</h4>
                <ProgressBar percent={percent} />
            </div>
        </div>
    )
}

export default SkillCard