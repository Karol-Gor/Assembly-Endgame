import {words} from "./words"

export function getFarewellText(language) {
    const options = [
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We'll miss you, ${language}`,
        `Oh no, not ${language}!`,
        `${language} bites the dust`,
        `Gone but not forgotten, ${language}`,
        `The end of ${language} as we know it`,
        `Off into the sunset, ${language}`,
        `${language}, it's been real`,
        `${language}, your watch has ended`,
        `${language} has left the building`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

export function getRandomWord(setCurrentWord) {
    fetch("https://random-word-api.vercel.app/api?words=1")
    .then(res => res.json())
    .then(data => setCurrentWord(data[0]))
    .catch(e => {
        const randomIndex = Math.floor(Math.random() * words.length); 
        setCurrentWord(words[randomIndex])
    })
}