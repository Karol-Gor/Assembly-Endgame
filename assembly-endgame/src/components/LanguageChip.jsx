import {clsx} from "clsx"
export default function LanguageChip ({language, isSkull}) {

    const chipClassName = clsx(
        'chip',
        {
            'lost' : isSkull
        }
    )

    const chipStyle = {
        backgroundColor : language.backgroundColor,
        color : language.color
    }
    return (
        <div className={chipClassName} style={chipStyle}>
            <span>{language.name}</span>
        </div>
    )
}