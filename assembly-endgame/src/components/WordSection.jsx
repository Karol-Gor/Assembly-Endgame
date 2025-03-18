import Letter from "./Letter"

export default function WordSection ({currentWord, guessedLetters, numberOfLeftGuesses, isGameLost}) {
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    const characterArray = [...currentWord].map(
        (character, index) => {
            return (<Letter 
                key={`${index}${character}`} 
                currentLetter={character}
                guessedLetters={guessedLetters}
                isGameLost={isGameLost}
            />)
        }
    )
    return (
        <>
        <section className="word">
            {characterArray}
        </section>
        <section 
            className="sr-only" 
            aria-live="polite" 
            role="status">
            <p>
                {currentWord.includes(lastGuessedLetter) ? 
                    `Correct! The letter ${lastGuessedLetter} is in the word.` : 
                    `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                }
                You have {numberOfLeftGuesses} attempts left.
            </p>
            <p>Current word: {currentWord.split("").map(letter => 
            guessedLetters.includes(letter) ? letter + "." : "blank.")
            .join(" ")}</p>
        
        </section>
        </>
    )
} 