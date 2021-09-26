import {Component} from 'react'

import {Link} from 'react-router-dom'

import {BsPlayFill} from 'react-icons/bs'

import {AiOutlineInfoCircle} from 'react-icons/ai'

import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

class RandomOriginals extends Component {
  state = {randomOriginalData: {}}

  componentDidMount() {
    this.getOriginalsData()
    // this.renderRandomOriginalMovie()
  }

  getOriginalsData = async () => {
    const apiKey = Cookies.get('request_token')

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`

    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const resultsArr = data.results

    const random = Math.floor(Math.random() * resultsArr.length)

    const updatedOriginalObj = {
      backdropPath: resultsArr[random].backdrop_path,
      id: resultsArr[random].id,
      originalTitle: resultsArr[random].original_title,
      name: resultsArr[random].name,
      overview: resultsArr[random].overview,
    }

    this.setState({randomOriginalData: updatedOriginalObj})

    console.log(resultsArr)
  }

  render() {
    const {randomOriginalData} = this.state

    const {backdropPath, id, originalTitle, overview} = randomOriginalData

    return (
      <div
        className="original-image"
        style={{
          backgroundImage: `url(
          https://image.tmdb.org/t/p/original${
            backdropPath !== undefined ? backdropPath : ''
          }
        )`,
        }}
      >
        <Header />
        <div>
          <p className="movie-name">{originalTitle}</p>
          <p className="overview-text">{overview}</p>
          <div className="buttons-container">
            <div className="play-btn">
              <BsPlayFill />
              <button className="play" type="button">
                Play
              </button>
            </div>
            <Link className="info-link" to={`movie/${id}`}>
              <div className="more-info-btn">
                <AiOutlineInfoCircle className="info-icon" />
                <button className="info" type="button">
                  More Info
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div className="empty-container">
          <p> </p>
        </div>
      </div>
    )
  }
}

export default RandomOriginals

// class RandomOriginals extends Component {
//   componentDidMount() {
//     this.getOriginalImage()
//   }

//   getOriginalImage = async () => {
//     const {originalData} = this.props
//     const {backdropPath} = originalData
//     console.log(backdropPath)

//     // const backdropUrl = `https://image.tmdb.org/t/p/original${backdropPath}`

//     // const options = {
//     //   method: 'GET',
//     // }
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         {/* {this.getOriginalImage()} */}
//       </>
//     )
//   }
// }

// export default RandomOriginals

// // class RandomOriginals extends Component {
// //   state = {
// //     originalsData: [],
// //   }

// //   componentDidMount() {
// //     this.getOriginalsData()
// //   }

// //   getOriginalsData = async () => {
// //     const url =
// //       'https://api.themoviedb.org/3/discover/tv?api_key=970d698cc21f18d0759bec348ed6e217'

// //     const options = {
// //       method: 'GET',
// //     }

// //     const response = await fetch(url, options)
// //     if (response.ok) {
// //       const data = await response.json()
// //       const updatedOriginalData = data.results.map(eachOriginal => ({
// //         backdropPath: eachOriginal.backdrop_path,
// //         id: eachOriginal.id,
// //         name: eachOriginal.name,
// //         overview: eachOriginal.overview,
// //       }))
// //       this.setState({originalsData: updatedOriginalData})
// //       const {originalsData} = this.state

// //       console.log(originalsData)
// //     }

// //     const {originalsData} = this.state

// //     const randomOriginal =
// //       originalsData[Math.floor(Math.random() * originalsData.length)]

// //     const {backdropPath, name, overview} = randomOriginal

// //     console.log(backdropPath)

// //     return <div>{name}</div>
// //   }

// //   renderRandomOriginalMovie = () => {
// //     const {originalsData} = this.state

// //     const randomOriginal =
// //       originalsData[Math.floor(Math.random() * originalsData.length)]

// //     const {backdropPath, name, overview} = randomOriginal

// //     return <div>{name}</div>
// //   }

// //   render() {
// //     const {originalsData} = this.state
// //     // const {name} = originalsData

// //     // console.log(originalsData)

// //     return (
// //       <>
// //         <Header />
// //         {/* {this.renderRandomOriginalMovie()} */}
// //       </>
// //     )
// //   }
// // }
