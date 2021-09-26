import {Component} from 'react'

import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Header from '../Header'

import Footer from '../Footer'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Popular extends Component {
  state = {
    pageNumber: 1,
    popularMoviesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    const {pageNumber} = this.state

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiKey = Cookies.get('request_token')

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`

    const response = await fetch(url)
    const data = await response.json()

    const updatedPopularMovies = data.results.map(eachMovie => ({
      id: eachMovie.id,
      posterPath: eachMovie.poster_path,
    }))

    this.setState({
      popularMoviesList: updatedPopularMovies,
      apiStatus: apiStatusConstants.success,
    })

    // console.log(updatedPopularMovies)
  }

  pageDecrease = () => {
    const {pageNumber} = this.state

    if (pageNumber > 1) {
      this.setState(
        prevState => ({
          pageNumber: prevState.pageNumber - 1,
        }),
        this.getPopularMovies,
      )
    }
  }

  pageIncrease = () => {
    const {pageNumber} = this.state

    if (pageNumber < 20) {
      this.setState(
        prevState => ({
          pageNumber: prevState.pageNumber + 1,
        }),
        this.getPopularMovies,
      )
    }
  }

  renderPopularMovies = () => {
    const {popularMoviesList} = this.state

    return (
      <ul className="popular-movies-list">
        {popularMoviesList.map(eachMovie => (
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
    )
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
        return this.renderPopularMovies()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {pageNumber} = this.state

    return (
      <>
        <div className="popular-page-background">
          <Header />
          {this.renderApiStatus()}
          <div className="page-number-container">
            <AiOutlineLeft className="arrows" onClick={this.pageDecrease} />
            <p>{pageNumber} of 20</p>
            <AiOutlineRight className="arrows" onClick={this.pageIncrease} />
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default Popular
