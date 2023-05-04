import NextLink from "next/link";

import { Flex, Box, Heading, Text, Icon, Button, Link} from "@chakra-ui/react";
import ThemeButton from "./ThemeButton";

import styles from "../styles/Nav.module.css";
import button_styles from "../styles/Button.module.css";

const pages = [
    {name: "About me", path: "/"},
    {name: "Blog", path: "blog"}
]

function Nav() {
    return (
        <>
            <Flex alignItems="center" justifyContent="space-between">
                <Box>
                    <Heading>
                        <span className={styles.name}>Joi Losuvalna</span>
                    </Heading>
                </Box>
                <Flex alignItems="center" gap={5}>
                    
                    <ThemeButton/>
                    <NextLink href="#contact-seciton">
                        <Button colorScheme="blue" variant="outline">
                            Let&apos;s chat
                        </Button>
                    </NextLink>
                    
                </Flex>
            </Flex>
        </>
    )
}

export default Nav;