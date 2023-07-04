import React, { useState } from "react";

const PopUp = (props) => {

    const [popup, setPopUp] = useState(false);

    const togglePopUp = () => {
        setPopUp(!popup)
    }

    return (
        <>
        <button onClick={togglePopUp} className="btn-modal">
            
        </button>
        <div className="popup">
            <div className="overlay"></div>
            <div className="popup-content">
                <h2>Game Over!</h2>
                <p>Your score was {props.score}, {props.name}</p>
                <button>Play again</button>
                <button>Back to main menu</button>
            </div>
        </div>
        </>
    )
}

export default PopUp;