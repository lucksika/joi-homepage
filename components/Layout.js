import Header from "./Header";
import styles from "../styles/Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <Header/>
            <main className={styles.container}>
                <section>{children}</section>
            </main>
        </>
    )
}

export default Layout;
