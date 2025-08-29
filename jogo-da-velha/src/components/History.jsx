import {useContext} from 'react';
import { GameContext } from '../contexts/GameContext'

export function History(){

    const {history, setHistory, setSquares, setIsXNext} = useContext(GameContext)

    function handleClick(index){

        const newHistory = [...history]
        newHistory.splice(index, Number.MAX_SAFE_INTEGER);
        setHistory(newHistory);

        setSquares(history[index].squares);
        setIsXNext(history[index].isNext);
    }

    return(
        <>
        <div>
            {history.map((data, index) => (
                <div className="history">
                    <button type="button" onClick={()=> handleClick(index)}>Voltar para jogada: {index}</button>
                </div>
            ))}
        </div>
        </>
    )
}