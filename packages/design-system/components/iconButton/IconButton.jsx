import { string, oneOf, func } from "prop-types"

import Icon, { icons } from "design-system/components/icon"
import theme from "design-system/theme"

import * as Styled from "./IconButton.styled"

const IconButton = ({ href, name, color, size, onClick, ariaLabel }) => (
  <Styled.IconButton
    as={href ? `a` : `button`}
    href={href}
    onClick={onClick}
    ariaLabel={ariaLabel}
  >
    <Icon name={name} size={size} color={color} />
  </Styled.IconButton>
)

IconButton.propTypes = {
  href: string,
  name: oneOf(Object.keys(icons)).isRequired,
  color: string,
  size: oneOf(["small", "medium", "large", "xlarge", "xxlarge"]),
  onClick: func,
  ariaLabel: string.isRequired,
}

IconButton.defaultProps = {
  href: null,
  color: theme.colors.primary[500],
  size: "medium",
  onClick: null,
}

export default IconButton
