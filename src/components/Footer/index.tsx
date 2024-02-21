import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="suporte@wongames.gg">suporte@wongames.gg</a>
        <a href="+55 21 33283719">+55 21 33283719</a>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow Us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/" target="_blank" rel="noopenner, noreferrer">
            Store
          </Link>
          <Link href="/games" target="_blank" rel="noopenner, noreferrer">
            Explore
          </Link>
          <Link href="/search" target="_blank" rel="noopenner, noreferrer">
            Search
          </Link>
          <Link href="/faq" target="_blank" rel="noopenner, noreferrer">
            FAQ
          </Link>
        </nav>
      </S.Column>
      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <span>Rua 7 de Maio</span>
        <span>527 - 89020330</span>
        <span>Rio de Janeiro, Brasil</span>
      </S.Column>
    </S.Content>
    <S.Copyright>
      Won Games {new Date().getFullYear()} © Todos os Direitos Reservados
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
