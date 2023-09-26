import Button from '../Button'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  img,
  buttonLabel,
  buttonLink,
  subtitle,
  title
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" atia-aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
