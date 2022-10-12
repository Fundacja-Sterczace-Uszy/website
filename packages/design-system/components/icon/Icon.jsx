import { string, oneOf } from "prop-types"

import Heart from "../../icons/Heart.svg"
import Marker from "../../icons/Marker.svg"
import Done from "../../icons/Done.svg"

const sizes = {
  small: 16,
  medium: 24,
  large: 30,
}

const icons = {
  heart: Heart,
  marker: Marker,
  done: Done,
}

const Icon = ({ name, color, size }) => {
  const IconComponent = icons[name]

  return (
    <IconComponent color={color} width={sizes[size]} height={sizes[size]} />
  )
}

Icon.propTypes = {
  name: oneOf(Object.keys(icons)).isRequired,
  color: string,
  size: oneOf(["small", "medium", "large"]),
}

Icon.defaultProps = {
  color: "primary",
  size: "medium",
}

export default Icon
