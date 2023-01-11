import styled from "@emotion/styled"
import { css } from "@emotion/react"
import theme from "design-system/theme"

const sizes = {
  small: {
    typography: theme.typography.desktop.bodySmall,
    padding: "8px 32px",
  },
  medium: {
    typography: theme.typography.desktop.h5,
    padding: "10px 40px",
  },
  large: {
    typography: theme.typography.desktop.h4,
    padding: "12px 48px",
  },
}

const colors = {
  primary: {
    mainColor: theme.colors.primary[500],
    filledText: theme.colors.neutrals[100],
  },
  black: {
    mainColor: theme.colors.grey[600],
    filledText: theme.colors.neutrals[100],
  },
}
export const Component = styled.a`
  ${({ size }) => sizes[size].typography};
  letter-spacing: -0.02em;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: ${({ size }) => sizes[size].padding};
  color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].filledText : colors[color].mainColor};
  background-color: ${({ variant, color }) =>
    variant === "fill" ? colors[color].mainColor : "transparent"};
  border: ${({ variant, color }) =>
    variant === "border" ? `2px solid ${colors[color].mainColor}` : "none"};

  ${({ variant }) =>
    (variant === "textLine" || variant === "text") &&
    css`
      border-radius: 0;
      padding: 4px;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      ${theme.breakpoints.md} {
        ${theme.typography.mobile.bodyLarge};
        padding: 8px 32px;
      }

      ${theme.breakpoints.sm} {
        ${theme.typography.mobile.bodyTitle};
        padding: 8px 32px;
      }
    `}
`

export const Text = styled.span`
  ${({ variant }) =>
    variant === "textLine" &&
    css`
      text-decoration: underline;
    `}

  ${({ active, variant, color }) =>
    active &&
    variant === "text" &&
    css`
      border-bottom: 2px solid ${colors[color].mainColor};
    `}
`

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    ${({ size }) =>
      size === "large" &&
      css`
        ${theme.breakpoints.md} {
          ${theme.typography.mobile.bodyLarge};
          height: 18px;
          width: 18px;
        }

        ${theme.breakpoints.sm} {
          ${theme.typography.mobile.bodyTitle};
          height: 16px;
          width: 16px;
        }
      `}
  }
`
