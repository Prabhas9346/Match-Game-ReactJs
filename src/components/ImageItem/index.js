import './index.css'

const ImageItem = props => {
  const {imageEls, checkMatchfn} = props
  const {id, thumbnailUrl} = imageEls
  const checkMatch = () => {
    checkMatchfn(id)
  }
  return (
    <li>
      <button onClick={checkMatch} className="ImgBtn" type="button">
        <img className="thumbnailImg" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItem
