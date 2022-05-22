// Write your code here
import {
  PlanetItemContainer,
  PlanetImage,
  PlanetName,
  PlanetDescription,
  PlanetHeading,
} from './styledComponents'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem

  return (
    <PlanetItemContainer>
      <PlanetHeading>PLANETS</PlanetHeading>
      <PlanetImage src={imageUrl} alt={`planet ${name}`} />
      <PlanetName>{name}</PlanetName>
      <PlanetDescription>{description}</PlanetDescription>
    </PlanetItemContainer>
  )
}

export default PlanetItem
