import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'

// import {VscAccount} from 'react-icons/vsc'

import {Link} from 'react-router-dom'

import NavLink from '../NavLink'

import './index.css'

const navLinks = [
  {
    id: 'home',
    name: 'Home',
    to: '/',
  },
  {
    id: 'popular',
    name: 'Popular',
    to: '/popular',
  },
  {
    id: 'tv',
    name: 'Tv Shows',
    to: '/tv',
  },
]

class Header extends Component {
  state = {activeLink: navLinks[0].id}

  //   componentDidMount() {
  //     this.render()
  //   }

  //   changeInput = event => {
  //     // const {history} = this.props

  //     console.log(event.target.value)
  //     this.setState({inputSearch: event.target.value})

  //     // history.replace(`/search/${event.target.value}`)
  //   }

  //   clickNav = id => {
  //     console.log(id)
  //   }

  clickNavLink = id => {
    console.log(id)
    const {activeLink} = this.state
    console.log(activeLink)
    this.setState({activeLink: id})
    // this.setState({activeLink: id})
  }

  render() {
    const {activeLink} = this.state

    // console.log(activeLink)

    const clickHamBurger = () => {
      const enable = document.getElementById('hamBurger')

      if (enable.style.display === 'block') {
        enable.style.display = 'none'
      } else {
        enable.style.display = 'block'
      }
    }

    return (
      <>
        <div className="web-nav">
          <nav className="movies-navbar">
            <ul className="sides-navbar left-side">
              <li>
                <Link to="/">
                  <img
                    className="header-movies-logo"
                    src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1630941228/Group_7399_gvhjyc.png"
                    alt="logo"
                  />
                </Link>
              </li>

              {navLinks.map(eachLink => (
                <NavLink
                  key={eachLink.id}
                  eachLink={eachLink}
                  clickNavLink={this.clickNavLink}
                  isActive={eachLink.id === activeLink}
                />
              ))}
              {/* <Link className="nav-link" to="/" onClick={this.clickHomePage}>
                <li>Home</li>
              </Link>
              <Link className="nav-link" to="/popular">
                <li>Popular</li>
              </Link>
              <li className="nav-link">Tv Shows</li> */}
            </ul>
            <ul className="sides-navbar right-side">
              <li>
                <Link to="/search">
                  <BsSearch className="search-icon" />
                </Link>
              </li>
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
        <div className="mobile-nav">
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
          <div className="mobile-icons-container">
            <Link to="/search">
              <BsSearch className="search-icon" />
            </Link>
            {/* <BsSearch className="search-icon" /> */}
            <GiHamburgerMenu
              className="ham-burger-icon search-icon"
              onClick={clickHamBurger}
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
          <Link className="ham-link" to="/not-found">
            <p className="ham-menu-options">Profiles</p>
          </Link>
        </div>
      </>
    )
  }
}

export default Header
