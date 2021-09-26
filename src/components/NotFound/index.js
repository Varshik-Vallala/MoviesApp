import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <div className="web-nav">
      <nav className="not-found-nav-bar ">
        <img
          className="not-found-movies-logo"
          src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1630941228/Group_7399_gvhjyc.png"
          alt="not found nav logo"
        />
      </nav>
    </div>
    <div className="mobile-nav search-mobile-nav">
      <Link to="/">
        <img
          className="mobile-logo-view"
          src="https://res.cloudinary.com/dtxgq5uxo/image/upload/v1630941228/Group_7399_gvhjyc.png"
          alt="logo"
        />
      </Link>
    </div>
    <div className="not-found-details">
      <h1 className="not-found-heading">Lost Your Way ?</h1>
      <p className="not-found-text">
        Sorry, we can’t find that page. You’ll find lots to explore on the home
        page
      </p>
      <Link to="/">
        <button className="not-found-button" type="button">
          Movies Home
        </button>
      </Link>
      <p className="error-text">Error Code NSES-404</p>
    </div>
  </div>
)

export default NotFound
