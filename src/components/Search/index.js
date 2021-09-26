import {Component} from 'react'

import Cookies from 'js-cookie'

import {Link} from 'react-router-dom'

import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

import {BsSearch} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'

import {BiSearchAlt} from 'react-icons/bi'

import Loader from 'react-loader-spinner'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Search extends Component {
  state = {
    searchList: [],
    inputSearch: '',
    apiStatus: apiStatusConstants.initial,
    pageNumber: 1,
  }

  componentDidMount() {
    this.getSearchInput()
  }

  getSearchInput = async () => {
    // console.log(event.target.value)
    const {pageNumber, inputSearch} = this.state

    if (inputSearch === '') {
      this.setState({inputSearch: ''})
    }

    if (inputSearch !== '') {
      this.setState({apiStatus: apiStatusConstants.inProgress})
      const apiKey = Cookies.get('request_token')

      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputSearch}&page=${pageNumber}`

      const options = {
        method: 'GET',
      }

      const response = await fetch(url, options)

      const data = await response.json()
      const updatedSearchList = data.results.map(eachMovie => ({
        id: eachMovie.id,
        posterPath: eachMovie.poster_path,
        title: eachMovie.title,
      }))
      console.log(data)

      console.log(updatedSearchList)

      this.setState({
        searchList: updatedSearchList,
        inputSearch,
        apiStatus: apiStatusConstants.success,
      })
    }
    //  else {
    //   this.setState({noMovies: false})
    // }

    // history.replace(`/search/${event.target.value}`)
  }

  changeInput = event => {
    this.setState({inputSearch: event.target.value}, this.getSearchInput)
  }

  renderSearchList = () => {
    const {searchList, inputSearch, pageNumber} = this.state

    return searchList.length > 0 ? (
      <>
        <div className="page-count">
          <ul className="popular-movies-list">
            {searchList.map(eachMovie => (
              <Link to={`/movie/${eachMovie.id}`} key={eachMovie.id}>
                <li className="each-poster">
                  <img
                    alt={eachMovie.id}
                    src={`https://image.tmdb.org/t/p/original/${eachMovie.posterPath}`}
                    className="popular-poster"
                  />
                </li>
              </Link>
            ))}
          </ul>

          <div className="page-number-container">
            <AiOutlineLeft className="arrows" onClick={this.pageDecrease} />
            <p>{pageNumber} of 20</p>
            <AiOutlineRight className="arrows" onClick={this.pageIncrease} />
          </div>
        </div>
      </>
    ) : (
      <div className="no-results-container">
        <h1 className="no-results-heading-text">Opps! No Results Found</h1>
        <p className="no-results-text">
          Your search for {inputSearch} did not find any matches.
        </p>
      </div>
    )
  }

  pageDecrease = () => {
    const {pageNumber} = this.state

    if (pageNumber > 1) {
      //   this.setState(
      //     prevState => ({
      //       pageNumber: prevState.pageNumber - 1,
      //     }),
      //     this.changeInput,
      //   )
      this.setState({pageNumber: pageNumber - 1}, this.getSearchInput)
    }
  }

  pageIncrease = () => {
    const {pageNumber} = this.state

    if (pageNumber < 20) {
      //   this.setState(
      //     prevState => ({
      //       pageNumber: prevState.pageNumber + 1,
      //     }),
      //     this.changeInput,
      //   )
      this.setState({pageNumber: pageNumber + 1}, this.getSearchInput)
    }
  }

  clickHamBurger = () => {
    const enable = document.getElementById('hamBurger')

    if (enable.style.display === 'block') {
      enable.style.display = 'none'
    } else {
      enable.style.display = 'block'
    }
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="Oval" color="#D81F26" height="60" width="60" />
    </div>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSearchList()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {inputSearch} = this.state

    return (
      <div className="movie-search-container ">
        <nav className="search-movies-navbar">
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
            <Link className="nav-link" to="/">
              <li>Home</li>
            </Link>
            <Link className="nav-link" to="/popular">
              <li>Popular</li>
            </Link>
          </ul>
          <ul className="sides-navbar right-side">
            <li>
              <div className="search-container">
                <input
                  type="search"
                  className="input-element"
                  placeholder="Search"
                  onChange={this.changeInput}
                />
                <BsSearch className="search-icon" />
              </div>
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
          <div className="mobile-icons-search-container">
            <div className="search-container">
              <input
                type="search"
                className="input-element"
                placeholder="Search"
                onChange={this.changeInput}
              />
              <BsSearch className="search-icon" />
            </div>
            {/* <BsSearch className="search-icon" /> */}
            <GiHamburgerMenu
              className="search-icon"
              onClick={this.clickHamBurger}
            />
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
          {/* </div> */}
        </div>
        <div>
          {inputSearch === '' ? (
            <div className="initial-search-page">
              <h1 className="search-text">Search Movies</h1>
              <BiSearchAlt className="bi-search-alt" />
              <p className="initial-search-text">
                Start typing to search for Movies by using movie titles.
              </p>
            </div>
          ) : (
            this.renderApiStatus()
          )}
        </div>
      </div>
    )
  }
}

export default Search
