import { node, oneOf } from "prop-types"
import * as Styled from "./Container.styled"

const Container = ({ size, children, as }) => (
  <Styled.Container size={size} as={as}>
    {children}
  </Styled.Container>
)

Container.propTypes = {
  size: oneOf(["small", "medium", "large"]),
  children: node.isRequired,
  as: oneOf(["section", "article", "div"]),
}

Container.defaultProps = {
  size: "large",
  as: "div",
}

export default Container
