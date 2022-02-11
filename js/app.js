/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let phase
let winner
let round
let score
let playerHand = []

let dealerHand = []

//seperated remove for removing card renders from specific array
let p1CardToRemove
let dCardToRemove
//let cardPicked

let discardDeck

let blackjackDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

//definded elsewhere in app.js
// let playerTotal
// let dealerTotal

/*------------------------ Cached Element References ------------------------*/
let playerMenu = document.getElementById('btn-group')
let playGame = document.getElementById('messageArea')

let playerHandElem = document.getElementById('playerHand')
let dealerHandElem = document.getElementById('dealerHand')

let player1Total = document.getElementById('playerTotal')
let dealerTotal = document.getElementById('dealerTotal')

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.btn-group').addEventListener('click', evt =>{
  if(evt.target.id === 'hit'){
    console.log("did the hit")
    handleHit()
  }
  if(evt.target.id === 'stand'){
    console.log('did the stand')
  }
})
playGame.addEventListener('click', evt => {
  if(evt.target.id ==="phaseGame"){
    console.log('start a phase')
    drawHands()
  }
})



/*-------------------------------- Functions --------------------------------*/

//function to take card from blackjackDeck
function drawCard(){
  let randIdx = Math.floor(Math.random()*blackjackDeck.length)
  cardPicked = blackjackDeck.splice(randIdx, 1)[0]
}

//function for first turn draw phase
function drawHands(){
  handleHit()
  setTimeout(dealerHit, 2000)
  setTimeout(handleHit, 3000)
  setTimeout(dealerHit, 4000)
}

function handleHit(){
  drawCard()
  playerHand.push(cardPicked)
  p1Render(cardPicked)
}

function dealerHit(){
  drawCard()
  dealerHand.push(cardPicked)
  dRender(cardPicked)
}

function p1Render(cardPicked){
  // Remove outline class when first card is picked
  if (playerHand.length === 1) {  
    playerHandElem.classList.remove("outline")
  }
   // Removes previous picked card from deck 2 class list
    if(playerHand.length > 1){
      playerHandElem.classList.remove(p1CardToRemove)
    }
  console.log(cardPicked)
  p1CardToRemove=cardPicked
  playerHandElem.classList.add(cardPicked)
  console.log(`Player: ${playerHand}`)
}

function dRender(cardPicked){
  // Remove outline class when first card is picked
  if (dealerHand.length === 1) {  
    dealerHandElem.classList.remove("outline")
  }
   // Removes previous picked card from deck 2 class list
    if(dealerHand.length > 1){
      dealerHandElem.classList.remove(dCardToRemove)
    }
  console.log(cardPicked)
  dCardToRemove=cardPicked
  dealerHandElem.classList.add(cardPicked)
  console.log(`Dealer: ${dealerHand}`)
}