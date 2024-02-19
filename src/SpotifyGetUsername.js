//Get username after app user authorizes their Spotify account

//work on this again after establishing logic in app to retrigger authorization after auth expiration
const spotifyGetUsername = async (varAccessToken) => {
    const urlApi = 'https://api.spotify.com/v1/me';
    //const accessToken = varAccessToken;
    try {
        const response = await fetch(urlApi, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${varAccessToken}`
            }
        });
        const data = await response.json();
        //console.log(data.id);
        return data.id;
    } catch (error) {
        console.log(error)
    }
}

//spotifyGetUsername('BQAlxwbsWGh7932EMa7eegDZP1O0WZ_Uxs2gf-74l94PHMxZRCi4g9vBdQ76psP6ceHBsIj7gtu76fcu4-VIF58aLfWGjYZv-jJ4Z0SwNPVg792xG5b_OKgLQ1gnjQocTggpiSYKG-vZ02EqBf3V2h1rcbC6tAPRD7OvL41gMltf8vnCZdCVRP6LpfVvwshra8kBW7UFfqfy10Igm-s_KCiMy6BBvohbGwzYXX25WXQu');

export default spotifyGetUsername;