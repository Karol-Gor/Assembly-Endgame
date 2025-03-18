import Key from "./Key"
export default function KeyboardSection ( props ) {

    function resetGame() {
        props.setIsReload(prevValue => !prevValue)
        props.setGuessedLetters([])
        props.setIsLoading(false)
    }

    const keys = props.alphabet.map(
        letter => 
        <Key 
            key = {letter} 
            letter = {letter}
            guessedLetters={props.guessedLetters}
            currentWordArray = {props.currentWordArray}
            setGuessedLetters={props.setGuessedLetters}
            isGameOver={props.isGameOver}
        />
    )

    return (
        <>        
            <section 
                className="keyboard">
                {keys}
            </section>  
            {props.isGameOver && <button 
                className="new-game"
                onClick={resetGame}
            >
                New Game
            </button>}
        </>

    )
}