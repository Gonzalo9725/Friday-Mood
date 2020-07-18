import React from 'react'

const Button = ({onClick, title}) => {
    return (
        <button 
            onClick = {onClick}
            className="btn btn-dark my-3"
        >
            {title}
        </button>
    )
}

export default Button