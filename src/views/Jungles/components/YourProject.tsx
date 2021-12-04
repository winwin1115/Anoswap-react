import React from 'react'
import styled from 'styled-components'
import { Button, Card, CardBody, CardFooter, Heading, Image, Text } from '@pancakeswap-libs/uikit'

const StyledButton = styled(Button)`
    color: ${(props) => props.theme.colors.primary};
    background-color: transparent !important;
    box-shadow: none !important;
    border: 2px solid ${(props) => props.theme.colors.primary};
    width: 100%;
    margin: 16px 0px;
    display: inline-flex;

    &:hover {
        opacity: 0.8;
    }
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled(Heading).attrs({ size: 'lg' })`
  color: ${({ theme }) => theme.colors.secondary};
`

const Badge = styled.div`
  border: 2px solid;
  border-radius: 16px;
  padding: 0px 8px;
  width: fit-content;
  display: inline-flex;
  color: ${({ theme }) => theme.colors.primary};
`

const CommunityIcon = styled.svg`
  fill: ${({ theme }) => theme.colors.primary};
`

const StyledImage = styled(Image)`
    margin: 16px 0px;
`

const StyledCard = styled(Card)`
    max-width: 31.5%;
    min-width: 280px;
    width: -webkit-fill-available;
`

const YourPoject = () => {
    return (
        <StyledCard>
            <CardBody>
                <Title as="h2">Your Project? 👀</Title>
                <StyledImage src="/images/egg/ETH.png" width={64} height={64} />
                <Title as="h2">???</Title>
                <Text>Create a pool for your token</Text>
                <StyledButton><a href="http://localhost:3000/jungles">Apply now</a></StyledButton>
                <Row>
                    <Text>APR:</Text>
                    <Text>???</Text>
                </Row>
                <Row>
                    <Text>Your Stake:</Text>
                    <Text>??? ANO</Text>
                </Row>
            </CardBody>
            <CardFooter>
                <Badge>
                    <CommunityIcon viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" /></CommunityIcon>
                    <Text color="primary">Community</Text>
                </Badge>
            </CardFooter>
        </StyledCard>
    )
}

export default YourPoject
