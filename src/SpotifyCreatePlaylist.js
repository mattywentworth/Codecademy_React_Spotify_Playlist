//Using Spotify API to save a playlist created in the React App to the user's Spotify profile

/*
const spotifyCreatePlaylist = async (userID, varAccessToken, playlistName) => {
    const urlAPI = 'https://api.spotify.com/v1/';
    const endpointAPI = `users/${userID}/playlists`;
    const  urlAPISync = `${urlAPI}${endpointAPI}`;

    try {
        const response = await fetch(urlAPISync, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${varAccessToken}`,
                'Content-Type': 'application/json'
            },
            body: {
                'name': `${playlistName}`,
                'description': `new playlist`,
                'public': false                
            }
        });
        const data = await response.json();
        alert(data);
    } catch(error) {
        console.log(error);
    }
}
*/


export const spotifyCreatePlaylist = async (user, accesstoken, playlistname) => {
    const urlAPI = 'https://api.spotify.com/v1/';
    const endpointAPI = `users/${user}/playlists`;
    const testURL = 'https://api.spotify.com/v1/me/playlists';
    const  urlAPISync = `${urlAPI}${endpointAPI}`;

    try {
        const response = await fetch(urlAPISync, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accesstoken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: `${playlistname}`
                //'description': `new playlist`,
                //'public': true                
            })
        });
        const data = await response.json();
        //console.log(data.id);
        return data.id;
    } catch(error) {
        console.log(error);
    }
}

export const spotifyAddSongsToPlaylist = async (playlistid, accesstoken, playliststate, playlistname) => {
    const endpoint = `https://api.spotify.com/v1/playlists/${playlistid}/tracks?uris=`;
    const playlistURIs = playliststate.map(track => track.uriTrack);
    const playlistURIsToString = playlistURIs.toString();
    const urlToFetch = `${endpoint}${playlistURIsToString}`;
    const convertedURIs = JSON.stringify(playlistURIs);

    try {
        const response = await fetch(urlToFetch, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accesstoken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uris: `${playlistURIs}`
            })
        });
        const data = await response.json();
        //return data.snapshot_id;
        alert(`${playlistname} has been saved to your Spotify account.`);
    } catch (error) {
        console.log(error);
    }
}

//spootifyCreatePlaylist();
//export  spotifyCreatePlaylist;