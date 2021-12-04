import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 24px;
  font-size: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);
  padding-bottom: 40px;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
`

const StyledContainer = styled(Container)`
  flex: 1;
  padding-right: 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <StyledContainer>
        <Title>{TranslateString(999, 'Stake PANTHER to Earn New Tokens')}</Title>
        <Blurb>{TranslateString(999, `You can unstake at any time. Rewards are calculated per block.`)}</Blurb>
      </StyledContainer>
    </StyledHero>
  )
}

export default Hero
