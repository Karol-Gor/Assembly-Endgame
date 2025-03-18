import {clsx} from "clsx"
import {getFarewellText} from "../resources/utils"
export default function Status ({isGameWon, isGameLost, wrongGuessCount, languages, isLastLetterWrong}) {


    function renderGameStatus () {
        if (!(isGameWon || isGameLost)) {
            if(wrongGuessCount < languages.length - 1 && wrongGuessCount > 0 && isLastLetterWrong)
            {
                const message = `“${getFarewellText(languages[wrongGuessCount-1].name)}” 🫡 `
                return<p>{message}</p>
            } else {
                return null;
            }
        } else { 
            if (isGameWon) {
                return (
                    <>
                        <h2>You win!</h2>
                        <p>Well done! 🎉</p>
                    </>
                )
            } else {
                return (
                    <>
                        <h2>Game over!</h2>
                        <p>You lose! Better start learning Assembly 😭</p>
                    </>
                )
            }
        }
    }

    const statusClassName = clsx(
        'status-box',
        {
            'farwell': wrongGuessCount < languages.length - 1 && 
            wrongGuessCount > 0 && !(isGameWon || isGameLost) && isLastLetterWrong
        }
    )

    const statusStyling = {
        backgroundColor: isGameLost ? "#BA2A2A" : (isGameWon ? "#10A95B" : "") 
    }
    return (
        <div 
            className={statusClassName} 
            style={statusStyling}
            aria-live="polite" 
            role="status" 
        >
            {renderGameStatus()}
        </div>
    )
}
