import './index.css'

const ListItems = props => {
  const {eachitem, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachitem
  const removeItem = () => {
    deleteItem(id)
  }
  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="history-item-con">
        <img src={logoUrl} className="history-list-icon" alt="domain logo" />
        <div className="list-item-left-container">
          <div className="list-item-text">
            <p className="history-item-heading">{title}</p>
            <p className="history-item-domain">{domainUrl}</p>
          </div>
          <button
            className="delete-button"
            data-testid="delete"
            onClick={removeItem}
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-icon"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default ListItems
