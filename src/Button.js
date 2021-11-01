import React from 'react';

const Button = ({buttonName, actiune}) => {
    return(
        <button onClick={actiune}>{buttonName}</button>
    )
}

export default Button;