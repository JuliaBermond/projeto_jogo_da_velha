import {useContext} from 'react';
import { GameContext } from '../contexts/GameContext'

export function Winner(){

    const {whoIsWinner} = useContext(GameContext)

 
    if(!whoIsWinner) return <></>
        
    return (
        <p className='winner'>
            {whoIsWinner} ganhou!!
        </p>
    )
    
}