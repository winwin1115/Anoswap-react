import React, { useState } from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import Hero from './components/Hero'
import YourProject from './components/YourProject'

const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`

const Jungles: React.FC = () => {
  const TranslateString = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      <Hero />
      <Page>
        <Wrapper>
          <ButtonMenu activeIndex={activeIndex} onClick={handleClick} size="sm" variant="subtle">
            <ButtonMenuItem>{TranslateString(999, 'Active')}</ButtonMenuItem>
            <ButtonMenuItem>{TranslateString(999, 'Inactive')}</ButtonMenuItem>
          </ButtonMenu>
        </Wrapper>
        <Cards>
          <YourProject />
        </Cards>
      </Page>
    </>
  )
}

export default Jungles
