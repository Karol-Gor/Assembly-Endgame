import LanguageChip from "./LanguageChip";

export default function LanguageChipsSection ({wrongGuessCount, languages}) {

    const languageChipsComponents = languages.map(
        (item, index) => {
        return (<LanguageChip 
            key = {item.name} 
            language = {item}
            isSkull = {index < wrongGuessCount}
        />)
        }
      ) 

    return (
        <section className="chips-section">
            {languageChipsComponents}
        </section>
    )
}