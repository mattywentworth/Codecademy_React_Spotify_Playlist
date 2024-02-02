import React from 'react';
import styles from './LeftColumnForm.module.css';

export default function LeftColumnForm( {handleInputChange, stateInput, handleFormSubmit, children, handleFormSubmitAPI} ) {
    
    return (
        <div className={styles.divWrapper}>
            <form onSubmit={handleFormSubmitAPI}/*{handleFormSubmit}*/ className={styles.form}>
                <input onChange={handleInputChange} value={stateInput} type="text" id="song search" name="song-search" placeholder="Millions of tracks available..." className={styles.input}></input>
                <button type="submit" className={styles.button}>Add to Playlist</button>
            </form>
            <p>{stateInput}</p>
            {children}
        </div>
    )
}