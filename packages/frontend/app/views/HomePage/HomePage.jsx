import TextBanner from "design-system/recipes/textBanner"
import Button from "design-system/components/button"
import { useTheme } from "@emotion/react"
import IconButton from "design-system/components/iconButton"
import * as Styled from "./HomePage.styled"

const HomePage = () => {
  const theme = useTheme()
  return (
    <Styled.Main>
      <Styled.Container>
        <Styled.TextContainer>
          <TextBanner
            subtitle="Fundacja sterczące uszy"
            heading="Strona w budowie"
            description="Już za chwilę wracamy z nasza nową stroną. Zwierzaki jednak potrzebują pomocy cały czas. Wejdź na stronę ratujemyzwierzaki.pl i wesprzyj naszą fundację ❤"
            size="large"
            layout="center"
            subtitleColor={theme.colors.primary[500]}
            headingColor={theme.colors.neutrals[100]}
            descriptionColor={theme.colors.neutrals[100]}
            button={
              <Button
                text="Przekaż wsparcie"
                variant="fill"
                color="primary"
                href="https://www.ratujemyzwierzaki.pl/sterczaceuszy?fbclid=IwAR1Gjv_H7e-lPqWbLzfcAiJYfUl-gcJR6IClupvBL5N8g6y0d9KfFlzXGVE"
                size="large"
                target="_blank"
              />
            }
          />
          <Styled.IconContainer>
            <IconButton
              name="facebook"
              size="large"
              color={theme.colors.neutrals[100]}
              href="https://www.facebook.com/sterczaceuszy"
              aria-label="Visit our Facebook profile"
            />
            <IconButton
              name="instagram"
              size="large"
              color={theme.colors.neutrals[100]}
              href="https://www.instagram.com/sterczaceuszy"
              aria-label="Visit our Instagram profile"
            />
            <IconButton
              name="mail"
              size="large"
              color={theme.colors.neutrals[100]}
              href="mailto:fundacjasterczaceuszy@gmail.com"
              aria-label="Send message via email"
            />
          </Styled.IconContainer>
        </Styled.TextContainer>

        <Styled.Background />
      </Styled.Container>
    </Styled.Main>
  )
}

export default HomePage
