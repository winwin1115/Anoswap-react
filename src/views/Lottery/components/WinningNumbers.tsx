import React from 'react'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Card, CardBody, CardFooter } from '@pancakeswap-libs/uikit'
import { useWinningNumbers, useMatchingRewardLength } from 'hooks/useTickets'
import useI18n from 'hooks/useI18n'
import useGetLotteryHasDrawn from 'hooks/useGetLotteryHasDrawn'
import Divider from './Divider'

const StyledFooter = styled(CardFooter)`
  background: url('/images/lottery/background.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: contain;
`

const WinningNumbers: React.FC = () => {
  const { account } = useWallet()
  const winNumbers = useWinningNumbers()
  const lotteryHasDrawn = useGetLotteryHasDrawn()
  const MatchedNumber4 = useMatchingRewardLength(4)
  const MatchedNumber3 = useMatchingRewardLength(3)
  const MatchedNumber2 = useMatchingRewardLength(2)
  const TranslateString = useI18n()

  return (
    <CardWrapper>
      <Card>
        <CardBody>
          <StyledCardContentInner>
            <StyledCardHeader>
              <Title>
                {account && lotteryHasDrawn
                  ? `🥳${TranslateString(570, 'Winning Numbers This Round')}🥳`
                  : TranslateString(572, 'Latest Winning Numbers')}
              </Title>
              <br />
            </StyledCardHeader>
          </StyledCardContentInner>
        </CardBody>
        <StyledFooter>
          <StyledCardContentInner>
            <Row>
              {winNumbers.map((number, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TicketNumberBox key={index}>
                  <CenteredText>{number}</CenteredText>
                </TicketNumberBox>
              ))}
            </Row>
            <Column>
              <RowNoPadding>
                <CenteredTextWithPadding>{TranslateString(442, 'Tickets matching 4 numbers:')}</CenteredTextWithPadding>
                <CenteredTextWithPadding>
                  <strong>{MatchedNumber4}</strong>
                </CenteredTextWithPadding>
              </RowNoPadding>
              <RowNoPadding>
                <CenteredTextWithPadding>{TranslateString(444, 'Tickets matching 3 numbers:')}</CenteredTextWithPadding>
                <CenteredTextWithPadding>
                  <strong>{MatchedNumber3}</strong>
                </CenteredTextWithPadding>
              </RowNoPadding>
              <RowNoPadding>
                <CenteredTextWithPadding>{TranslateString(446, 'Tickets matching 2 numbers:')}</CenteredTextWithPadding>
                <CenteredTextWithPadding>
                  <strong>{MatchedNumber2}</strong>
                </CenteredTextWithPadding>
              </RowNoPadding>
            </Column>
            <br />
            <Link href="https://api.pancakeswap.com/api/lottery?page=0&pageSize=25" target="_blank">
              {TranslateString(448, 'Export recent winning numbers')}
            </Link>
          </StyledCardContentInner>
          <br />
        </StyledFooter>
      </Card>
    </CardWrapper>
  )
}

const Link = styled.a`
  -webkit-box-align: center;
  border: 2px solid;
  border-radius: 16px;
  box-shadow: none;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  padding: 6px 16px;
  transition: background-color 0.2s ease 0s;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    opacity: 0.8;
  }
`

const Row = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`

const RowNoPadding = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  margin-top: 1em;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const CenteredText = styled.div`
  text-align: center;
  align-items: center;
  color: rgb(72, 175, 153);
`

const CenteredTextWithPadding = styled.div`
  text-align: center;
  align-items: center;
  padding-left: 2px;
  padding-right: 2px;
`

const TicketNumberBox = styled.div`
  padding: 10px;
  border-radius: 12px;
  border: 2px dotted rgb(72, 175, 153);
  color: white;
  font-size: 20px;
  font-weight: 900;
  margin: 10px;
  margin-bottom: 7px;
  width: 40px;

  @media (min-width: 768px) {
    font-size: 40px;
    margin: 20px;
    width: 60px;
  }
`

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const CardWrapper = styled.div`
  margin-bottom: 32px;
`

const Title = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  width: 50vw;
  text-align: center;
  font-weight: 1000;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default WinningNumbers
