import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

import ReactSlider from '../ReactSlider'

class TrendingMovies extends Component {
  state = {
    moviesList: [],
  }

  componentDidMount() {
    this.getMovies()
  }

  getMovies = async () => {
    const apiKey = Cookies.get('request_token')

    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)

    const data = await response.json()

    const updatedTrendingMovies = data.results.map(eachMovie => ({
      posterPath: eachMovie.poster_path,
      id: eachMovie.id,
    }))

    this.setState({moviesList: updatedTrendingMovies})

    // console.log(data)
  }

  render() {
    const {moviesList} = this.state

    // console.log(moviesList)

    return (
      <div>
        <h3 className="trending-heading">Trending Now</h3>
        <div className="slick-app-container">
          <div className="slider-container">
            {moviesList.length ? (
              <ReactSlider list={moviesList} />
            ) : (
              <p style={{textAlign: 'center'}}>Loading...................</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default TrendingMovies
