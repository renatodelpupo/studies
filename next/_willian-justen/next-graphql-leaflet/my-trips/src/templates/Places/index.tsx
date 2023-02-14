import Image from 'next/image'
import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'
import { useRouter } from 'next/dist/client/router'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        canonical="https://mytrips.com"
        description={
          place.description?.text || 'A simple project to show places in a map.'
        }
        openGraph={{
          description:
            place.description?.text ||
            'A simple project to show places in a map.',
          images: [
            {
              alt: `${place.name}`,
              height: place.gallery[0].height,
              url: place.gallery[0].url,
              width: place.gallery[0].width,
            },
          ],
          title: `${place.name} - My Trips`,
          url: 'https://mytrips.com',
        }}
        title={`${place.name} - My Trips`}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
