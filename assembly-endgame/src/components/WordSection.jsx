import Letter from "./Letter"

export default function WordSection ({currentWord, guessedLetters}) {
    const characterArray = [...currentWord].map(
        (character, index) => {
            return (<Letter 
                key={`${index}${character}`} 
                currentLetter = {character}
                guessedLetters = {guessedLetters}
            />)
        }
    )
    return (
        <section className="word">
            {characterArray}
        </section>
    )
} 