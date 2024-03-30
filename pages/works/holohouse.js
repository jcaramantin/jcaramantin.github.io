import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Container, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Work = () => {
    return (
        <Layout title="HoloHouse">
            <Container>
                <Title>
                    HoloHouse <Badge>2022</Badge>
                </Title>
                <Paragraph>Proyecto modelo de web para arrendamiento de inmueble</Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.holohouse.app/">
                            https://www.holohouse.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Linux/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>.NET/Xamarin Forms/ASP.NET</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/holohouse.png" alt="Inkdrop" />
            </Container>

        </Layout>
    )
}
export default Work