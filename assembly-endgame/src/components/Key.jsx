export default function Key ({character}) {
    return (
        <button className="key" name={character} value={character}>{character}</button>
    )
}