import { useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './Napoleon.module.scss';

export default function Napoleon() {
    const [showPlayer, setShowPlayer] = useState(false);

    const togglePlayer = () => {
        setShowPlayer(!showPlayer);
    }

    return (
        <div className={styles.napoleon}>
            {showPlayer && <ReactPlayer controls url="https://youtu.be/GN1JG1tuCko" />}
            <button className={styles.togglePlayer} onClick={togglePlayer}></button>
        </div>
    )
}
