/*-------------------------------- Constants --------------------------------*/ 
const sixDeckOrig = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

//audio constants
const dealCard = new Audio("../audio/cardDeal.ogg")
dealCard.volume = .2

/*---------------------------- Variables (state) ----------------------------*/
let phase
let score = 2000
let goal = 30000
let playerHand = []
let bet
let outcome = ""  //⬅️ who is winner of compare

let dealerHand = []

let playerSplitHand = []



let discardDeck = []

let blackjackDeck = [...sixDeckOrig]

//test deck for Ace testing
//  let blackjackDeck = ["dA","dK","dK","dK","d10","dK","hA","hK","hK","hJ","h10","cA","cQ","cK","cJ","cK","sA","sK","sK","sK","s10",'dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA']
//let blackjackDeck = ['dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA']
//test deck for low number testing
//let blackjackDeck = ["d04","d03","d02", "d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02", "d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02", "d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02", "d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02"]

let playerTotal = 0
let dealerTotal = 0
let valueHolder
let totalHolder
let tempArray = []

/*------------------------ Cached Element References ------------------------*/
let playerMenu = document.getElementById('btn-group')
let playGame = document.getElementById('phaseGame')
let scoreArea = document.getElementById('scoreboard')
let betArea = document.getElementById('betting')

let playerHandElem = document.getElementById('playerHand')
let dealerHandElem = document.getElementById('dealerHand')

let player1TotalElem = document.getElementById('playerTotal')
let dealerTotalElem = document.getElementById('dealerTotal')

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.moveList').addEventListener('click', evt =>{
  if(evt.target.id === 'hit'){
    handleHit()
  }
  if(evt.target.id === 'double'){
    double()
  }
  if(evt.target.id === 'stand'){
    document.querySelector(".moveList").style.visibility="hidden"
    document.querySelector("#double").style.visibility="hidden"
    setTimeout(dealerPhase, 2000)
  }
})
playGame.addEventListener('click', evt => {
  if(evt.target.id ==="phaseGame" && phase === "INIT"){
    betPhase()
  }
  if(evt.target.id ==="phaseGame" && phase === "BROKE"){
    takeLoan()
  }
})
document.querySelector('.betList').addEventListener('click', evt =>{
  if(evt.target.id === 'bet100'){
    handleBet(100)
    let newChip = document.createElement('img')
    newChip.setAttribute("class", 'chip')
    newChip.src = "../images/100Chip.png"
    betArea.appendChild(newChip)
  }
  if(evt.target.id === 'bet500'){
    handleBet(500)
    let newChip = document.createElement('img')
    newChip.setAttribute("class", 'chip')
    newChip.src = "../images/500Chip.png"
    betArea.appendChild(newChip)
  }
  if(evt.target.id === 'bet1000'){
    handleBet(1000)
    let newChip = document.createElement('img')
    newChip.setAttribute("class", 'chip')
    newChip.src = "../images/1000Chip.png"
    betArea.appendChild(newChip)
  }
})



/*-------------------------------- Functions --------------------------------*/
init()

function init(){
  phase = "INIT"
  playGame.textContent = "Click Here to Start"
  scoreArea.textContent = `Score: ${score}p`
  
  if(score > goal){
    congrat()
  }
  if(score < 100){
    brokePhase()
  }
  if(blackjackDeck.length < 156){
    playGame.textContent = "Shuffling Deck"
    shuffleDeck()
    setTimeout(init, 5000)
  }
}
function betPhase(){
  phase = "BET"
  playGame.textContent="Place Your Bet"
  document.querySelector(".betList").style.visibility="visible"
}

//function to take card from blackjackDeck
function drawCard(){
  let randIdx = Math.floor(Math.random()*blackjackDeck.length)
  cardPicked = blackjackDeck.splice(randIdx, 1)[0]
  dealCard.play()
}

//function for first turn draw phase
function drawHands(){
  phase = "DRAW"
  playGame.textContent = "Drawing Cards"
  handleHit()
  setTimeout(dealerHit, 1000)
  setTimeout(handleHit, 2500)
  setTimeout(dealerDrawPhase,4000)
  
  setTimeout(playerPhase, 6000)
}


function playerPhase(){
  phase= "PLAYER1"
  playGame.textContent = "Player Phase"
  document.querySelector(".moveList").style.visibility="visible"
  if((playerTotal === 11 || playerTotal === 10 || playerTotal === 9) && playerHand.length === 2){
    document.querySelector("#double").style.visibility="visible"
  } 
  
  if(playerTotal === 21 && playerHand.length === 2){
    playGame.classList.add('gold-gradient-text')
    playGame.textContent = "BLACKJACK"
    outcome = "BJ"
    document.querySelector(".moveList").style.visibility="hidden"
    setTimeout(blackjackPhase,4000)  
  }
  
}
//function in case player gets blackjack, checks if dealer also got BJ to tie or its the players win
function blackjackPhase(){
  phase= "BLACKJACK"
  playGame.textContent= "Checking"

  dRender()
  cardValue(dealerHand)
  dTotalRender()
  
  if(dealerTotal === 21){
    playGame.removeAttribute('class')
    playGame.textContent = "Tie"
    outcome = "T"
    setTimeout(clearPhase,2000)  
  }else{
    playGame.textContent = "BLACKJACK"
    setTimeout(clearPhase,2000)
  }
}

function dealerPhase(){
  phase = "DEALER"
  playGame.removeAttribute('class')
  
  playGame.textContent = "Dealer Phase"
  dRender()
  cardValue(dealerHand)
  dTotalRender()
  
  //can't use a while loop here because setTimeout doesn't work with while loops and I want to simulate a dealer drawing one by one
  if(dealerTotal < 17){
    setTimeout(dealerHit,1500) //recursion of the function to keep drawing until 17+ 
    setTimeout(dealerPhase,2000)
  }
  if(dealerTotal > 16 && dealerTotal <= 21){
    setTimeout(comparePhase,2000)
  }
  if(dealerTotal === 'Bust'){
    outcome = "W"
    playGame.textContent = "You Win"
    setTimeout(clearPhase,3000)  
  }
}

function comparePhase(){
  phase = "COMPARE"
  playGame.textContent = "comparing text holder"
  if(playerTotal === dealerTotal){
    playGame.textContent = "Push"
    outcome = "T"
  }else if(playerTotal > dealerTotal){
    playGame.textContent = "You Win"
    outcome = "W"

  }else{
    playGame.textContent = "Dealer Wins"
    outcome = "L"
  }
  setTimeout(clearPhase, 3000)
}

function clearPhase(){
  phase = "CLEAR"
  playGame.setAttribute
  playGame.removeAttribute('class')
  playGame.textContent="Clearing Board"
  betPayout(bet)
  
  playerHand=[]
  p1Render()
  dealerHand=[]
  dRender()
  betArea.textContent=""
  playerTotal = "-"
  player1TotalElem.textContent = `( ${playerTotal} )`
  player1TotalElem.removeAttribute("class") //removes color text
  dealerTotal = "-"
  dealerTotalElem.textContent = `( ${dealerTotal} )`
  outcome = ""
  setTimeout(init, 2000)
}

function handleHit(){
  drawCard()
  playerHand.push(cardPicked)
  p1Render()
  cardValue(playerHand)
  document.querySelector("#double").style.visibility="hidden"
  //handTotal(playerHand)
  p1TotalRender()
  if(playerTotal === 21 && playerHand.length > 2){
    playGame.classList.add('red-gradient-text')
    playGame.textContent = "21"
    document.querySelector(".moveList").style.visibility="hidden"
    setTimeout(dealerPhase, 3000)
  }
  if(playerTotal === "Bust"){
    playGame.textContent = "You Busted"
    document.querySelector(".moveList").style.visibility="hidden"
    // score = score - 1000 
    outcome = "L"

    setTimeout(clearPhase, 3000)
  }
}

//function to make the 2nd drawn card for the dealer in the draw phase to show up as the back of the card instead of its front
function dealerDrawPhase(){
  drawCard()
  dealerHand.push(cardPicked)
  let newCard = document.createElement("div")
  newCard.setAttribute("class", `card back-blue`)
  dealerHandElem.appendChild(newCard)
}

function dealerHit(){
  drawCard()
  dealerHand.push(cardPicked)
  dRender()
  cardValue(dealerHand)
  dTotalRender()
}

//function to add card value
function cardValue(handArray){
  totalHolder = 0
  tempArray = [] // empty tempArray
  tempArray = [...handArray] //fill tempArray
  let isThereAnAce = false
  tempArray.forEach(function(card){
    valueHolder = card.slice(1)

    if(isNaN(parseInt(valueHolder)) === false){
      totalHolder = totalHolder + parseInt(valueHolder)
      }
    if(valueHolder === 'Q' || valueHolder === 'K' || valueHolder === 'J'){
      totalHolder += 10
    }
    //I gave up on figuring out Ace logic had to search on stackoverflow for hints found amazing pseudocode and now I feel dum for not figuring it out myself... kept adding 11 then minusing when I should have done it the other way add 1 and if under 12 add 10...
    if(valueHolder === 'A'){
      totalHolder+= 1
      isThereAnAce = true
    }
    })
  if(totalHolder < 12 && isThereAnAce === true){
    totalHolder +=10
  }
  if(totalHolder > 21){
    totalHolder = 'Bust'
  }
  
}

function double(){
  bet = bet * 2
  betArea.textContent=`Bet: ${bet}p`
  handleHit()
  document.querySelector(".moveList").style.visibility="hidden"
  document.querySelector("#double").style.visibility="hidden"
  setTimeout(dealerPhase, 3000)
}

//1. If a player's first two cards are of the same denomination, such as two jacks or two sixes, they may choose to treat them as two separate hands when their turn comes around. 
//2. The amount of the original bet then goes on one of the cards, and an equal amount must be placed as a bet on the other card.
//3. The player first plays the hand to their left by standing or hitting one or more times; only then is the hand to the right played. The two hands are thus treated separately, and the dealer settles with each on its own merits. 
//4. With a pair of aces, the player is given one card for each ace and may not draw again. Also, if a ten-card is dealt to one of these aces, the payoff is equal to the bet (not one and one-half to one, as with a blackjack at any other time).
function splitPairs(){
  let holder = playerHand.pop
  playerSplitHand.push(holder)
}

function handleBet(num){
  bet = num
  if((score - bet) < 0){
    playGame.textContent="Not Enough Chips"
    document.querySelector(".betList").style.visibility="hidden"
    setTimeout(init, 2000)
  }else{
    betArea.textContent=`Bet: ${bet}p`
    
    document.querySelector(".betList").style.visibility="hidden"
    setTimeout(drawHands, 1000)
    }
  }

function betPayout(bet){
  if(outcome === "W"){
    score = score + bet
  }
  if(outcome === "L"){
    score = score - bet
  }
  if(outcome === "BJ"){
    score = score + (bet * 1.5)
  }
  if(outcome === "T"){
    score = score + 0
  }
}

function p1TotalRender(){
  playerTotal = totalHolder
  player1TotalElem.removeAttribute("class") //removes color text
  if(playerTotal === "Bust"){
    player1TotalElem.classList.add("redText")
  }
  if(playerTotal < 21){
    player1TotalElem.classList.add("greenText")
  }
  if(playerTotal === 21){
    player1TotalElem.classList.add("gold-gradient-text")
  }
  player1TotalElem.textContent = `( ${playerTotal} )` //player total render
}
function dTotalRender(){
  dealerTotal = totalHolder
  dealerTotalElem.textContent = `( ${dealerTotal} )`
}

function p1Render(){
  playerHandElem.innerHTML= ""
  playerHand.forEach((card, idx)=>{
  renderCard(card, idx, playerHandElem)
})
}
function dRender(){
  dealerHandElem.innerHTML= ""
  dealerHand.forEach((card, idx)=>{
    renderCard(card, idx, dealerHandElem)
  })
}

function renderCard(cardPicked, idx, location){
  let newCard = document.createElement("div")
  //newCard.classList.add("card", "large", `${cardPicked}`)
  newCard.setAttribute("class", `card ${cardPicked}`)
  //works as I thought it would it animates the entire hand LOL 
  //newCard.classList.add("animate__animated", "animate__slideInDown")
  //newCard.innerHTML = ""
  location.appendChild(newCard)
}

function shuffleDeck(){
  console.log("Shuffled deck")
  blackjackDeck = [...sixDeckOrig]
}

function messageColor(){
  if(outcome = "W"){
    playGame.classList.add("red-gradient-text")
  }else if(outcome = "L"){
    playGame.classList.add("redText")
  }else if(outcome = "BJ"){
    playGame.classList.add("gold-gradient-text")
  }else if(outcome = "T"){
    playGame.removeAttribute('class')
  }
}

//function to celebrate achievement...
function congrat(){
    playGame.textContent="Broke the House, Congrats"
    confetti.start(2000)
}
//how did it come to this 😭
function brokePhase(){
  phase="BROKE"
  playGame.textContent="Click to take loan"
}
function takeLoan(){
  score += 3000
  playGame.textContent="3000p loan taken"
  setTimeout(init, 3000)
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

// function p1Render(cardPicked){
//   // Remove outline class when first card is picked
//   if (playerHand.length === 1) {  
//     playerHandElem.classList.remove("outline")
//   }
//    // Removes previous picked card
//     if(playerHand.length > 1){
//       playerHandElem.classList.remove(p1CardToRemove)
//     }
//   p1CardToRemove=cardPicked
//   playerHandElem.classList.add(cardPicked)
//   playerTotal = totalHolder
//   player1TotalElem.textContent = `( ${playerTotal} )` //player total render

//   //console.log(`Player: ${playerHand}`)
//   //console.log(playerTotal)
// }

/*
//function to add card value
function cardValue(card){
  valueHolder = card.slice(1)
  //console.log(valueHolder)
  if(isNaN(parseInt(valueHolder)) === false){
    valueHolder = (parseInt(valueHolder))
    }
  if(valueHolder === 'Q' || valueHolder === 'K' || valueHolder === 'J'){
    valueHolder = 10
  }
  
}

//function to add up hand to display total, and deal with A 11 or 1 situtation, and check during player and dealer phase if they got over 21
function handTotal(handArray){
  totalHolder = 0
  handArray.forEach(function(card){
    
    if(card === 'A' && totalHolder < 11){
      totalHolder += 11
      if(totalHolder >21){
        totalHolder = totalHolder - 10
      }
    }else if(card === 'A' && totalHolder >= 11){
      totalHolder += 1
    }else {
    totalHolder += card
    }
    //console.log(totalHolder)
  })
  if(totalHolder > 21){
    totalHolder = 'Bust'
  }
} */

// function dealerHit(){
//   drawCard()
//   cardValue(cardPicked)
//   dealerHand.push(valueHolder)
  
//   handTotal(dealerHand)
//   dRender(cardPicked)
// }

/*
function dRender(cardPicked){
  // Remove outline class when first card is picked
  if (dealerHand.length === 1) {  
    dealerHandElem.classList.remove("outline")
  }
   // Removes previous picked card
    if(dealerHand.length > 1){
      dealerHandElem.classList.remove(dCardToRemove)
    }
  dCardToRemove=cardPicked
  dealerHandElem.classList.add(cardPicked)
  dealerTotal = totalHolder
  dealerTotalElem.textContent = `( ${dealerTotal} )` //dealer total render
  
  //console.log(`Dealer: ${dealerHand}`)
  //console.log(dealerTotal)
}*/

//inside player phase
// if(playerTotal === "Bust"){
  //   playGame.textContent = "You Busted"
  //   document.querySelector(".playerMove").style.visibility="hidden"
  //   score = score - 1000 
  //   setTimeout(clearPhase, 2000)
  // }