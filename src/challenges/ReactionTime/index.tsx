import { useState } from 'react';
import './reaction.css';

const ReactionTime = () => {
    const [startGame, setStartGame] = useState(false);
    const [finishGame, setFinishGame] = useState(false);
    const [timer, setTimer] = useState(0);
    const [reactionTime, setReactionTime] = useState(0);

    const handleStartGame = () => {
        setStartGame(true);
        const start = performance.now();
        setTimer(start);
    }

    const handleFinish = () => {
        if (!finishGame) {
            setFinishGame(true);
            const end = performance.now();
            const reaction = Math.round(end - timer);
            setReactionTime(reaction);
        }
    }

    return (
        <div className='container'>
            <p className='header'>Reaction Game</p>
            {startGame ?
                <div className={finishGame ? 'green-background' : 'red-background'} onClick={handleFinish}></div> 
                :
                <button className='btn' onClick={handleStartGame}>Start Game</button>
            }
            {finishGame ? <div>{reactionTime <= 200 ? 'You Clicked Too Early' : `You took ${reactionTime} ms`}</div> : null}
        </div>
    )
}

export default ReactionTime;