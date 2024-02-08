import React from 'react';
import styles from './RightColumnList.module.css';

//I think I need more properties on the div, h4, and button elements here. id doesn't seem like enough.
//Should the divListWrapper be a ol element with each mapped item being a li jsx element? If so, make sure there's a key property
//Is it an accessibility problem to have a "fake checkbox" instead of an "input type=checkbox"? Seems that styling a checkbox is wonky

export default function RightColumnList( {statePlaylistTracks, children, handleSelectionForDeletion} ) {

    return (
        <div className={styles.divWrapper}>
            {children}
            <div className={styles.divListWrapper} id="playlist-tracks">
                {statePlaylistTracks.map((track) => {
                    return (
                        <div className={styles.track} >
                            <img src={track.imgAlbum} className={styles.img}/>
                            <div className={styles.trackInfo}>
                                <table>
                                    <tr>
                                        <td className={styles.ttitle}>Track:</td>
                                        <td className={styles.tdetail}>{track.nameTrack}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.ttitle}>Artist:</td>
                                        <td className={styles.tdetail}>{track.nameArtist}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.ttitle}>Album:</td>
                                        <td className={styles.tdetail}>{track.nameAlbum}</td>
                                    </tr>
                                </table>
                            </div>
                            <button onClick={handleSelectionForDeletion} className={styles.removeButton} id={track.id}>-</button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}