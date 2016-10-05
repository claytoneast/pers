let spinner
let spinnerLocation = 1 // spinner1 in view
let currentRotation = 0

window.onload = function () {
  initializePage()
  spinner = document.getElementById('spinner-container')
}

function initializePage () {
  let uiControls = document.getElementsByClassName('ui-controls-item')
  Array.from(uiControls).forEach(function (elem) {
    elem.addEventListener('click', changeTiles, false)
  })
}

function changeTiles (e) {
  let targetTileId = e.target.dataset.spinnertarget
  if (spinnerLocation === 1) {
    if (targetTileId === 'spinner2') {
      spin('clockwise')
      spinnerLocation = 2
    } else if (targetTileId === 'spinner3') {
      spin('counterclockwise')
      spinnerLocation = 3
    }
  } else if (spinnerLocation === 2) {
    if (targetTileId === 'spinner1') {
      spin('counterclockwise')
      spinnerLocation = 1
    } else if (targetTileId === 'spinner3') {
      spin('clockwise')
      spinnerLocation = 3
    }
  } else if (spinnerLocation === 3) {
    if (targetTileId === 'spinner1') {
      spin('clockwise')
      spinnerLocation = 1
    } else if (targetTileId === 'spinner2') {
      spin('counterclockwise')
      spinnerLocation = 2
    }
  }
}

function spin (direction) {
  let nextRotation = direction === 'clockwise' ? currentRotation + 120 : currentRotation - 120
  spinner.style.transform = `rotate(${nextRotation}deg)`
  currentRotation = nextRotation
}
