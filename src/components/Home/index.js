import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

import TrendingMovies from '../TrendingMovies'
import TopRated from '../TopRated'
import Footer from '../Footer'
import Originals from '../Originals'
import RandomOriginals from '../RandomOriginals'

const Home = () => {
  const jwtToken = Cookies.get('request_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <RandomOriginals />
      <div className="all-category-movies">
        <TrendingMovies />
        <TopRated />
        <Originals />
        <Footer />
      </div>
    </>
  )
}

export default Home
