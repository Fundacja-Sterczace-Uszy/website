import styled from "@emotion/styled"

export const Badge = styled.div`
  display: inline-block;
  padding: 0px 8px;
  border-radius: 4px;
  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case "gray":
        return theme.colors.grey[200]
      case "neutrals":
        return theme.colors.neutrals[400]
      case "primary":
        return theme.colors.primary[500]
      default:
        return theme.colors.grey[200]
    }
  }};
  color: ${({ variant, theme }) =>
    variant === "primary"
      ? theme.colors.neutrals[100]
      : theme.colors.grey[500]};

  ${({ size, theme }) => {
    switch (size) {
      case "small":
        return theme.typography.desktop.bodyTiny
      case "medium":
        return theme.typography.desktop.bodySmall
      case "large":
        return theme.typography.desktop.bodyTitle
      default:
        return theme.typography.desktop.bodySmall
    }
  }};
`
