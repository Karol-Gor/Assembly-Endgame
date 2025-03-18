import React, { useEffect } from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import LanguageChipsSection from "./components/LanguageChipsSection"
import WordSection from "./components/WordSection"
import KeyboardSection from "./components/KeyboardSection"
import { useState } from "react"
import { generateAlphabetArray } from "./resources/generator"
import { languages } from "./resources/languages"
import { getRandomWord } from "./resources/utils"
import Confetti from "react-confetti"

export default function App() {

    const [currentWord, setCurrentWord] = useState("")
    const [guessedLetters, setGuessedLetters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [reload, setIsReload] = useState(false)

    useEffect(() => {
        console.log(reload)
        getRandomWord(setCurrentWord)
        }, [reload]
    )

    useEffect(() => {
        if([...currentWord].length > 0)
            setIsLoading(true)
    }, [currentWord]
)

    const alphabet= generateAlphabetArray()

    const wrongGuessCount = countWrongAttempts()

    const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const isGameLost = languages.length - wrongGuessCount <= 1
    const isGameOver = isGameWon || isGameLost
    const isLastLetterWrong = !currentWord.includes(guessedLetters[guessedLetters.length-1])
        
    function countWrongAttempts () {
        let counter = 0
        guessedLetters.map(
            letter => {
                if(!currentWord.includes(letter)) 
                    counter++
            }
        )
        return counter
    }

    return (
        <main>
            {isLoading &&
            <>
                <Header/>
                <Status
                    isGameWon={isGameWon}
                    isGameLost={isGameLost}
                    wrongGuessCount={wrongGuessCount}
                    languages={languages}
                    isLastLetterWrong={isLastLetterWrong}   
                />
                <LanguageChipsSection
                    wrongGuessCount={wrongGuessCount}
                    languages={languages}
                />
                <WordSection 
                    currentWord={currentWord}
                    guessedLetters={guessedLetters}
                    numberOfLeftGuesses={languages.length - 1}
                    isGameLost={isGameLost}
                />
                <KeyboardSection 
                    alphabet={alphabet}
                    guessedLetters={guessedLetters}
                    currentWordArray = {[...currentWord]}
                    isGameOver={isGameOver}
                    setGuessedLetters={setGuessedLetters}
                    setIsLoading={setIsLoading}
                    setIsReload={setIsReload}
                    setCurrentWord={setCurrentWord}
                />
            </>
            }
            {isGameWon && <Confetti/>}
        </main>
    )
}