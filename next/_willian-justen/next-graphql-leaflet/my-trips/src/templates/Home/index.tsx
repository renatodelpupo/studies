import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        canonical="https://mytrips.com"
        description="A simple project to show places in a map."
        openGraph={{
          description: 'A simple project to show places in a map.',
          images: [
            {
              alt: 'My Trips',
              height: 720,
              url: 'https://mytrips.com/cover.png',
              width: 1280,
            },
          ],
          site_name: 'My Trips',
          title: 'My Trips',
          url: 'https://mytrips.com',
        }}
        title="My Trips"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
