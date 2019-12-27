import React from 'react'

const ProgressBar = (props) => {
    let { percent } = props

    return(
        <div className="progress-bar" title={percent}>
            <div className="percentage" style={{width: percent}}></div>
        </div>
    )
}

export default ProgressBar