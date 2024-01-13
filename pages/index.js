import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={4} mb={6} align="center">
                <div>Welcome to Jhoan Caramantin Website</div>
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" size="lg" mb={2} variant="page-title">
                        Jhoan Caramantin
                    </Heading>
                    <p>( Desarrollador Full Stack / Ingeniero de Software / Artista ) </p>
                </Box>
                <Box flexShrink={0} mt={{base:4 ,md: 0}} ml={{md:6}} align="center">
                    <Image  borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" 
                            display="inline-block" borderRadius="full" src="/images/pfp.jpg" alt="ZHpfp"/>
                </Box>
            </Box>
        </Container>
        
    )
}
export default Page;