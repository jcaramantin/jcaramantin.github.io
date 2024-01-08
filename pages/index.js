import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={4} mb={6} align="center">
                <div>Welcome to Jhoan Caramantin Website</div>
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" size="lg" mb={2} variant="page-title">
                        Jhoan Caramantin
                    </Heading>
                    <p>( Desarrollador Full Stack / Ingeniero de Software / Artista ) </p>
                </Box>
            </Box>
        </Container>
        
    )
}
export default Page;