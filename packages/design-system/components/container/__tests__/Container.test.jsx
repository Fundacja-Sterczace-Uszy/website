import { render, screen } from "design-system/test-utils"

import Container from "design-system/components/container"

const children = <p>Test1</p>

describe(`Container`, () => {
  it(`renders with default properties`, () => {
    render(<Container>{children}</Container>)
  })

  it(`renders multiple article items when passed`, () => {
    render(
      <Container>
        <article>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo
        </article>
        <article>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo
        </article>
      </Container>
    )

    const articleElements = screen.getAllByRole("article")

    expect(articleElements).toHaveLength(2)
  })
})
