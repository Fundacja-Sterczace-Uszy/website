import { string, oneOf, func, bool } from "prop-types"

import Icon, { icons } from "design-system/components/icon"

import * as Styled from "./Button.styled"

const Button = ({
  href,
  text,
  iconStart,
  iconEnd,
  variant,
  color,
  size,
  active,
  target,
  onClick,
}) => (
  <Styled.Component
    as={href ? `a` : `button`}
    variant={variant}
    color={color}
    size={size}
    href={href}
    target={href && target}
    onClick={onClick}
  >
    {iconStart && (
      <Styled.Icon size={size}>
        <Icon name={iconStart} size={size} />
      </Styled.Icon>
    )}
    <Styled.Text variant={variant} color={color} active={active}>
      {text}
    </Styled.Text>

    {iconEnd && (
      <Styled.Icon size={size}>
        <Icon name={iconEnd} size={size} />
      </Styled.Icon>
    )}
  </Styled.Component>
)

Button.propTypes = {
  text: string.isRequired,
  href: string,
  iconStart: oneOf(Object.keys(icons)),
  iconEnd: oneOf(Object.keys(icons)),
  variant: oneOf(["fill", "border", "text", "textLine"]),
  color: oneOf(["primary", "black"]),
  size: oneOf(["small", "medium", "large"]),
  active: bool,
  target: string,
  onClick: func,
}

Button.defaultProps = {
  href: null,
  iconStart: null,
  iconEnd: null,
  variant: "fill",
  color: "primary",
  size: "medium",
  active: null,
  target: null,
  onClick: null,
}

export default Button
