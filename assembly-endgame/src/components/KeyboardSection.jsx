import Key from "./Key"
export default function KeyboardSection ( {alphabetButtons} ) {


    const keys = alphabetButtons.map(
        character => <Key key = {character} character = {character}/>
    )

    return (
        <section className="keyboard">
            {keys}
        </section>
    )

}