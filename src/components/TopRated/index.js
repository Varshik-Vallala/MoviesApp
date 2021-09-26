import {Component} from 'react'

import Cookies from 'js-cookie'

import ReactSlider from '../ReactSlider'

import './index.css'

class TopRated extends Component {
  state = {
    topRatedMovies: [],
  }

  componentDidMount() {
    this.getTopRatedMovies()
  }

  getTopRatedMovies = async () => {
    const apiKey = Cookies.get('request_token')

    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)

    const data = await response.json()

    const updatedData = data.results.map(eachMovie => ({
      id: eachMovie.id,
      posterPath: eachMovie.poster_path,
    }))

    this.setState({topRatedMovies: updatedData})

    // console.log(updatedData)
  }

  render() {
    const {topRatedMovies} = this.state

    return (
      <div>
        <h3 className="trending-heading">Top Rated</h3>
        <div className="slick-app-container">
          {/*  style={{width: '92%'}} */}
          <div className="slider-container">
            {topRatedMovies.length ? (
              <ReactSlider list={topRatedMovies} />
            ) : (
              <p style={{textAlign: 'center'}}>Loading...................</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default TopRated
