import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    const testLink = '/my-link'
    const testText = 'My Link'

    render(<LinkWrapper href={testLink}>{testText}</LinkWrapper>)

    const children = screen.getByRole('link', { name: testText })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', testLink)
  })
})
