/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let phase
let winner
let round
let score = 0
let playerHand = []

let dealerHand = []

//seperated remove for removing card renders from specific array
let p1CardToRemove
let dCardToRemove
//let cardPicked

let discardDeck = []

//let blackjackDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

//test deck for Ace testing
// let blackjackDeck = ["dA","dQ","dK","dJ","d10","d09","hA","hQ","hK","hJ","h10","cA","cQ","cK","cJ","c10","sA","sQ","sK","sJ","s10"]
let blackjackDeck = ['dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','dA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA','cA','dA','cA']
//test deck for low number testing
//let blackjackDeck = ["d04","d03","d02", "d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02","d04","d03","d02"]

let playerTotal = 0
let dealerTotal = 0
let valueHolder
let totalHolder
let tempArray = []

/*------------------------ Cached Element References ------------------------*/
let playerMenu = document.getElementById('btn-group')
//let playGame = document.getElementById('messageArea')
let playGame = document.getElementById('phaseGame')
let scoreArea = document.getElementById('scoreboard')

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
    document.querySelector(".playerMove").style.visibility="hidden"
    setTimeout(dealerPhase, 2000)
  }
})
playGame.addEventListener('click', evt => {
  if(evt.target.id ==="phaseGame" && phase === "INIT"){
    console.log('start a phase')
    drawHands()
  }
})



/*-------------------------------- Functions --------------------------------*/
init()


function init(){
  phase = "INIT"
  playGame.textContent = "Click Here to Start"
  scoreArea.textContent = `Score: ${score}p`
  console.log(blackjackDeck.length)
  if(blackjackDeck.length < 156){
    shuffleDeck()
  }
}


//function to take card from blackjackDeck
function drawCard(){
  let randIdx = Math.floor(Math.random()*blackjackDeck.length)
  cardPicked = blackjackDeck.splice(randIdx, 1)[0]
}

//function for first turn draw phase
function drawHands(){
  phase = "DRAW"
  playGame.textContent = "Drawing Cards"
  handleHit()
  setTimeout(dealerHit, 1000)
  setTimeout(handleHit, 2500)
  setTimeout(dealerDrawPhase,4000)
  //setTimeout(dealerHit, 4000)
  
  setTimeout(playerPhase, 5000)

}

function playerPhase(){
  phase= "PLAYER1"
  playGame.textContent = "Player Phase"
  document.querySelector(".playerMove").style.visibility="visible"
  // if(playerTotal === "Bust"){
  //   playGame.textContent = "You Busted"
  //   document.querySelector(".playerMove").style.visibility="hidden"
  //   score = score - 1000 
  //   setTimeout(clearPhase, 2000)
  // }
}

function dealerPhase(){
  phase = "DEALER"
  playGame.textContent = "Dealer Phase"
  dRender()
  cardValue(dealerHand)
  dTotalRender()
  if(dealerTotal < 17){
    setTimeout(dealerHit,1500) //recursion of the function to keep drawing until 17+ 
    setTimeout(dealerPhase,2000)
  }
  if(dealerTotal > 16 && dealerTotal <= 21){
    setTimeout(comparePhase,2000)
  }
  if(dealerTotal === 'Bust'){
    score = score + 1000
    setTimeout(clearPhase,1000)  
  }
}

function comparePhase(){
  phase = "COMPARE"
  playGame.textContent = "comparing text holder"
  if(playerTotal === dealerTotal){
    playGame.textContent = "Push"
  }else if(playerTotal > dealerTotal){
    playGame.textContent = "Win"
    score = score + 1000
  }else{
    playGame.textContent = "Dealer Wins"
    score = score - 1000
  }
  setTimeout(clearPhase, 2000)
}

function clearPhase(){
  phase = "CLEAR"
  playerHand=[]
  p1Render()
  dealerHand=[]
  dRender()
  playerTotal = "-"
  player1TotalElem.textContent = `( ${playerTotal} )`
  dealerTotal = "-"
  dealerTotalElem.textContent = `( ${dealerTotal} )`

  //playerHandElem.setAttribute('class', "card large outline")
  //dealerHandElem.setAttribute('class', "card large outline")
  init()
}

// function clearHand(handArray){
//   handArray.forEach((card, idx) =>{
//     handArray.pop
//   })
// }

function handleHit(){
  drawCard()
  playerHand.push(cardPicked)
  p1Render()
  cardValue(playerHand)
  //handTotal(playerHand)
  p1TotalRender()
  if(playerTotal === "Bust"){
    playGame.textContent = "You Busted"
    document.querySelector(".playerMove").style.visibility="hidden"
    score = score - 1000 
    setTimeout(clearPhase, 2000)
  }
}
function dealerDrawPhase(){
  drawCard()
  dealerHand.push(cardPicked)
  let newCard = document.createElement("div")
  newCard.setAttribute("class", `card large back-blue`)
  dealerHandElem.appendChild(newCard)
  console.log("Draw Hand " + dealerHand)
}
function dealerHit(){
  drawCard()
  dealerHand.push(cardPicked)
  dRender()
  cardValue(dealerHand)
  //handTotal(dealerHand)
  dTotalRender()
  console.log(dealerHand)
}

//function to add card value
function cardValue(handArray){
  totalHolder = 0
  tempArray = [] // empty tempArray
  tempArray = [...handArray] //fill tempArray
  
  tempArray.forEach(function(card){
    valueHolder = card.slice(1)
    
    if(isNaN(parseInt(valueHolder)) === false){
      totalHolder = totalHolder + parseInt(valueHolder)
      }
    if(valueHolder === 'Q' || valueHolder === 'K' || valueHolder === 'J'){
      totalHolder += 10
    }
    if(valueHolder === 'A'){
      aceCardValue()
    }
    // if(card[0] === 'A' && totalHolder > 21){
    //   totalHolder = totalHolder - 10
    // }
      //console.log(totalHolder)
    })
  
  if(totalHolder > 21){
    totalHolder = 'Bust'
  }
  
  //ocationTotal.textContent = `( ${totalHolder} )`
}

//function to deal with Ace 11 or 1 situtation
function aceCardValue(){

    if(valueHolder === 'A' && totalHolder < 11){
      totalHolder += 11
      if(totalHolder >21){
        totalHolder = totalHolder - 10
      }
    }else if(valueHolder === 'A' && totalHolder >= 11){
      totalHolder += 1
    }
    
}
function p1TotalRender(){
  playerTotal = totalHolder
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
  newCard.setAttribute("class", `card large ${cardPicked}`)
  //newCard.innerHTML = ""
  location.appendChild(newCard)
}

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

function shuffleDeck(){
  console.log("Shuffled deck")
  blackjackDeck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02",
  "dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
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