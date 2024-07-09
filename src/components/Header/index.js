import './index.css'

const Header = props => {
  const {score, timer} = props
  return (
    <nav>
      <ul className="HeaderList">
        <li>
          <div>
            <img
              className="logoImg"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </div>
        </li>
        <li className="TimerBox">
          <div className="TimerBox">
            <p>
              score:<span> {score}</span>
            </p>
            <div className="TimerBoxSub">
              <img
                className="timerImg"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p> {timer} Secs</p>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}
export default Header
