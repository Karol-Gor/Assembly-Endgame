import Key from "./Key"
export default function KeyboardSection ( {alphabet, guessedLetters, currentWordArray, isGameOver, setGuessedLetters} ) {


    const keys = alphabet.map(
        letter => 
        <Key 
            key = {letter} 
            letter = {letter}
            guessedLetters={guessedLetters}
            currentWordArray = {currentWordArray}
            setGuessedLetters={setGuessedLetters}
        />
    )

    return (
        <>        
            <section className="keyboard">
                {keys}
            </section>  
            {isGameOver && <button className="new-game">
                New Game
            </button>}
        </>

    )
}