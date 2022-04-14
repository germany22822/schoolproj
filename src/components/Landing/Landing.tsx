import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.scss';

export default function Landing() {
    const [isDarkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    }

    return (
        <div className={isDarkTheme ? styles.darkLanding : styles.landing}>
            <Link to="select" className={styles.start} />
            <button className={styles.color} onClick={toggleTheme}></button>
        </div>
    )
}
