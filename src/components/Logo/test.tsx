import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal size by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a large size when size is passed', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i)).toHaveStyle({
      width: '20rem'
    })
  })
})
