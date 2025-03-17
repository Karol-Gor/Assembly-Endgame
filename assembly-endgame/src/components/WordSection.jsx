import Letter from "./Letter"

export default function WordSection ({currentWord}) {
    const characterArray = [...currentWord].map(
        (character, index) => <Letter key={`${index}${character}`} currentLetter = {character}/>
    )
    return (
        <section className="word">
            {characterArray}
        </section>
    )
} 