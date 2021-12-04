import React from 'react'
import styled from 'styled-components'
import { Text, Link, Card, CardBody, CardFooter } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledLink = styled(Link)`
  -webkit-box-align: center;
  border: 2px solid;
  border-radius: 16px;
  box-shadow: none;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  padding: 0px 16px;
  transition: background-color 0.2s ease 0s;
  text-decoration: none;
  opacity: 1;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const CardWrapper = styled.div``

const Title = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  width: 50vw;
  text-align: center;
  font-weight: 1000;
`

const Content = styled(Text)`
  text-align: center;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return (
    <CardWrapper>
      <Card>
        <CardBody>
          <StyledCardContentInner>
            <StyledCardHeader>
              <Title>
                {TranslateString(999, 'How it works')}
              </Title>
            </StyledCardHeader>
          </StyledCardContentInner>
        </CardBody>
        <CardFooter>
          <StyledCardContentInner>
            <Content fontSize="16px">
              {TranslateString(
                999,
                'Spend CAKE to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!',
              )}
            </Content>
            <br />
            <StyledLink href="https://docs.pancakeswap.finance/lottery-1">Read more</StyledLink>
          </StyledCardContentInner>
          <br />
        </CardFooter>
      </Card>
    </CardWrapper>
  )
}

export default HowItWorks
