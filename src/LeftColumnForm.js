import React from 'react';
import styles from './LeftColumnForm.module.css';

export default function LeftColumnForm( {handleInputChange, stateInput, children, handleFormSubmitAPI} ) {
    
    return (
        <div className={styles.divWrapper}>
            <form onSubmit={handleFormSubmitAPI} className={styles.form} id="search-bar">
                <input onChange={handleInputChange} value={stateInput} type="text" id="song search" name="song-search" placeholder="Millions of tracks available..." className={styles.input}></input>
                <button type="submit" className={styles.button}>Search</button>
            </form>
        </div>
    )
}