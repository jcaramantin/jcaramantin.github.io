import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-heigh: 20px;
padding: 10px;

&:hober img {
    transform: rotate(20deg):
}
`

const Logo = () => {
    const KCPrintImg= `/images/logo${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
         
                <LogoBox>
                    <Image src={KCPrintImg} width={30} height={30} alt='logo'/>
                    <Text color={useColorModeValue('gray.800','whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight='bold'
                    ml={3}
                    > Jhoan Caramantin</Text>
                </LogoBox>
            
        </Link>
    )
}

export default Logo;