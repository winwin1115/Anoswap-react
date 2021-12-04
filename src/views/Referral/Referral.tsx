import React from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import Hero from './components/Hero'
import TotalReferral from './components/TotalReferral'
import ReferralCommission from './components/ReferralCommission'
import ReferralLink from './components/ReferralLink'
import UnlockWalletCard from './components/UnlockWalletCard'

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 4;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Referral: React.FC = () => {
  const { account } = useWallet()

  return (
    <>
      <Hero />
      <Page>
        {!account ? (
          <UnlockWalletCard />
        ) : (
          <>
            <Cards>
              <TotalReferral />
              <ReferralCommission />
            </Cards>
            <ReferralLink />
          </>
        )}
      </Page>
    </>
  )
}

export default Referral
