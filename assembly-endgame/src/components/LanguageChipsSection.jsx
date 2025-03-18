import LanguageChip from "./LanguageChip";
import { languages } from "../resources/languages"

export default function LanguageChipsSection ({wrongGuessCount}) {

    const languageChipsComponents = languages.map(
        (item, index) => {
        console.log(`index: ${index}, wrongGuessCount: ${wrongGuessCount}`)
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