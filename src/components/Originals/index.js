import {Component} from 'react'

import Cookies from 'js-cookie'

import ReactSlider from '../ReactSlider'

class Originals extends Component {
  state = {
    originalMovies: [],
  }

  componentDidMount() {
    this.getOriginalMovies()
  }

  getOriginalMovies = async () => {
    const apiKey = Cookies.get('request_token')

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)

    const data = await response.json()

    const updatedData = data.results.map(eachMovie => ({
      id: eachMovie.id,
      posterPath: eachMovie.poster_path,
    }))

    this.setState({originalMovies: updatedData})

    // console.log(updatedData)
  }

  render() {
    const {originalMovies} = this.state

    return (
      <div>
        <h3 className="trending-heading">Originals</h3>
        <div className="slick-app-container">
          <div className="slider-container">
            {originalMovies.length ? (
              <ReactSlider list={originalMovies} />
            ) : (
              <p style={{textAlign: 'center'}}>Loading...................</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Originals
