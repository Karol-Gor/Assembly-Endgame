import React from "react"
import Header from "./components/Header"
import Status from "./components/Status"
import LanguageChipsSection from "./components/LanguageChipsSection"
import WordSection from "./components/WordSection"
import KeyboardSection from "./components/KeyboardSection"
import {useState} from "react"
import { generateAlphabetArray } from "./resources/generator"

export default function App() {

    const [currentWord, setCurrentWord] = useState("react")
    const [alphabetButtons, setAlphabetButtons] = useState(generateAlphabetArray())
    return (
        <main>
            <Header/>
            <Status/>
            <LanguageChipsSection/>
            <WordSection currentWord={currentWord}/>
            <KeyboardSection alphabetButtons={alphabetButtons}/>
        </main>
    )
}