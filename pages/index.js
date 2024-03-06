import { Container, Box, Heading, Image, useColorModeValue, Button } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from 'next/link'
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";

const Page = () => {
    return (
        <Layout>
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
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Sobre mí
                </Heading>
                <Paragraph>Hola soy Jhoan Caramantin Llacsa, soy Ingeniero de Software y desarrollador Full-stack,
                    apasionado por el desarrollo de software y la tecnología. Me gusta aprender nuevas tecnologías y 
                    aplicarlas en la solución de problemas de la actualidad. Me gusta el arte y la música, en mis tiempos libres
                    las practico.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            Mis proyectos
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Biografía
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Nací en Lima, Perú.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Trabajé como Analista de Sistemas en la empresa <a href="https://www.linkedin.com/company/cottonknit/" target="_blank">Cotton Knit</a>,
                    desarrollando aplicaciones de escritorio, web y móviles para la gestión de la empresa y control de producción textil.
                </BioSection>
                <BioSection>
                    <BioYear>2022 al presente</BioYear>
                    Actualmente trabajo como Analista Programador en la empresa <a href="https://www.linkedin.com/company/sanms-servicios-de-ingenieria-s-a/mycompany/" target="_blank">SANMS</a>,
                    en el cual desarrollo software de criptografía y seguridad informática.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Completé mis estudios universtarios en la Universidad Nacional Mayor de San Marcos, 
                    obteniendo el título de  Bachiller en Ingeniería de Software.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as='h3' size="lg" variant="section-title">Intereses</Heading>
                <Paragraph>Programación, Música, Arte, Dibujo, Fotografía, Machine Learning</Paragraph>

            </Section>

        </Container>
    </Layout>
    )
}
export default Page;