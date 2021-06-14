const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');
const author = document.getElementById('author')

const songs = ['Pathetic House', 'Thundersnail', 'Spooktune', 'Spookwave', 'Ghouliday', 'Spooktune Remix'];
let songIndex = 0;
audio.volume = 0.5;

loadSong(songs[songIndex]);

// Update song
function loadSong(song) {
    title.innerText = song;
    switch(song) {
        case 'Pathetic House':
        case 'Thundersnail':
        case 'Spooktune':
        case 'Spookwave':
        case 'Ghouliday':
            author.innerText = "by Toby Fox";
            break;
        case 'Spooktune Remix':
            author.innerText = "by Sim Gretina";
            break;
        default:
            author.innerText = "";
    }

    audio.src = `../music/${song}.mp3`;
}

// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();

  }
  
// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', pauseSong);