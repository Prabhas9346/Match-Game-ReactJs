import './index.css'

const TabItem = props => {
  const {tabs, activateTabIdfn, activateTabIdel} = props
  const {tabId, displayText} = tabs
  const activateTab = () => {
    activateTabIdfn(tabId)
  }
  const btnClass =
    activateTabIdel === tabId ? 'tabsBtn activeTabBtn' : 'tabsBtn'
  return (
    <li className="tabsList">
      <button className={btnClass} type="button" onClick={activateTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
