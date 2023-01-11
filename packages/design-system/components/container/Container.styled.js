import styled from "@emotion/styled"

const sizes = {
  small: {
    maxWidth: "600px",
  },
  medium: {
    maxWidth: "1062px",
  },
  large: {
    maxWidth: "1220px",
  },
}

export const Container = styled.div`
  max-width: ${({ size }) => sizes[size].maxWidth};
  width: 100%;
  margin: 0 auto;
`
