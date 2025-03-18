export default function Status ({isGameWon, isGameLost}) {

    function renderGameStatus () {
        if (!(isGameWon || isGameLost)) {
            return null;
        }
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

    const statusStyling = {
        backgroundColor: isGameLost ? "#BA2A2A" : (isGameWon ? "#10A95B" : "") 
    }
    return (
        <div className="status-box" style={statusStyling}>
            {renderGameStatus()}
        </div>
    )
}
