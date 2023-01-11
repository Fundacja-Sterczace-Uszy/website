import styled from "@emotion/styled"

export const Container = styled.h1`
  margin: 0;
  ${({ variant, theme }) => theme.typography.desktop[variant]};
  color: ${({ color }) => color};

  ${({ theme }) => theme.breakpoints.xl} {
    ${({ theme, variant }) => theme.typography.tablet[variant]}
  }

  ${({ theme }) => theme.breakpoints.md} {
    ${({ theme, variant }) => theme.typography.tablet[variant]}
  }

  ${({ theme }) => theme.breakpoints.sm} {
    ${({ theme, variant }) => theme.typography.mobile[variant]}
  }
`
