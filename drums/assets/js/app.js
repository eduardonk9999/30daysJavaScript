const body = document.querySelector('body');
const letter = document.querySelector('.letter');
const audios = document.querySelectorAll('.audio');

function executLetter(numberLetter) {
  audios.forEach(audio => {
    let audioLe = Number(audio.dataset.number);

    if(audioLe === numberLetter) {
      audio.play();
    }

  })
}


body.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 65:
      executLetter(65)
      break;
    case 83:
      executLetter(83)
      break;
    case 68:
      executLetter(68)
      break;
    case 70:
      executLetter(70)
      break;
    case 71:
      executLetter(71)
      break;
    case 72:
      executLetter(72)
      break;
    case 74:
      executLetter(74)
      break;
    case 75:
      executLetter(75)
      break;
    case 76:
      executLetter(76)
      break;
  }
})



