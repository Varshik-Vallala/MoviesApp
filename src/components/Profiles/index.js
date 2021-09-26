import {Link} from 'react-router-dom'

import './index.css'

const profilesList = [
  {
    id: 1,
    name: 'Bunny',
    profileImage:
      'https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071416/Group_7496_yyiazz.jpg',
  },
  {
    id: 2,
    name: 'Sunny',
    profileImage:
      'https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071988/Group_7497_kunnoz.png',
  },
  {
    id: 3,
    name: 'Varshik',
    profileImage:
      'https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071988/Group_7498_dhckqd.png',
  },
  {
    id: 4,
    name: 'Varesh',
    profileImage:
      'https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071988/Group_7499_efdpm2.png',
  },
  {
    id: 5,
    name: 'Children',
    profileImage:
      'https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071988/Group_7494_ouq9f0.png',
  },
]

const Profiles = props => {
  const {history} = props

  const clickProfile = () => {
    history.replace('/')
  }

  return (
    <div className="profiles-page">
      <nav className="profiles-nav-bar">
        <Link to="/">
          <img
            className="header-movies-logo profile-page-logo"
            src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1630941228/Group_7399_gvhjyc.png"
            alt="logo"
          />
        </Link>
      </nav>
      <div className="profile-details-container">
        <h1 className="profile-heading">Whos watching ?</h1>
        <ul className="profiles-container">
          {profilesList.map(eachProfile => (
            <li className="profile" key={eachProfile.id} onClick={clickProfile}>
              <span>
                <img
                  className="profile-image multi-hov"
                  src={eachProfile.profileImage}
                  alt={eachProfile.name}
                />
              </span>
              <span>
                <p className="name multi-hov">{eachProfile.name}</p>
              </span>
            </li>
          ))}
          {/* <li>
          <img
            src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071416/Group_7496_yyiazz.jpg"
            alt="profile"
            className="profile-image"
          />
          <p className="name">Bunny</p>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071988/Group_7497_kunnoz.png"
            alt="profile"
            className="profile-image"
          />
          <p>Bunny</p>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071988/Group_7498_dhckqd.png"
            alt="profile"
            className="profile-image"
          />
          <p>Bunny</p>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071988/Group_7499_efdpm2.png"
            alt="profile"
            className="profile-image"
          />
          <p>Bunny</p>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1632071988/Group_7494_ouq9f0.png"
            alt="profile"
            className="profile-image"
          />
          <p>Bunny</p>
        </li> */}
        </ul>
        <button className="manage-profiles-btn" type="button">
          Manage Profiles
        </button>
      </div>
    </div>
  )
}

export default Profiles
