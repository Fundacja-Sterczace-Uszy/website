import styled from "@emotion/styled"
import ComingSoonImageDesktop from "frontend/public/home/images/coming-soon-desktop.png"
import ComingSoonImageMobile from "frontend/public/home/images/coming-soon-mobile.png"

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.grey[600]};
  min-height: 100vh;
`

export const Container = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  display: grid;
  align-items: center;

  ${({ theme }) => theme.breakpoints.xl} {
    align-items: start;
    justify-content: center;
  }
`

export const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 580px;
  padding: 48px 20px;

  ${({ theme }) => theme.breakpoints.sm} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-height: 1000px;
  background-image: url(${ComingSoonImageDesktop.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.grey[600]};

  ${({ theme }) => theme.breakpoints.xl} {
    background-image: url(${ComingSoonImageMobile.src});
    background-position: bottom;
    background-size: contain;
  }

  ${({ theme }) => theme.breakpoints.sm} {
    background-size: 70%;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 5px;
  ${({ theme }) => theme.breakpoints.sm} {
    margin-top: 20px;
  }
`
