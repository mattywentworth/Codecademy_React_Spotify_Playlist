import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.divWrapper}>
            <h1>Create Your Spotify Comedy Playlist</h1>
            <p id="test-header"></p>
        </div>
    );
}