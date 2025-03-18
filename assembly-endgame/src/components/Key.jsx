import clsx from "clsx"
export default function Key ({letter, guessedLetters, currentWordArray, setGuessedLetters}) {

    function addLetter() {
        setGuessedLetters(prevLetters => {
            const letterSet = new Set(prevLetters)
            letterSet.add(letter)
            return Array.from(letterSet)
        })
    }
        

    function setColor() {
        if (guessedLetters.includes(letter)) {
            if (currentWordArray.includes(letter)) {
                return "#10A95B"
            } else {
                return "#EC5D49"
            }
        } else {
           return "#FCBA29"
        }         
    }

    //alternative appraoch with clsx
    // const customClassName = clsx('key',{
    //     'correct': guessedLetters.includes(character) && currentWordArray.includes(character),
    //     'wrong': guessedLetters.includes(character) && !currentWordArray.includes(character)
    // })

    const customStyle = {
        backgroundColor: setColor()
    }

    return (
        <button 
            className="key"
            name={letter} 
            onClick={addLetter}
            style={customStyle}
        >{letter}</button>
    )
}