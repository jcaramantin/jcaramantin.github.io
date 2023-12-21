import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'

const Main = ({children}) =>{
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Jhoan Caramantin - Homepage</title>
            </Head>
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main;