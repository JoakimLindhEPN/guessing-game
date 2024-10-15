const form = document.querySelector('#guessForm')
const guess = document.querySelector('#guess')
const output = document.querySelector('#output')
const guesses = document.querySelector('#guesses')

const correctNumber = Math.round(Math.random() * 100)

let numberOfGuesses = 0
console.log(correctNumber)
let gamePlayable = true

form.addEventListener('submit', e => {
  e.preventDefault();
  
  if(!gamePlayable) return
  
  if(guess.value === '') return
  
  if(guess.value < 0 || guess.value > 100) {
    output.textContent = 'You need to enter a value between 1 and 100!'
    return
  }
  
  numberOfGuesses++
  
  if(guess.value < correctNumber) {
    output.textContent = 'To Low'
  } 
  else if(guess.value > correctNumber) {
    output.textContent = 'To High'
  }
  else {
    output.textContent = 'You guessed the number!! Number of guesses: ' + numberOfGuesses
    gameOver()
  }
  
  const li = document.createElement('li');
  li.innerText = guess.value;
  
  guesses.appendChild(li);
  
  guess.value = ''
})


const gameOver = () => {
  gamePlayable = false
  guess.disabled = true
  let counter = 5
  
  const toast = document.createElement('div')
  toast.className = 'toast'
  
  toast.id = 'toast'
  toast.textContent = 'Restarting game in ' + counter
  document.body.appendChild(toast)
  
  
  setInterval(() => {
    counter --
    toast.textContent = 'Restarting game in ' + counter
    
    if(counter === 0) {
      window.location.reload()
    }
  }, 1000)
}
