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

//let blackjackDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

//test deck for A logic test
let blackjackDeck = ["dA","dQ","dK","dJ","d10","d09","hA","hQ","hK","hJ","h10","cA","cQ","cK","cJ","c10","sA","sQ","sK","sJ","s10"]

let playerTotal = 0
let dealerTotal = 0
let valueHolder
let totalHolder = 0

/*------------------------ Cached Element References ------------------------*/
let playerMenu = document.getElementById('btn-group')
let playGame = document.getElementById('messageArea')

let playerHandElem = document.getElementById('playerHand')
let dealerHandElem = document.getElementById('dealerHand')

let player1TotalElem = document.getElementById('playerTotal')
let dealerTotalElem = document.getElementById('dealerTotal')

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.btn-group').addEventListener('click', evt =>{
  if(evt.target.id === 'hit'){
    //console.log("did the hit")
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
  setTimeout(dealerHit, 1000)
  setTimeout(handleHit, 2500)
  setTimeout(dealerHit, 4000)
}

function handleHit(){
  drawCard()
  cardValue(cardPicked)
  playerHand.push(valueHolder)
  p1Render(cardPicked)
}

function dealerHit(){
  drawCard()
  cardValue(cardPicked)
  dealerHand.push(valueHolder)
  dRender(cardPicked)
}

//function to add card value
function cardValue(card){
  valueHolder = card.slice(1)
  console.log(valueHolder)
  if(isNaN(parseInt(valueHolder)) === false){
    //if(totalHolder > 21 )
    valueHolder = (parseInt(valueHolder))
    }
  console.log(typeof valueHolder)
  }

//function to add up hand to display total
function handTotal(handArray){
  
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
  p1CardToRemove=cardPicked
  playerHandElem.classList.add(cardPicked)
  //playerTotal = totalHolder
  //player1TotalElem.textContent = `( ${playerTotal} )` //player total render

  console.log(`Player: ${playerHand}`)
  //console.log(playerTotal)
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
  dCardToRemove=cardPicked
  dealerHandElem.classList.add(cardPicked)
  //dealerTotal = totalHolder
  //dealerTotalElem.textContent = `( ${dealerTotal} )` //dealer total render
  
  console.log(`Dealer: ${dealerHand}`)
  console.log(dealerTotal)
}



//trashbin 



  /*
  //function to check handArrays like dealer or player to calculate card values
function cardValue(handArray){
  valueHolder = 0
  totalHolder = 0 //had to take 2 variables for this for now because valueHolder ends up holding strings... not sure what to do
  handArray.forEach(function(card){
    valueHolder = card.slice(1)
    console.log(handArray)
    if(isNaN(parseInt(valueHolder)) === true){
      //if(totalHolder > 21 )
      if(valueHolder === 'Q' || valueHolder === 'K' || valueHolder === 'J'){
        totalHolder += 10
      }
      if(valueHolder ==='A' && totalHolder > 21){
        totalHolder += 1
      }
      if(valueHolder ==='A' && totalHolder < 21){
        totalHolder +=11
      }
    }
    else{
      totalHolder += (parseInt(valueHolder))
    }
  })
}*/