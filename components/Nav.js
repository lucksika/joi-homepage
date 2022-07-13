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
                    <Heading fontSize={25} fontWeight={900}>
                        Joi Losuvalna
                    </Heading>
                </Box>
                <Box className={styles.paths}>
                    {pages.map((item) => {
                        return (
                            <Box key={item.path}>
                                <NextLink href={item.path} passHref>
                                    {/* <a> {item.name} </a> */}
                                    <Button variant="link">
                                        {item.name}
                                    </Button>
                                </NextLink>
                            </Box>
                        )
                    })}
                </Box>
                <Flex alignItems="center" gap={5}>
                    
                    <ThemeButton/>
                    <NextLink href="#contact-seciton">
                        <Button colorScheme="blue" variant="outline">
                            Le&apos;s chat
                        </Button>
                    </NextLink>
                    
                </Flex>
            </Flex>
        </>
    )
}

export default Nav;