let hourElement = document.getElementById('hours')
let minuteElement = document.getElementById('minutes')
let secondElement = document.getElementById('seconds')
let millisecondElement = document.getElementById('milliseconds')

const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
const btnReset = document.getElementById('reset')
const btnCircle = document.getElementById('circle')

let results = document.getElementById('results')

let hours = 0
let minutes = 0
let seconds = 0
let milliseconds = 0
let interval
let resultNumber = 0

btnStart.addEventListener('click', () => {
   clearInterval(interval)
   interval = setInterval(startTimer, 10)
})

btnStop.addEventListener('click', () => {
   clearInterval(interval)
})

btnReset.addEventListener('click', () => {
   clearInterval(interval)
   resetTimer()
})

btnCircle.addEventListener('click', () => {
   clearInterval(interval)
   fnResults()
})

function startTimer() {
   milliseconds++
   millisecondElement.innerText = milliseconds < 10 ? '0' + milliseconds : milliseconds
   if (milliseconds > 99) {
      seconds++
      milliseconds = 0
      millisecondElement.innerText = '0' + milliseconds
   }
   secondElement.innerText = seconds < 10 ? '0' + seconds : seconds
   if (seconds > 60) {
      minutes++
      seconds = 0
      secondElement.innerText = '0' + seconds
   }
   minuteElement.innerText = minutes < 10 ? '0' + minutes : minutes
   if (minutes > 60) {
      hours++
      minutes = 0
      minuteElement.innerText = '0' + minutes
   }
   hourElement.innerText = hours < 10 ? '0' + hours : hours
   if (hours > 24) {
      hours = 0
      hourElement.innerText = '0' + hours
   }
}

function resetTimer() {
   hours = 0
   minutes = 0
   seconds = 0
   milliseconds = 0
   hourElement.innerText = '0' + hours
   minuteElement.innerText = '0' + minutes
   secondElement.innerText = '0' + seconds
   millisecondElement.innerText = '0' + milliseconds
   results.innerText = ''
   resultNumber = 0
}

function fnResults() {
   clearInterval(interval)
   resultNumber++
   let block = document.createElement('div')
   results.append(block)
   block.classList.add('block-padding')
   // block.innerText = `Result-${resultNumber} ${hours}:${minutes}:${seconds}:${milliseconds}`
   block.innerText = `Result-${resultNumber} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '0' + milliseconds : milliseconds}`
   interval = setInterval(startTimer, 10)
}
