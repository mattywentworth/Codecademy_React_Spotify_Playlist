import React from 'react'
import styles from './Header.module.css';

export default function Header( {statePlaylistName, statePlaylistTracks} ) {

    return (
        <div className={styles.divWrapper}>
            <div className={styles.divLeft}>
                <div></div>
            </div>
            <div className={styles.divCenter}>
                <h1>Make a Spotify Playlist</h1>
            </div>
            <div className={styles.divRight}>
                <button className={styles.button} id="test-header">Save Playlist to Spotify</button>
            </div>
        </div>
    );
}