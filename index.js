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

var INITIAL_TIMEOUT_IN_SECS = 3 * 60
var SUBSEQUENT_TIMEOUT_IN_SECS = 30
var INITIAL_TIMEOUT_IN_SECS = 5 //TODO: remove debug values
var SUBSEQUENT_TIMEOUT_IN_SECS = 3 //TODO: remove debug values
var NAG_MESSAGES = [
  "Happiness is the real sense of fulfillment that comes from hard work.",
  "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
  "There are noLaziness may appear attractive, but work gives satisfaction. ",
  "Without hard work and discipline it is impossible to be a top professional.",
  "There is simply no substitute for hard work when it comes to achieving success.",
  "The beginning is the most important part of the work."
]

function getTimestampInSecs() {
  var timestampInMilliseconds = new Date().getTime()
  return Math.round(timestampInMilliseconds/1000)
}

function getCurrentTimerTime(timeoutInSecs, timestampOnStart) {
  var currentTimestamp = getTimestampInSecs()
  var secsGone = currentTimestamp - timestampOnStart
  var secsLeft = Math.max(timeoutInSecs - secsGone, 0)

  var minutes = Math.floor(secsLeft / 60)
  var seconds = secsLeft - minutes * 60
  return {minutes: minutes, seconds: seconds}
}

function padZero(number) {
  return ("00" + String(number)).slice(-2)
}

function displayTimer(timeoutInSecs, timestampOnStart) {
  time = getCurrentTimerTime(timeoutInSecs, timestampOnStart)
  document.getElementById('timer-minutes').innerHTML = padZero(time.minutes)
  document.getElementById('timer-seconds').innerHTML = padZero(time.seconds)
}

function sleep(ms) {
  // https://stackoverflow.com/a/39914235/3694363
  return new Promise(resolve => setTimeout(resolve, ms));
}

Array.prototype.randomElement = function() {
      return this[Math.floor(Math.random() * this.length)]
}

async function startNagging() {
  timeoutInSecs = INITIAL_TIMEOUT_IN_SECS
  while (true) {
    var timestampOnStart = getTimestampInSecs(timeoutInSecs)
    currentTimerIntervalId = setInterval(displayTimer.bind(null, timeoutInSecs, timestampOnStart), 300)
    await sleep(timeoutInSecs * 1000)
    clearInterval(currentTimerIntervalId)
    alert(NAG_MESSAGES.randomElement())
    timeoutInSecs = SUBSEQUENT_TIMEOUT_IN_SECS
  }
}

startNagging()
