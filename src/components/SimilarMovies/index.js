import {Component} from 'react'

import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class SimilarMovies extends Component {
  state = {
    similarListData: [],
  }

  componentDidMount() {
    this.getSimilarMovies()
  }

  getSimilarMovies = async () => {
    const {movieId} = this.props

    const apiKey = Cookies.get('request_token')

    const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}&language=en-US&page=1`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const updatedData = data.results.map(eachSimilarMovie => ({
      id: eachSimilarMovie.id,
      posterPath: eachSimilarMovie.poster_path,
      title: eachSimilarMovie.title,
    }))
    // console.log(data)

    // console.log(updatedData)

    this.setState({similarListData: updatedData})
  }

  render() {
    const {similarListData} = this.state
    return (
      <div className="similar-movies-container">
        <p className="similar-movies-heading">More like this</p>
        <ul className="similar-movies-list">
          {similarListData.map(eachPoster => (
            <Link to={`movie/${eachPoster.id}`} key={eachPoster.id}>
              <li className="each-poster">
                <img
                  className="similar-poster"
                  alt={eachPoster.title}
                  src={`https://image.tmdb.org/t/p/original/${eachPoster.posterPath}`}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}

export default SimilarMovies
