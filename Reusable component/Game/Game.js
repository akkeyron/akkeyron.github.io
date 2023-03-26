import React, { useState, useRef } from "react";
import './Game.css'

const Game = () => {
    const [score, setScore] = useState(0);
    const [clickValue, setClickValue] = useState(1);
    const [buttonStyles, setButtonStyles] = useState({});
    // Use a ref to get the dimensions of the container div
    const containerRef = useRef(null);

    const handleClick = () => {
        setScore(prevScore => prevScore + clickValue);
        // Get the dimensions of the container div
        
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        // Generate a random position for the button within the container div
        const maxX = containerWidth - 100;
        const maxY = containerHeight - 100;
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        // Update the button's styles to move it to the new position
        setButtonStyles({
            position: "relative",
            left: `${newX}px`,
            top: `${newY}px`
        });
    };

    const handleUpgrade = upgradeCost => {
        if (score >= upgradeCost) {
            setScore(prevScore => prevScore - upgradeCost);
            setClickValue(prevClickValue => prevClickValue + 1);
        }
    };

    return (
        <section id='game'>
            <div className="container game__container" ref={containerRef}>
                    <div id="score">Score: {score}</div>
                    <button id="clicker" onClick={handleClick} style={buttonStyles}>
                        Click me!
                    </button>
                    <div id="upgrades">
                        <h2>Upgrades</h2>
                        <div className="upgrade" id="upgrade-1">
                            <div className="upgrade-name">Upgrade 1</div>
                            <div className="upgrade-cost">Cost: 10</div>
                            <button
                                className="upgrade-button"
                                onClick={() => handleUpgrade(10)}
                            >
                                Purchase
                            </button>
                        </div>
                    </div>
            </div>

        </section>

    );
}


export default Game