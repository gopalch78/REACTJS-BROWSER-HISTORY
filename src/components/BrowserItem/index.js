import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="history-container">
      <div className="history-detail-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="title-domain">
          <img src={logoUrl} className="logo-url" alt="domain logo" />
          <p className="title"> {title} </p>
          <p className="domain-url"> {domainUrl}</p>
        </div>
        <div>
          <button type="button" testid="delete" onClick={onDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default UserProfile
