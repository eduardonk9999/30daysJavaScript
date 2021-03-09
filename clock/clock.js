const lineSconds = document.querySelector('.line.clock-seconds')
const lineMinuts = document.querySelector('.line.clock-minutes')
const lineHors = document.querySelector('.line.clock-hours')

function segundos() {
  const time = new Date();
  
  const seconds = time.getSeconds()
  const secondsTimes = ((seconds / 60) * 360) + 90
  lineSconds.style.transform = `rotate(${secondsTimes}deg)`

  const minuts = time.getMinutes();
  const minutsTime = ((minuts / 60) * 360) + 90
  lineMinuts.style.transform = `rotate(${minutsTime}deg)`

  const hors = time.getHours();
  const horsTime = ((hors / 12) * 360) + 90
  lineHors.style.transform = `rotate(${horsTime}deg)`

}

setInterval(segundos, 1000)