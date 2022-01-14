import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Salvador Costa',
      slug: 'salvador-costa',
      location: {
        latitude: -20.316254,
        longitude: -40.308441,
      },
    }

    const placeTwo = {
      id: '2',
      name: 'Kleber Andrade',
      slug: 'kleber-andrade',
      location: {
        latitude: -20.332558,
        longitude: -40.385435,
      },
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/salvador costa/i)).toBeInTheDocument()
    expect(screen.getByTitle(/kleber andrade/i)).toBeInTheDocument()
  })
})
