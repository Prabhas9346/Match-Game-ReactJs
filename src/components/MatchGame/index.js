import {Component} from 'react'
import './index.css'
import Header from '../Header'
import GameItem from '../GameItem'
import ScoreCard from '../ScoreCard'

class MatchGame extends Component {
  state = {
    score: 0,
    gameRunning: true,
    timer: 60,
    activateTabIdel: 'FRUIT',
    fruit: '',
    filteredImgList: [],
  }

  componentDidMount() {
    const {imagesList} = this.props
    const {activateTabIdel} = this.state
    this.createTimerfn()

    this.setState({
      fruit: imagesList[0],
      filteredImgList: imagesList.filter(
        ele => ele.category === activateTabIdel,
      ),
    })
  }

  createTimerfn = () => {
    this.timerId = setInterval(this.timerfn, 1000)
  }

  timerfn = () => {
    const {timer} = this.state
    if (timer > 0) {
      this.setState(prevState => ({timer: prevState.timer - 1}))
    } else {
      clearInterval(this.timerId)
      this.setState({gameRunning: false})
    }
  }

  activateTabIdfn = tabId => {
    const {imagesList} = this.props
    this.setState({
      activateTabIdel: tabId,
      filteredImgList: imagesList.filter(ele => ele.category === tabId),
    })
  }

  resetfn = () => {
    this.setState({gameRunning: true, timer: 60, score: 0})
    this.createTimerfn()
  }

  render() {
    const {imagesList, tabsList} = this.props
    // console.log(this.state.activateTabIdel)
    const {score, fruit} = this.state
    const {timer, activateTabIdel, filteredImgList, gameRunning} = this.state
    const checkMatchfn = id => {
      if (fruit.id === id && timer > 0) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          fruit: imagesList[parseInt(Math.random() * imagesList.length)],
        }))

        console.log('match')
      } else {
        clearInterval(this.timerId)
        this.setState({gameRunning: false})
      }
    }

    return (
      <div className="gameContainerBox">
        <Header score={score} timer={timer} />
        {gameRunning ? (
          <GameItem
            tabsList={tabsList}
            imagesList={filteredImgList}
            activateTabIdfn={this.activateTabIdfn}
            activateTabIdel={activateTabIdel}
            fruit={fruit}
            checkMatchfn={checkMatchfn}
          />
        ) : (
          <ScoreCard score={score} resetfn={this.resetfn} />
        )}
      </div>
    )
  }
}
export default MatchGame
