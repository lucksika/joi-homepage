import styles from "../styles/Badge.module.css";

function Badge({ text , color}) {
    return (
        <>
            <span className={`${styles.container} ${styles[color]}`}>
            {text}
            </span>
        </>
    )
}

export default Badge;