import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

// import {BsSearch} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'

import Cookies from 'js-cookie'

import './index.css'

class Account extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('request_token')
    history.replace('/login')
  }

  clickHamBurger = () => {
    const enable = document.getElementById('hamBurger')

    if (enable.style.display === 'block') {
      enable.style.display = 'none'
    } else {
      enable.style.display = 'block'
    }
  }

  render() {
    return (
      <>
        <div className="web-nav">
          <nav className="movies-navbar account-nav-bar">
            <ul className="sides-navbar left-side">
              <li>
                <img
                  className="header-movies-logo"
                  src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1630941228/Group_7399_gvhjyc.png"
                  alt="logo"
                />
              </li>
              <Link className="nav-link" to="/">
                <li>Home</li>
              </Link>
              <Link className="nav-link" to="/popular">
                <li>Popular</li>
              </Link>
            </ul>
            <ul className="sides-navbar right-side">
              <li>
                <Link to="/account">
                  <img
                    src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1630982240/149071_evz1bo.png"
                    alt="profile logo"
                    className="account-logo"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mobile-nav search-mobile-nav">
          {/* <div className="mobile-nav-bar"> */}
          <div>
            <Link to="/">
              <img
                className="mobile-logo-view"
                src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1630941228/Group_7399_gvhjyc.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="">
            {/* <Link to="/search">
              <BsSearch className="search-icon" />
            </Link> */}
            {/* <BsSearch className="search-icon" /> */}
            <GiHamburgerMenu
              className="ham-burger-icon search-icon"
              onClick={this.clickHamBurger}
            />
          </div>
        </div>
        <div className="ham-burger-menu" id="hamBurger">
          <Link className="ham-link" to="/popular">
            <p className="ham-menu-options">Popular</p>
          </Link>
          <Link className="ham-link" to="/account">
            <p className="ham-menu-options">Account</p>
          </Link>
          <p className="ham-menu-options">Profiles</p>
        </div>
        <div className="account-details-container">
          <h1 className="acc-heading">Account</h1>
          <div className="acc-sub-details">
            <p className="acc-sub-heading">Membership</p>
            <div>
              <p className="username">bunny59</p>
              <p className="username">Password: **********</p>
              <Link to="/profiles">
                <button type="button">Profiles</button>
              </Link>
            </div>
          </div>
          <div className="acc-sub-details">
            <p className="acc-sub-heading">Plan details</p>
            <div className="plan-details">
              <p className="username">Premium</p>
              <p className="quality">Ultra HD</p>
            </div>
          </div>
          <button
            className="logout-btn"
            type="button"
            onClick={this.onClickLogout}
          >
            Logout
          </button>
        </div>
      </>
    )
  }
}

export default withRouter(Account)
