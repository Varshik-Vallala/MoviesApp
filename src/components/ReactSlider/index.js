import {Link} from 'react-router-dom'

import Slider from 'react-slick'

import './index.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
}

const ReactSlider = props => {
  const {list} = props

  return (
    <Slider {...settings}>
      {list.map(movie => {
        const movieImage = `https://image.tmdb.org/t/p/original/${movie.posterPath}`
        return (
          <Link to={`movie/${movie.id}`} key={movie.id}>
            <div className="react-slick-item">
              <img
                alt={movie.id}
                className="poster"
                src={movieImage}
                width="100%"
                height="100%"
              />
            </div>
          </Link>
        )
      })}
    </Slider>
  )
}

export default ReactSlider
