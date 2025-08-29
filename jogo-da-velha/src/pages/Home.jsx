import { Board } from '../components/board'
import { GameContextProvider } from '../contexts/GameContext'

export function Home(){

    return(
        <GameContextProvider>
            <Board/>
        </GameContextProvider>
    )
}