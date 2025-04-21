
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

// Destructuring objects

const song = 'New Song';
const { song: song2, songDuration, details } = audioPlayer;
const { author: who, year } = details;

console.log('Song: ', song);
console.log('Song2: ', song2);
console.log('Song Duration: ', songDuration);
console.log('Author', who);
console.log('Year', year);

// Destructuring arrays
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const trunks = dbz[3] || 'No hay personaje 3';

const [,,trunks2='Not found'] = ['Goku', 'Vegeta'];

console.error('Personaje 3: ', trunks);
console.error('Personaje array: ', trunks2);

export {};