import NextLink from 'next/link'
import {
Text,
Box,
Heading,
Container,
Divider,
Button
} from '@chakra-ui/react'

const NotFound=()=>
{
    return(
        <Container>
            <Heading as="h1">Página no encontrada</Heading>
            <Text>Esta página que estás buscando, no existe</Text>
            <Divider my={6}/>
            
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme='teal'> Retorna al Inicio </Button>
                </NextLink>
            </Box>
        </Container>
    )
}
export default NotFound