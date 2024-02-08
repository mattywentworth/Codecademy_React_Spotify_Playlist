//import React from 'react';

//Write code an execute it within a VS Code terminal before associating it with the App component
//it will be written eventually as a useEffect function with [input] as the dependency array
const urlForTerminalSetup = "grant_type=client_credentials&client_id=954d475f59ed4224ac3b1c9ee5230229&client_secret=5ce1374838084874a5e8e3fdfa7aff6d"

const accessToken = "BQBcoGO0jamfVxEwnoW2SuyNTLNw_ddJknPHQ9k4EiFKE_E9pjWETXX4Stq2N84BHUMxaBJhd72ojLciZgF_GgYF8QeBVOiOjOWUPvOz7rnnV1GiXIQ"

async function spotifyApiCall(searchTerm) {
    const apiURL = 'https://api.spotify.com/v1';
    const endpointSearch = "/search?q=";
    const typeTrack = '&type=track';
    const limit = '&limit=20'
    //const artistKey = '4AF9rlxnZLtau1tmBTzqaj';
    const finishedURL = `${apiURL}${endpointSearch}${searchTerm}${typeTrack}${limit}`;
    try {
        const response = await fetch(finishedURL, {
            //method: 'GET',
            headers: {
                //'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Bearer ' + accessToken
            }
        });
        const data = await response.json();
        return data.tracks.items;
        //console.log(data.tracks.items);
    } catch (error) {
        console.log(error);
    };
}

//To get song name, album name, artist name, id, and uri - assuming array is being mapped over w/"track" as the argument:
//album = track.album.name
//song name = track.name
//artist name = track.artists - an array of objects?
//id = track.id
//uri = track.uri


//This is finally working to log the .album object
/*const testFunc = async () => {
    const testArray = await spotifyApiCall('swiss army');
    console.log(testArray);
}
testFunc();*/

export default spotifyApiCall;