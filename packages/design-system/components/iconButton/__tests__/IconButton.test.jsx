import userEvent from "@testing-library/user-event"
import { render, screen, act } from "design-system/test-utils"

import IconButton from "design-system/components/iconButton"

const iconName = "facebook"
const iconSize = "large"
const iconColor = "red"
const href = "https://google.com"

describe(`IconButton`, () => {
  it(`renders with default properties`, () => {
    render(<IconButton name={iconName} />)

    expect(screen.getByTitle(iconName)).toBeInTheDocument()
  })

  it(`renders with custom properties`, () => {
    render(<IconButton name={iconName} size={iconSize} color={iconColor} />)

    expect(screen.getByTitle(iconName)).toBeInTheDocument()
  })

  it(`renders as link element if correct link href is provided`, () => {
    render(<IconButton name={iconName} href={href} />)

    expect(screen.getByRole(`link`)).toHaveAttribute(`href`, href)
  })

  it(`renders as button element if href is not provided`, () => {
    render(<IconButton name={iconName} />)

    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it(`fires onClick callback when button is clicked`, () => {
    const onClickMock = jest.fn()
    render(<IconButton name={iconName} onClick={onClickMock} />)

    const button = screen.getByRole("button")

    act(() => {
      userEvent.click(button)
    })

    expect(onClickMock).toBeCalledTimes(1)
  })

  it(`fires onClick callback when link is clicked`, () => {
    const onClickMock = jest.fn()
    render(<IconButton name={iconName} href={href} onClick={onClickMock} />)

    const link = screen.getByRole("link")

    act(() => {
      userEvent.click(link)
    })

    expect(onClickMock).toBeCalledTimes(1)
  })
})
