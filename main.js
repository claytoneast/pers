let spinner
let spinnerLocation = 1
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
  let chipInners = document.getElementsByClassName('spinner-chip-inner')
  Array.from(chipInners).forEach(function (elem) {
    elem.style.paddingRight = elem.offsetWidth - elem.clientWidth + 'px'
    elem.style.paddingBottom = elem.offsetHeight - elem.clientHeight + 'px'
  })
}

function changeTiles (e) {
  let targetTileId = e.target.dataset.spinnertarget
  if (spinnerLocation === 1) {
    if (targetTileId === 'spinner2') {
      spin('clockwise')
    } else if (targetTileId === 'spinner3') {
      spin('counterclockwise')
    }
  } else if (spinnerLocation === 2) {
    if (targetTileId === 'spinner1') {
      spin('counterclockwise')
    } else if (targetTileId === 'spinner3') {
      spin('clockwise')
    }
  } else if (spinnerLocation === 3) {
    if (targetTileId === 'spinner1') {
      spin('clockwise')
    } else if (targetTileId === 'spinner2') {
      spin('counterclockwise')
    }
  }
  spinnerLocation = parseInt(targetTileId.replace('spinner', ''), 10)
  moveUiControlsBackground(targetTileId, e.target)
}

function moveUiControlsBackground (tileId, targetButton) {
  let uiControlsBackground = document.getElementById('ui-controls-background')
  uiControlsBackground.classList = []
  uiControlsBackground.classList.add(tileId)
  let uiControls = document.getElementsByClassName('ui-controls-item')
  Array.from(uiControls).forEach(function (elem) {
    elem.classList.remove('active')
  })
  targetButton.classList.add('active')
}

function spin (direction) {
  let nextRotation = direction === 'clockwise' ? currentRotation + 120 : currentRotation - 120
  spinner.style.transform = `rotate(${nextRotation}deg)`
  currentRotation = nextRotation
}
