import { Box } from "@chakra-ui/react";
import Nav from "./Nav";
import styles from "../styles/Header.module.css";

function Header() {
    return (
        <>
        <Box className={styles.container}>
            <Nav/>
        </Box>
        </>
    )
}

export default Header;