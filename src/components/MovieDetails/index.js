// import {Component} from 'react'

// import {BsPlayFill} from 'react-icons/bs'

// import Loader from 'react-loader-spinner'

// import Cookies from 'js-cookie'
// import Header from '../Header'
// import SimilarMovies from '../SimilarMovies'

// import './index.css'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

// class MovieDetails extends Component {
//   state = {
//     movieDetails: {},
//     apiStatus: apiStatusConstants.initial,
//   }

//   componentDidMount() {
//     this.getMovieDetails()
//   }

//   getMovieDetails = async () => {
//     const {match} = this.props
//     const {params} = match
//     const {id} = params

//     this.setState({apiStatus: apiStatusConstants.inProgress})

//     const apiKey = Cookies.get('request_token')
//     const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

//     const options = {
//       method: 'GET',
//     }

//     const response = await fetch(url, options)
//     const data = await response.json()
//     const updatedMovieDetails = {
//       adult: data.adult,
//       backdropPath: data.backdrop_path,
//       budget: data.budget,
//       genres: data.genres,
//       homePage: data.homepage,
//       id: data.id,
//       originalTitle: data.original_title,
//       overview: data.overview,
//       releaseDate: data.release_date,
//       runtime: data.runtime,
//       spokenLanguages: data.spoken_languages,
//       voteAverage: data.vote_average,
//       voteCount: data.vote_count,
//     }

//     this.setState({
//       movieDetails: updatedMovieDetails,
//       apiStatus: apiStatusConstants.success,
//     })
//     console.log(data)
//     // console.log(updatedMovieDetails.genres)
//   }

//   //   getSimilarMovies = () => {
//   //     const url =
//   //       'https://api.themoviedb.org/3/movie/{MOVIE_ID}/similar?api_key={API_KEY}&language=en-US&page={1}'
//   //   }

//   renderLoader = () => (
//     <div className="movies-list-loader">
//       <Loader type="Oval" color="#D81F26" height="60" width="60" />
//     </div>
//   )

//   timeConvert = () => {
//     const {movieDetails} = this.state
//     const {runtime} = movieDetails

//     const hours = Number(runtime) / 60
//     const min = Number(runtime) % 60
//     return `${Math.floor(hours)}hrs ${min}mins`
//   }

//   renderMovieList = () => {
//     const {movieDetails} = this.state

//     const {
//       adult,
//       backdropPath,
//       budget,
//       genres,
//       homePage,
//       id,
//       originalTitle,
//       overview,
//       releaseDate,
//       runtime,
//       spokenLanguages,
//       voteAverage,
//       voteCount,
//     } = movieDetails

//     const year = releaseDate !== undefined ? releaseDate.split('-')[0] : null

//     return (
//       <>
//         <div
//           className="original-image"
//           style={{
//             backgroundImage: `url(
//           https://image.tmdb.org/t/p/original${backdropPath}
//         )`,
//           }}
//         >
//           <div>
//             <Header />
//             <p className="movie-name">{originalTitle}</p>
//             <div className="details">
//               <p className="mobile-margin">{`${Math.floor(
//                 Number(runtime) / 60,
//               )}hr ${Number(runtime) % 60}min`}</p>
//               {adult ? (
//                 <p className="certification mobile-margin">U</p>
//               ) : (
//                 <p className="certification mobile-margin">UA</p>
//               )}
//               <p className="mobile-margin">{year}</p>
//             </div>
//             <p className="overview-text">{overview}</p>
//             <a
//               className="movies-list-play-btn"
//               href={homePage}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="movies-list-container">
//                 <BsPlayFill />
//                 <button className="play" type="button">
//                   Play
//                 </button>
//               </div>
//             </a>
//           </div>
//           <div className="empty-container">
//             <p> </p>
//           </div>
//         </div>
//         <div className="complete-movie-details">
//           <div className="movie-details-container">
//             <div className="mobile-view-description">
//               <p className="details-heading">Description</p>
//               <p className="list-item">{overview}</p>
//             </div>
//             <div className="sub-containers">
//               <p className="details-heading">Genres</p>
//               <ul className="sub-details-container">
//                 {genres !== undefined
//                   ? genres.map(eachGenre => (
//                       <li className="list-item" key={eachGenre.id}>
//                         {eachGenre.name}
//                       </li>
//                     ))
//                   : null}
//               </ul>
//             </div>
//             <div className="sub-containers">
//               <p className="details-heading">Audio Languages</p>
//               <ul className="sub-details-container">
//                 {genres !== undefined
//                   ? spokenLanguages.map(eachAudio => (
//                       <li className="list-item" key={eachAudio.name}>
//                         {eachAudio.name}
//                       </li>
//                     ))
//                   : null}
//               </ul>
//             </div>
//             <div className="sub-containers">
//               <p className="details-heading">Rating Count</p>
//               <p className="sub-item">{voteCount}</p>
//               <p className="details-heading">Rating Average</p>
//               <p className="sub-item">{voteAverage}</p>
//             </div>
//             <div className="sub-containers">
//               <p className="details-heading">Budget</p>
//               <p className="sub-item">
//                 {budget > 0 ? `${budget}cr` : 'Not disclosed'}
//               </p>
//               <p className="details-heading">Release Date</p>
//               <p className="sub-item">{releaseDate}</p>
//             </div>
//           </div>
//           {/* {id !== undefined ? <SimilarMovies movieId={id} /> : null} */}
//           <SimilarMovies movieId={id} />
//         </div>
//       </>
//     )
//   }

//   renderApiStatus = () => {
//     const {apiStatus} = this.state

//     switch (apiStatus) {
//       case apiStatusConstants.success:
//         return this.renderMovieList()
//       case apiStatusConstants.inProgress:
//         return this.renderLoader()
//       default:
//         return null
//     }
//   }

//   render() {
//     return this.renderApiStatus()
//   }
// }

// export default MovieDetails

import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {BsPlayFill} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SimilarMovies from '../SimilarMovies'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({})
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const {id} = useParams()

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setApiStatus(apiStatusConstants.inProgress)

      const apiKey = Cookies.get('request_token')
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`

      const response = await fetch(url)
      const data = await response.json()

      const updatedMovieDetails = {
        adult: data.adult,
        backdropPath: data.backdrop_path,
        budget: data.budget,
        genres: data.genres,
        homePage: data.homepage,
        id: data.id,
        originalTitle: data.original_title,
        overview: data.overview,
        releaseDate: data.release_date,
        runtime: data.runtime,
        spokenLanguages: data.spoken_languages,
        voteAverage: data.vote_average,
        voteCount: data.vote_count,
      }

      setMovieDetails(updatedMovieDetails)
      setApiStatus(apiStatusConstants.success)
    }

    fetchMovieDetails()
  }, [id])

  const renderLoader = () => (
    <div className="movies-list-loader">
      <Loader type="Oval" color="#D81F26" height="60" width="60" />
    </div>
  )

  const renderMovieList = () => {
    const {
      adult,
      backdropPath,
      budget,
      genres = [],
      homePage,
      originalTitle,
      overview,
      releaseDate,
      runtime,
      spokenLanguages = [],
      voteAverage,
      voteCount,
    } = movieDetails

    const year = releaseDate?.split('-')[0]
    const hours = Math.floor(Number(runtime) / 60)
    const minutes = Number(runtime) % 60

    return (
      <>
        <div
          className="original-image"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdropPath})`,
          }}
        >
          <div>
            <Header />
            <p className="movie-name">{originalTitle}</p>
            <div className="details">
              <p className="mobile-margin">{`${hours}hr ${minutes}min`}</p>
              <p className="certification mobile-margin">
                {adult ? 'U' : 'UA'}
              </p>
              <p className="mobile-margin">{year}</p>
            </div>
            <p className="overview-text">{overview}</p>
            <a
              className="movies-list-play-btn"
              href={homePage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="movies-list-container">
                <BsPlayFill />
                <button className="play" type="button">
                  Play
                </button>
              </div>
            </a>
          </div>
          <div className="empty-container">
            <p> </p>
          </div>
        </div>

        <div className="complete-movie-details">
          <div className="movie-details-container">
            <div className="mobile-view-description">
              <p className="details-heading">Description</p>
              <p className="list-item">{overview}</p>
            </div>
            <div className="sub-containers">
              <p className="details-heading">Genres</p>
              <ul className="sub-details-container">
                {genres.map(genre => (
                  <li className="list-item" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sub-containers">
              <p className="details-heading">Audio Languages</p>
              <ul className="sub-details-container">
                {spokenLanguages.map(lang => (
                  <li className="list-item" key={lang.name}>
                    {lang.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sub-containers">
              <p className="details-heading">Rating Count</p>
              <p className="sub-item">{voteCount}</p>
              <p className="details-heading">Rating Average</p>
              <p className="sub-item">{voteAverage}</p>
            </div>
            <div className="sub-containers">
              <p className="details-heading">Budget</p>
              <p className="sub-item">
                {budget > 0 ? `${budget}cr` : 'Not disclosed'}
              </p>
              <p className="details-heading">Release Date</p>
              <p className="sub-item">{releaseDate}</p>
            </div>
          </div>

          <SimilarMovies movieId={id} />
        </div>
      </>
    )
  }

  switch (apiStatus) {
    case apiStatusConstants.inProgress:
      return renderLoader()
    case apiStatusConstants.success:
      return renderMovieList()
    default:
      return null
  }
}

export default MovieDetails
