import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  children: React.ReactNode
  href: string
}

const LinkWrapper = ({ children, href }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
