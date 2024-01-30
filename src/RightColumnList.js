import React from 'react';
import styles from './RightColumnList.module.css';

//Should the divListWrapper be a ol element with each mapped item being a li jsx element? If so, make sure there's a key property
//Is it an accessibility problem to have a "fake checkbox" instead of an "input type=checkbox"? Seems that styling a checkbox is wonky

export default function RightColumnList( {statePlaylistTracks} ) {

    return (
        <div className={styles.divWrapper}>
            <div className={styles.divListWrapper}>
                {statePlaylistTracks.map(track => {
                    return (
                        
                            <div className={styles.divListItemWrapper} id={track}>
                                <h4>{track}</h4>
                                <button className={styles.button}></button>
                            </div>
                    );
                })}
            </div>
        </div>
    );
}