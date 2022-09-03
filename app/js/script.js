let countEl = document.getElementById('count-el')
let countGuest = document.getElementById('count-guest')
let resoult = 0

function add1() {
  resoult = resoult + 1
  countEl.textContent = resoult
}

function add2() {
  resoult = resoult + 2
  countEl.textContent = resoult
}

function add3() {
  resoult = resoult + 3
  countEl.textContent = resoult
}

function reset() {
    resoult = 0
    countEl.textContent = resoult
}


function adding1() {
    resoult = resoult + 1
    countGuest.textContent = resoult
  }
  
  function adding2() {
    resoult = resoult + 2
    countGuest.textContent = resoult
  }
  
  function adding3() {
    resoult = resoult + 3
    countGuest.textContent = resoult
  }

  function reseting() {
    resoult = 0
    countGuest.textContent = resoult
  }