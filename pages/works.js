    import { Container, Heading, SimpleGrid,Divider } from "@chakra-ui/react";
    import Section from '../components/section'
    import { WorkGridItem } from "../components/grid-item";

    import thumbHolohouse from '../public/images/holohouse.png'
import Layout from "../components/layouts/article";

    const Works = () =>{
        return (
            <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Proyectos
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="holohouse" title="HoloHouse" thumbnail={thumbHolohouse}>
                            Es una aplicación multiplataforma, la cual permite poder administrar bienes inmobiliarios y poder arrendarlos
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="holohouse" title="HoloHouse" thumbnail={thumbHolohouse}>
                            Es una aplicación multiplataforma, la cual permite poder administrar bienes inmobiliarios y poder arrendarlos
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
            </Layout>
        )
    }

    export default Works