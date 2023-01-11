import styled from "@emotion/styled"

export const Label = styled.label`
  ${({ theme }) => theme.typography.desktop.bodySmall};
  color: ${({ theme }) => theme.colors.grey[600]};
`

export const Container = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  line-height: 24px;
  padding: ${({ state }) => (state ? "12px 38px 12px 10px" : "12px 10px")};
  margin: 8px 0;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 1px solid ${({ theme }) => theme.colors.grey[400]};
  border-radius: 10px;
  border-color: ${({ state, theme }) => {
    switch (state) {
      case "valid":
        return theme.colors.success[100]
      case "error":
        return theme.colors.error[100]
      default:
        return theme.colors.grey[400]
    }
  }};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[400]};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.grey[200]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.grey[400]};
    outline: 4px solid ${({ theme }) => theme.colors.grey[200]};
  }

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.grey[600]};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.grey[600]};
  }
`

export const Icon = styled.span`
  position: absolute;
  height: 24px;
  right: 10px;
  top: 20px;

  color: ${({ state, theme }) => {
    switch (state) {
      case "valid":
        return theme.colors.success[100]
      case "error":
        return theme.colors.error[100]
      default:
        return theme.colors.grey[400]
    }
  }};
`
