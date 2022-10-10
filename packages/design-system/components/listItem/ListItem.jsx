import React from "react"
import { string, oneOf, func, oneOfType, node, array } from "prop-types"

import * as Styled from "./ListItem.styled"

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const ListItem = ({ children, variant }) => (
  <Styled.ListItem variant={variant}>
    {/* {icon && <Styled.ListItemIcon>{HeartIcon}</Styled.ListItemIcon>} */}
    {children}
  </Styled.ListItem>
)

ListItem.propTypes = {
  children: oneOfType([node, array]),
  variant: oneOf(["primary", "gray"]),
  // icon: node,
}
ListItem.defaultProps = {
  children: "lorem ipsum dolor",
  variant: "primary",
  // icon: { HeartIcon },
}

export default ListItem