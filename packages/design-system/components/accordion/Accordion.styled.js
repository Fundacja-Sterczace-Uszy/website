import styled from "@emotion/styled"

export const Accordion = styled.div`
  display: flex;
  text-decoration: none;
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  border-radius: 10px;
  width: 50%;
  height: 50%;
 `
export const Title = styled.div`
  display: block;
  float: right;
  text-decoration: none;
  width: 80%;
  height: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ color, theme }) => {
    switch (color ) {
      case "neutrals":
        return theme.colors.grey[600]
      case "neutrals":
        return theme.colors.grey[600]
      case "primary":
        return theme.colors.neutrals[100]
      case "white":
        return theme.colors.neutrals[100]
      case "white with Button":
          return theme.colors.neutrals[100]
      case "white with Links":
            return theme.colors.neutrals[100]
      default:
        return theme.colors.grey[600]
    }
  }};
  color: ${({ color, theme }) => {
    switch (color ) {
      case "grey":
        return theme.colors.neutrals[100]
      case "neutrals":
        return theme.colors.primary[500]
      case "primary":
        return theme.colors.grey[600]
      case "white with Links":
        return theme.colors.grey[600]
      case "white with Button":
          return theme.colors.primary[500]
      default:
        return theme.colors.grey[600]
    }
  }};
`

export const Content = styled.div`
  border-radius: 0px 0px 10px 10px;
  text-decoration: none;
  width: 80%;
  height: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 2px 2px 9px 0px rgba(0, 0, 0, 0.1);
  background-color: ${({ color, activeColor, theme }) => {
    switch (color, activeColor ) {
      case "grey":
        return theme.colors.grey[600]
      case "neutrals":
        return theme.colors.grey[600]
      case "primary":
        return theme.colors.neutrals[100]
      case "white":
        return theme.colors.neutrals[100]
      case "white with Button":
          return theme.colors.neutrals[100]
      default:
        return theme.colors.grey[600]
    }
  }};
  color: ${({ color,  theme }) => {
    switch (color ) {
      case "grey":
        return theme.colors.neutrals[100]
      case "neutrals":
        return theme.colors.neutrals[100]
      case "primary":
        return theme.colors.grey[600]
        case "white":
        return theme.colors.primary[500]
      case "white with Button":
          return theme.colors.primary[500]
      default:
        return theme.colors.grey[600]
    }
  }};
`

  export const Icon = styled.div`
  float: right;
  border-radius: 10px;
  padding-right: 10px;
  background-color: ${({ color, theme }) => {
    switch (color ) {
      case "grey":
        return theme.colors.grey[600]
      case "neutrals":
        return theme.colors.grey[600]
      case "primary":
        return theme.colors.neutrals[100]
      case "white":
        return theme.colors.neutrals[100]
      case "white with Button":
          return theme.colors.neutrals[100]
      case "white with Links":
            return theme.colors.neutrals[100]
      default:
        return theme.colors.grey[600]
    }
  }};
  color: ${({ color, theme }) => {
    switch (color ) {
      case "grey":
        return theme.colors.neutrals[100]
      case "neutrals":
        return theme.colors.primary[500]
      case "primary":
        return theme.colors.primary[500]
        case "white":
        return theme.colors.primary[500]
      case "white with Button":
          return theme.colors.primary[500]
      case "white with Links":
            return theme.colors.grey[600]
      default:
        return theme.colors.grey[600]
    }
  }};
  `
