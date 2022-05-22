// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import {PlanetSliderContainer} from './styledComponents'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <PlanetSliderContainer testid="planets">
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetItem={eachItem} />
        ))}
      </Slider>
    </PlanetSliderContainer>
  )
}

export default PlanetSlider
