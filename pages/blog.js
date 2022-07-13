import Head from 'next/head'
import { motion } from 'framer-motion'
import { Container, Heading } from "@chakra-ui/react";

function Blog() {
    return (
        <>
        <Head>
            <title>Joi - Homepage</title>
            <meta name="og:title" content="Homepage"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container paddingTop={200} textAlign="center">
            <Heading>To be continued (つづく)</Heading>
        </Container>
        </>
        
    )
}

export default Blog;