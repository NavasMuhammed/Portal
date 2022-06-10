import React from 'react'
function Progress({ done }) {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    return (
        <div>
            <span>Overall Progress:{done}%</span>
            <div className="progress">
                <div className="progress-done" style={style}>
                </div>
            </div>
        </div>
    )
}
export default Progress;