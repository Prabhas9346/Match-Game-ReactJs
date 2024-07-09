import './index.css'

const ScoreCard = props => {
  const {score, resetfn} = props

  return (
    <div className="scoreCardBox">
      <img
        className="trophyImg"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="yourScoreTxt">YOUR SCORE</p>
      <p className="scoreTxt">{score}</p>
      <button onClick={resetfn} type="button" className="resetBtn">
        <div className="resetBtnBox">
          <img
            className="resetImg"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          <p>PLAY AGAIN</p>
        </div>
      </button>
    </div>
  )
}
export default ScoreCard
