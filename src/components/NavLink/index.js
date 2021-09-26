import {Link} from 'react-router-dom'

import './index.css'

const NavLink = props => {
  const {isActive, eachLink, clickNavLink} = props

  const active = isActive ? 'nav-link link-active' : 'nav-link'

  const onClickNav = () => {
    clickNavLink(eachLink.id)
  }

  return (
    <Link className={active} to={eachLink.to} onClick={onClickNav}>
      <li>{eachLink.name}</li>
    </Link>
  )
}

export default NavLink
