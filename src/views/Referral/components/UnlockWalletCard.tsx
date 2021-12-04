import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'

const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledText = styled(Text)`
  margin: 16px 0;
`

const UnlockWalletCard = () => {
  const TranslateString = useI18n()

  return (
    <Card>
      <StyledCardBody>
        <UnlockButton />
        <StyledText color="primary">{TranslateString(999, 'Unlock wallet to get your unique referral link')}</StyledText>
      </StyledCardBody>
    </Card>
  )
}

export default UnlockWalletCard
