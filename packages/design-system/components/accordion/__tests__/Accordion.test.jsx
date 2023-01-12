import { render, screen } from "design-system/test-utils"

import Accordion from "design-system/components/accordion"

const button = "button"

describe(`Banner`, () => {
  it(`renders Button with default properties`, () => {
    render(<Accordion button={button} />)
    expect(screen.getByText(button)).toBeInTheDocument()
  })
})