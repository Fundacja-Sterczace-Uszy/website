import styled from "@emotion/styled"

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px;

  ${({ theme }) => theme.breakpoints.sm} {
    gap: 32px;
  }

  &:before {
    content: "";
    width: 100%;
    height: 5px;
    clip-path: ${({ size }) =>
      `ellipse(50% ${size === `large` ? `3px` : `2px`})`};
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0px auto 0px auto;
  padding: 60px 25px;
  ${({ theme }) => theme.breakpoints.xl} {
    gap: 64px;
    max-width: 660px;
    padding: 60px 15px 0px 15px;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    gap: 32px;
    padding: 20px 15px;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  ${({ theme }) => theme.breakpoints.xl} {
    gap: 32px;
  }
`

export const LogoContainer = styled.div`
  display: inline-flex;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.xl} {
    gap: 40px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 32px;
  }
`

export const MainDataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;
  ${({ theme }) => theme.breakpoints.xl} {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    justify-content: flex-start;
    gap: 32px;
  }
`

export const SectionsContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.xl} {
    flex-direction: row;
    width: 100%;
    gap: 20px;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    flex-direction: column;
    gap: 32px;
  }
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const IconsContainer = styled.div`
  display: inline-flex;
  ${({ theme }) => theme.breakpoints.sm} {
    display: none;
  }
`
export const IconsContainerMobile = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.sm} {
    display: inline-flex;
  }
`

export const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
