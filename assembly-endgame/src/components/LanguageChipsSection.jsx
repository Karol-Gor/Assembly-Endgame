import LanguageChip from "./LanguageChip";
import { languages } from "../resources/languages"

export default function LanguageChipsSection () {

    const languageChipsComponents = languages.map(
        item => <LanguageChip key = {item.name} language = {item}/>
      ) 

    return (
        <section className="chips-section">
            {languageChipsComponents}
        </section>
    )
}