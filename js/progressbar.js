const changeSongProgressEvent = new Event('changeSongProgress')

class ProgressBar {
  radius = 0
  progressElement = null
  dotElement = null
  _current_progress = 0
  _start_x = 0
  _start_y = 0
  isReady = true

  constructor(radius, progressElement, dotElement) {
    this.radius = radius
    this.progressElement = progressElement
    this.dotElement = dotElement

    if (radius && progressElement && dotElement) {
      this._reset()
      this._handleUserInput()
      this._update_start_position()
    } else {
      throw new Error('Invalid ProgressBar Data')
    }
  }

  _update_start_position() {
    setTimeout(() => {
      this._start_x = this.dotElement.getBoundingClientRect().x
      this._start_y = this.dotElement.getBoundingClientRect().y
    }, 100)
  }

  setProgress(progress) {
    if (progress < 0) throw new Error('Invalid Progress')

    progress = this._normalizeProgress(progress)
    this._current_progress = progress
    this._setProgressBarLine(progress)
    const dotPosition = this._getDotPosition(progress)
    this._setDotPosition(dotPosition)
  }

  getProgress() {
    return this._current_progress
  }

  _reset() {
    this.progressElement.style.backgroundImage = 'conic-gradient(#012C4A 100%, transparent 0)'
    this.dotElement.style.transform = `translate(0px, ${this.radius}px)`
    this._update_start_position()
  }

  _normalizeProgress(progress) {
    return progress - Math.floor(progress / 100) * 100
  }

  // Line

  _setProgressBarLine(progress) {
    this.progressElement.style.backgroundImage = `conic-gradient(#012C4A ${100 - progress}%, transparent 0)`
  }

  // Dot

  _getDotPosition(progress) {
    const iy = (progress > 25 && progress < 75) ? -1 : 1
    const peace = 360 / 100
    const angle = peace * progress * Math.PI / 180
    const x = Math.sin(angle) * this.radius
    const y = iy * Math.sqrt(Math.pow(this.radius, 2) - Math.pow(x, 2))
    return { x, y }
  }

  _setDotPosition(dotPosition) {
    this.dotElement.style.transform = `translate(${-dotPosition.x}px, ${dotPosition.y}px)`
  }

  // Dot User Input Handler

  _handleUserInput() {
    if (this._isMobile()) {
      this.dotElement.addEventListener('pointerdown', this._handlePointerDown.bind(this), true)
    } else {
      this.dotElement.addEventListener('mousedown', this._handleMouseDown.bind(this), true)
    }
  }

  _handleMouseDown() {
    this.isReady = false
    const mouseMoveListener = new AbortController()

    window.addEventListener('mousemove', event => {
      this._handleMouseMove.bind(this)(event, { startX: this._start_x, startY: this._start_y })
    }, {
      signal: mouseMoveListener.signal
    })
    window.addEventListener('mouseup', () => {
      if (!this.isReady) {
        this.isReady = true
        dispatchEvent(changeSongProgressEvent)
      }
      mouseMoveListener.abort()
    }, true)
  }

  _handlePointerDown() {
    this.isReady = false
    const mouseMoveListener = new AbortController()
    window.onscroll = () => { return false }
    window.addEventListener('pointermove', event => {
      this._handleMouseMove.bind(this)(event, { startX: this._start_x, startY: this._start_y })
    }, {
      signal: mouseMoveListener.signal
    })
    window.addEventListener('pointerup', () => {
      if (!this.isReady) {
        this.isReady = true
        dispatchEvent(changeSongProgressEvent)
      }
      mouseMoveListener.abort()
    }, true)
  }

  _handleMouseMove({ x, y }, { startX, startY }) {
    const dx = x - startX - this.dotElement.getBoundingClientRect().width / 2
    const dy = y - startY - this.dotElement.getBoundingClientRect().height / 2

    let progressY = 100 / (this.radius * 2) * -dy
    progressY = progressY < 0 ? 0 : progressY
    progressY = progressY > 100 ? 100 : progressY
    progressY /= 2

    let progressX = 100 / (this.radius * 2) * dx
    progressX = Math.abs(progressX) > 50 ? 50 : Math.abs(progressX);

    if (progressY > 25) {
      if (dx < 0) {
        progressY += 50
        progressX = 50 - progressX;
      } else {
        progressX = 50 + progressX;
        progressY = 150 - progressY
      }
    } else {
      if (dx > 0) {
        progressX = 150 - progressX
        progressY = 150 - progressY
      }
    }

    let resultProgress = (progressY + progressX) / 3

    this.setProgress(resultProgress)
  }

  _isMobile() {
    let check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) { check = true }
    })(navigator.userAgent || navigator.vendor || window.opera)
    return check
  };
}
