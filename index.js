var TIMEOUT_IN_SECS = 3 * 60
var TEMPLATE = '<h1 id="timer"><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>'
var TIMER_CONTAINER_STYLE = "position: fixed; background: rgba(0, 0, 0, 0.5); z-index: +100500; padding: 0px 3px;"
var TIMER_STYLE = "font: 36px/1.5 Arial, Helvetica, sans-serif; color: white;"
var TIMER_CONTAINER_ID = "timer-container"

function addTimerHtmlToCurrentPage(timerContainerId, timerHtml) {
    var timerContainer = document.createElement("div")
    timerContainer.id = timerContainerId
    var bodyTag = document.body
    bodyTag.insertBefore(timerContainer, bodyTag.firstChild)
    timerContainer.innerHTML = timerHtml
}


addTimerHtmlToCurrentPage(TIMER_CONTAINER_ID, TEMPLATE)
document.getElementById(TIMER_CONTAINER_ID).setAttribute("style", TIMER_CONTAINER_STYLE)
document.getElementById("timer").setAttribute("style", TIMER_STYLE)

function getTimestampInSecs() {
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds/1000)
}

function padZero(number) {
  return ("00" + String(number)).slice(-2)
}

var timestampOnStart = getTimestampInSecs()

function displayTimer() {
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0)

  var minutes = Math.floor(secsLeft / 60)
  var seconds = secsLeft - minutes * 60

  document.getElementById('timer-minutes').innerHTML = padZero(minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(seconds)
}

setInterval(displayTimer, 300)
