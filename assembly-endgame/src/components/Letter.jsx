export default function Letter ({currentLetter, guessedLetters, isGameLost}) {
    

    const letterStyle = {
        color: isGameLost && !guessedLetters.includes(currentLetter) ? "#EC5D49" : ""
    }
    
    return(
        <span 
            className="letter"
            style={letterStyle}
        >
            {guessedLetters.includes(currentLetter) || isGameLost ? currentLetter : ''}
        </span>
    )
}