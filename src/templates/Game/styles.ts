import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

type CoverProps = {
  src: string
}

export const Main = styled.main`
  margin-top: 20rem;

  ${media.greaterThan('medium')`
    margin-top: 58rem;
  `}
`

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;
    position: absolute;
    height: 39.5rem;
    top: 0;
    right: 0;
    left: 0;

    ${media.greaterThan('medium')`
      height: 70rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};
    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGameInfo = styled(Section)``

export const SectionGallery = styled(Section)`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
  `}
`
