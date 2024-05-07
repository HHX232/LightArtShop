class AudioPlayer {
    songIndex = 0
  
    constructor (songList, progressBar, { audio, image, name, author, category, next }) {
      this.audio = audio
      this.image = image
      this.name = name
      this.author = author
      this.category = category
      this.nextSong = next
  
      this.progressBar = progressBar
      this.songList = songList
  
      this.init()
    }
  
    init (updateAudio = true) {
      this._handle_progress()
  
      if (updateAudio) {
        this.audio.src = !window.location.pathname.includes("index.html") ? `.${this.song.src}` : this.song.src;
      }
  
      this.image.src = !window.location.pathname.includes("index.html") ? `.${this.song.image}` : this.song.image;
      this.name.innerText = this.song.name
      this.author.innerText = this.song.author
      this.category.innerText = this.song.category
  
      const nextSong = this.songList[this.songIndex + 1]
  
      if (!nextSong) {
        document.getElementById('next-in-order-empty').classList.add('show')
        document.getElementById('next-in-order').style.visibility = 'hidden'
        return
      }
      document.getElementById('next-in-order-empty').classList.remove('show')
      document.getElementById('next-in-order').style.visibility = 'visible'
  
      this.nextSong.name.innerText = nextSong.name
      this.nextSong.author.innerText = nextSong.author
      this.nextSong.image.src = !window.location.pathname.includes("index.html") ? `.${nextSong.image}` : nextSong.image;
  
      const songTimeMinutes = Math.floor(nextSong.time / 60);
      const songTimeSecconds = nextSong.time - songTimeMinutes * 60;
      const time = songTimeSecconds < 10
      ? `${songTimeMinutes}:0${songTimeSecconds}`
      : `${songTimeMinutes}:${songTimeSecconds}`;
  
      this.nextSong.duration.innerText = `${time} мин`
    }
  
    get song () {
      return this.songList[this.songIndex]
    }
  
    play () {
      this.audio.play()
    }
  
    pause () {
      this.audio.pause()
    }
  
    skipNext () {
      this.songList = this.songList.filter((_, index) => index !== this.songIndex + 1)
      this.init(false)
    }
  
    setCurrentTimeProgress (progress) {
      const duration = this.audio.duration
      const time = duration * progress / 100
      this.audio.currentTime = time || 0
    }
  
    prev () {
      if (this.songIndex > 0) {
        this.songIndex--
        this.init()
        this.setCurrentTimeProgress(0)
        this.play()
      }
    }
  
    next () {
      if (this.songIndex < this.songList.length - 1) {
        this.songIndex++
        this.init()
        this.setCurrentTimeProgress(0)
        this.play()
      }
    }
  
    _handle_progress () {
      this.audio.addEventListener('timeupdate', () => {
        const progress = this.audio.currentTime / this.audio.duration * 100
        if (this.progressBar.isReady) {
          this.progressBar.setProgress(progress)
        }
      })
    }
  }