export default function Letter ({currentLetter, guessedLetters}) {
    return(
        <span className="letter">{guessedLetters.includes(currentLetter) ? currentLetter : ''}</span>
    )
}