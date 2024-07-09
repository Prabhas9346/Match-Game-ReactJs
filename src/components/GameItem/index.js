import './index.css'
import TabItem from '../TabItem'
import ImageItem from '../ImageItem'

const GameItem = props => {
  const {
    tabsList,
    imagesList,
    activateTabIdfn,
    activateTabIdel,
    fruit,
    checkMatchfn,
  } = props

  const {imageUrl} = fruit
  return (
    <div className="gameBox">
      <img className="mainImg" src={imageUrl} alt="match" />
      <div>
        <ul className="thumbnailImgBox">
          {tabsList.map(ele => (
            <TabItem
              key={ele.tabId}
              activateTabIdfn={activateTabIdfn}
              tabs={ele}
              activateTabIdel={activateTabIdel}
            />
          ))}
        </ul>
        <ul className="thumbnailImgBox">
          {imagesList.map(ele => (
            <ImageItem
              key={ele.id}
              imageEls={ele}
              checkMatchfn={checkMatchfn}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default GameItem
