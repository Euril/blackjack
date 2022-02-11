/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let phase
let winner
let round
let score
let playerHand 
let playerTotal
let dealerHand
let dealerTotal

let cardToRemove
let cardPicked
let deck1
let discardDeck

/*------------------------ Cached Element References ------------------------*/
let playerMenu = document.getElementById('playerArea')
let playGame = document.getElementById('messageArea')


/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.btn-group').addEventListener('click', evt =>{
  if(evt.target.id === 'hit'){
    console.log("did the hit")
  }
  if(evt.target.id === 'stand'){
    console.log('did the stand')
  }
})


/*-------------------------------- Functions --------------------------------*/