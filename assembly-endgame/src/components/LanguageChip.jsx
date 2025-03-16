export default function LanguageChip ({language}) {
    const chipStyle = {
        backgroundColor : language.backgroundColor,
        color : language.color
    }
    return (
        <div className="chip" style={chipStyle}>
            <span>{language.name}</span>
        </div>
    )
}