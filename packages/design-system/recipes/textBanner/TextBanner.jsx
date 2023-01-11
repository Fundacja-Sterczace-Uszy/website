import { string, oneOf, node } from "prop-types"

import Typography from "design-system/components/typography"
import theme from "design-system/theme"

import * as Styled from "./TextBanner.styled"

const sizes = {
  tiny: {
    subtitle: "h6",
    heading: "h3",
    description: "bodySmall",
    button: "text",
    buttonSize: "medium",
  },
  small: {
    subtitle: "h6",
    heading: "h2",
    description: "bodyTitle",
    button: "fill",
    buttonSize: "large",
  },
  medium: {
    subtitle: "h6",
    heading: "h1",
    description: "bodySmall",
    button: "fill",
    buttonSize: "large",
  },
  large: {
    subtitle: "h6",
    heading: "h1",
    description: "bodyTitle",
    button: "fill",
    buttonSize: "large",
  },
}

const TextBanner = ({
  heading,
  description,
  subtitle,
  layout,
  size,
  button,
  subtitleColor,
  headingColor,
  descriptionColor,
}) => (
  <Styled.TextBanner layout={layout} size={size}>
    <Styled.Subtitle variant={sizes[size].subtitle} color={subtitleColor}>
      {subtitle}
    </Styled.Subtitle>
    <Styled.Container size={size}>
      <Typography variant={sizes[size].heading} color={headingColor}>
        {heading}
      </Typography>
    </Styled.Container>
    <Typography variant={sizes[size].description} color={descriptionColor}>
      {description}
    </Typography>
    <Styled.ButtonContainer>{button && button}</Styled.ButtonContainer>
  </Styled.TextBanner>
)

TextBanner.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  subtitle: string,
  layout: oneOf(["left", "center"]),
  size: oneOf(["tiny", "small", "medium", "large"]),
  button: node,
  subtitleColor: string,
  headingColor: string,
  descriptionColor: string,
}

TextBanner.defaultProps = {
  subtitle: "",
  layout: "left",
  size: "medium",
  button: null,
  subtitleColor: theme.colors.primary[500],
  headingColor: theme.colors.grey[600],
  descriptionColor: theme.colors.grey[500],
}

export default TextBanner
