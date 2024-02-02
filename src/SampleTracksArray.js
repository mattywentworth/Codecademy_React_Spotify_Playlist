//Array to have an initial visualization of how tracks will be imported via API before making the API connection

const num = 0;

const randomSongId = () => {
    Math.floor(Math.random() * 100);
}

export const sampleTracksArray = [
    {
        trackID: 10,
        trackName: 'Apple',
        artist: 'Alan',
        album: 'Magic Tricks' 
    },
    {
        trackID: 11,
        trackName: 'Banana',
        artist: 'Alan',
        album: 'Magic Tricks'
    },
    {
        trackID: 12,
        trackName: 'Canteloupe',
        artist: 'Bethany',
        album: 'Ol Chunk Of Coal'
    }
];