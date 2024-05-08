const songProgressBar = document.getElementById('songProgressBar')
const songProgressBarDot = document.getElementById('songProgressBarDot')

const prevButton = document.getElementById('prev-button')
const playButton = document.getElementById('play-button')
const nextButton = document.getElementById('next-button')

const nextButtonPlay = document.getElementById('next-button-play')
const nextButtonSkip = document.getElementById('next-button-skip')

const songAudio = document.querySelector('audio#song')
const songImage = document.getElementById('song-image')
const songCategory = document.getElementById('song-category')
const songName = document.getElementById('song-name')
const songAuthor = document.getElementById('song-author')

const nextSongName = document.getElementById('next-song-name')
const nextSongAuthor = document.getElementById('next-song-author')
const nextSongImage = document.getElementById('next-song-image')
const nextSongDuration = document.getElementById('next-song-duration')

const songListElem_1 = document.getElementById('content-1')
const songListElem_2 = document.getElementById('content-2')
const songListElem_3 = document.getElementById('content-3')
const songListElem_4 = document.getElementById('content-4')

const RADIUS = 117

let progressBar = new ProgressBar(RADIUS, songProgressBar, songProgressBarDot)

window.addEventListener('resize', updateProgressBar)
window.addEventListener('scroll', updateProgressBar)

function updateProgressBar() {
  setTimeout(() => {
    progressBar = new ProgressBar(RADIUS, document.getElementById('songProgressBar'), document.getElementById('songProgressBarDot'))
  }, 100)
}

const SONG_LIST = [
  SONGS_DATA.songs[0],
  SONGS_DATA.podcasts[0],
  SONGS_DATA.audioBooks[0],
  SONGS_DATA.tunes[0],
]

const audioPlayer = new AudioPlayer(SONG_LIST, progressBar, {
  audio: songAudio,
  image: songImage,
  name: songName,
  author: songAuthor,
  category: songCategory,
  next: {
    name: nextSongName,
    author: nextSongAuthor,
    image: nextSongImage,
    duration: nextSongDuration
  }
})

// Handle Player Controls

prevButton.addEventListener('click', () => {
  playButton.classList.add('active')
  audioPlayer.prev()
})

playButton.addEventListener('click', () => {
  const isActive = playButton.classList.toggle('active')

  if (isActive) {
    audioPlayer.play()
  } else {
    audioPlayer.pause()
  }
})

nextButton.addEventListener('click', () => {
  playButton.classList.add('active')
  audioPlayer.next()
  updateProgressBar()
})

window.addEventListener('changeSongProgress', () => {
  const progress = progressBar.getProgress()
  audioPlayer.setCurrentTimeProgress(progress)
})

nextButtonPlay.addEventListener('click', () => {
  playButton.classList.add('active')
  audioPlayer.next()
  updateProgressBar()
})

nextButtonSkip.addEventListener('click', () => {
  audioPlayer.skipNext()
  updateProgressBar()
})

songAudio.addEventListener('ended', () => {
  audioPlayer.next()
  updateProgressBar()
})

// Generating song list

function playSong(event, category) {
  let id = event.target.parentNode.id
  if (event.target.nodeName === 'BUTTON') {
    id = event.target.id
  }
  const songIndex = id.split('-')[2]
  const currentSong = SONGS_DATA[category][songIndex]
  const songListSrc = SONG_LIST.reduce((acc, song) => [...acc, !window.location.pathname.includes("index.html") ? `.${song.src}` : song.src], [])

  if (songListSrc.includes(currentSong.src)) {
    audioPlayer.songIndex = songListSrc.indexOf(currentSong.src)
  } else {
    SONG_LIST.unshift(currentSong)
    audioPlayer.songIndex[0]
  }
  audioPlayer.init()
  audioPlayer.play()
  playButton.classList.add('active')
}

function getSongHtml(song, index, category) {

  let listen = "Слушать";

  if (window.location.pathname.includes("en.html")) {
    listen = "Listen";
  }

  if (window.location.pathname.includes("by.html")) {
    listen = "Слухаць";
  }

  const songTimeMinutes = Math.floor(song.time / 60);
  const songTimeSecconds = song.time - songTimeMinutes * 60;
  const time = songTimeSecconds < 10
  ? `${songTimeMinutes}:0${songTimeSecconds}`
  : `${songTimeMinutes}:${songTimeSecconds}`;

  return `
    <div class="tabs__content-card">
      <img src="${!window.location.pathname.includes("index.html") ? '.' : ''}${song.image}" alt="" class="tabs__content-img">
      <h4 class="tabs__card-title">${song.name}</h4>
      <p class="tabs__card-subtitle">${song.author}</p>
      <button id="${'btn-id-' + index}" onclick="playSong(event, '${category}')" class="tabs__card-play">
        <img src="${!window.location.pathname.includes("index.html") ? '.' : ''}./img/play-white.svg" alt="" class="card__play-img">
        <p class="tabs__play-text">${listen}</p>
      </button>
      <div class="tabs__content-time"><span> 0 </span>/${time}</div>
    </div>                                   
  `
}

function generateSongList(category) {
  const categoryKeys = ['songs', 'audioBooks', 'podcasts', 'tunes']
  const categoryArr = [songListElem_1, songListElem_2, songListElem_3, songListElem_4]

  categoryArr[category].innerHTML = '';
  SONGS_DATA[categoryKeys[category]].forEach((song, index) => {
    const songHtml = getSongHtml(song, index, categoryKeys[category]);
    categoryArr[category].innerHTML += songHtml;
  })
}
generateSongList(0)