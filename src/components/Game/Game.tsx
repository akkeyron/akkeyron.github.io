import { useState, useRef, useEffect, FC, CSSProperties, MouseEventHandler, LegacyRef, FormEvent, RefObject } from "react";
import './Game.css'
import CatDefault from "../../assets/default1.png"
import CatOpen from "../../assets/open1.png"
import { createItem } from "../../server/dynamodb";

// set the game time limit
const TIME_LIMIT = 3

// interface
interface Props {
    currentScore: string;
    size: number;
}

const Game:FC<Props> = ({ currentScore, size }) => {
    const [score, setScore] = useState(0);
    const [newHighScore, setNewHighScore] = useState(false);
    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
    const [buttonStyles, setButtonStyles] = useState<CSSProperties>({});
    const [gameStarted, setGameStarted] = useState(false);
    const [catState, setCatState] = useState(CatDefault);
    // Use a ref to get the dimensions of the container div
    const containerRef = useRef<HTMLDivElement>(null);
    const endtime = useRef(false);
    const nameRef = useRef<HTMLInputElement>(null);

    const handleClick:MouseEventHandler<HTMLDivElement> = () => {
        setScore(prevScore => prevScore + 1);
        // Get the dimensions of the container div

        const container = containerRef.current;

        // check if the container is null or undefined
        if (container === undefined || container === null) {
            return;
        }

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        // Generate a random position for the button within the container div
        const maxX = containerWidth - 153;
        const maxY = containerHeight - 50;
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        // Update the button's styles to move it to the new position
        setButtonStyles({
            position: "absolute",
            left: `${newX}px`,
            top: `${newY}px`
        });
    };

    useEffect(() => {
        // game ends
        if (timeLeft <= 0) {
            endtime.current = true;
            endGame();
        };
    }, [timeLeft])

    function startGame() {
        setGameStarted(true);

        // play the game time limit
        const id = setInterval(() => {
            setTimeLeft(timeLeft => {
                return timeLeft - 1
            });

            if (endtime.current) {
                clearInterval(id);
            }
        }, 1000);
    };

    const endGame = () : void => {
        setGameStarted(false);
        if (Number(score) > Number(currentScore)) {
            setNewHighScore(true);
        } else {
            setScore(0);
        }
        setTimeLeft(TIME_LIMIT);
        endtime.current = false;
    }

    const handleHighscore = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newData = {
            'id':  size + 1,
            'score': score,
            'name': nameRef.current === null ? "Unknown" : nameRef.current?.value,
        }

        createItem(newData)
            .then(() => console.log('data created'))
            .catch(error => console.log(error))
            .finally(() => {
                setScore(0);
                setNewHighScore(false);
            })
    }

    return (
        <section id='game'>
            <div className="container game__container" ref={containerRef}>
                {/* game menu */}
                <div className="game__menu">
                    Score: {score}
                    {gameStarted && <p>Time left: {timeLeft}</p>}
                    {!gameStarted && <button onClick={startGame}>Start</button>}

                </div>

                {/* game starts and click the cat */}
                {gameStarted && <div id="clicker" onClick={handleClick} style={buttonStyles}>
                    <img src={catState}
                        onMouseOver={() => setCatState(CatOpen)}
                        onMouseOut={() => setCatState(CatDefault)}
                        alt="Imagine this is cat"
                    />
                </div>}

                {/* game ends and get new high score */}
                {!gameStarted && newHighScore &&
                    <>
                        <h1>High score poggers!</h1>
                        <form onSubmit={handleHighscore}>
                            <input type="text" ref={nameRef} placeholder="enter your name" />
                            <button type="submit">Submit</button>
                        </form>

                    </>

                }


            </div>

        </section>

    );
}


export default Game