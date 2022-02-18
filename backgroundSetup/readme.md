# Background Sandbox
I used css and html to make my background, added this folder to show it here. Learned a cool way to make curved text, so I felt it was a good experience. I'm disappointed no one commented on my background 😥 on the presentation. 

<!-- HTML -->
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blackjack Background</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="background.css">
  <script defer src="app.js"></script>
</head>
<body>
  <!-- <h1 class="blackack">BLACKJACK</h1> -->
  <div id="dealerArea" class="container">
    <div id="dealerHand"></div>
    <div id="text">BLACKJACK</div>
    
  </div>
  <!-- <div id="discardArea" class="container">
    <div id="discardPile" class="card large outline"></div> -->
    <h1 id="dealerTotal">Pay <span class="redText">3 to 2</span></h1> 
  <!-- <div id="messageArea" class="container"> -->
    
    <svg id="messageArea" viewBox="0 0 500 500">
      <!-- <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" /> -->
      <path id="curve" d="M29,150 C170,301 330,301 470,150"/>

      <text width="500">
        <textPath id="textPath" alignment-baseline="top" xlink:href="#curve">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dealer must stand on 17 and must draw to 16
        </textPath>
        
        <path id="curve2" d="M29,180 C170,330 360,301 470,190"/>
        
        <textPath id="border1" xlink:href="#curve2">------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</textPath>
        <path id="curve3" d="M29,220 C170,370 390,301 470,230"/>
        <textPath id="border2" xlink:href="#curve3">------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</textPath>
      </text>
    </svg>
    
    <!-- <h1 id="phaseGame">Draw!</h1> -->
  </div>
    
  <!-- <h3 id="playerTotal">( - )</h3>
  <div id="playerArea" class="container">
    
    <div id="playerHand"></div>
    
  </div>
  <div class="playerMove btn-group ">
    <button class ="moves">Moves</button>
    <div class="moveList">
      <button id="hit">Hit</button>
      <button class="blank"></button>
      <button class="blank"></button>
      <button id="stand">Stand</button>
    </div>
    <button class ="movesBet">Bet</button>
    <div class="betList">
      <button id="bet100">100</button>
      <button class="blank"></button>
      <button class="blank"></button>
      <button id="bet500">500</button>
    </div>
  </div>
  <div id="betting"></div>
  <footer id="scoreboard"></footer> -->
</body>
</html>
```

<!-- Style CSS -->
```
body {  
  display: grid; 
  /* background: rgb(39,68,68);
background: linear-gradient(180deg, rgba(39,68,68,1) 0%, rgba(50,86,86,1) 80%, rgba(75,119,119,1) 100%);  */
background: #274444;
background: linear-gradient(180deg, rgba(39,68,68,1) 30%, rgba(50,86,86,1) 70%, #4b7777 100%);
/* background-image: url(../images/felt.png); */
/* background-size:auto; */
  display: grid; 
  grid-template-columns: 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66% 6.66%; 
  grid-template-rows: 20% 5% 30% 5% 20% 10% 10%; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". . . . . . Dealer Dealer Dealer . . . . . ."
    ". . . . . . DealerTotal DealerTotal DealerTotal . . . . . ."
    ". . . . . Message Message Message Message Message . . . . ."
    ". Player2 Player2 . . . PlayerTotal PlayerTotal PlayerTotal PlayerMenu PlayerMenu . Player3 Player3 ."
    ". Player2 Player2 . . . Player Player Player PlayerMenu PlayerMenu . Player3 Player3 ."
    ". . . . . . Betting Betting Betting PlayerMenu PlayerMenu . . . ."
    ". . . . . . Score Score Score PlayerMenu PlayerMenu . . . ."; 
  width:98vw;
  height:98vh;
  color:white;
}

#dealerArea{
  grid-area:Dealer;
  grid-area: 1 / 6 / 2 / 11; 
  /* border-style:none; */
  border-radius: 10%;
  font-size:80px;
  align-self:center;
  
  font-family: 'Frank Ruhl Libre', serif;
  font-weight:500;
}
#dealerTotal{
  grid-area:DealerTotal;
  grid-area:1/7/3/10;
  place-self: center;
  margin: 90px 0 0 0;
  }
.redText{
  color:red;
}


/* #discardArea{
  grid-area:2/8/3/9;
  border-style:dotted;
} */
#messageArea{
  grid-area:Message;
  grid-area:1/2/12/15;
  /* border-style:dotted; */
  place-self: center;
  font-size:20px;
  font-family: 'Frank Ruhl Libre', serif;
  font-weight:400;
  fill:rgb(209, 178, 0);
  
  
}


#curve{
  fill:transparent;
}

#border1{
  fill:white;
  font-size:larger;
  margin:0;
  padding:0;
  
  letter-spacing:-3px;
}
#border2{
  fill:white;
  font-size:larger;
  margin:0;
  padding:0;
  
  letter-spacing:-3px;
}
/* #playerTotal{
  grid-area:PlayerTotal;
  grid-area:4/7/5/10;
  place-self: center;
  margin: 0 0;
  
}

#playerArea{
  grid-area:Player;
  grid-area:5/7/6/10;
  border-style:dotted;
  border-radius: 10%;
}
#scoreboard{
  grid-area:Score;
  grid-area:7/7/8/10;
  place-self:center;
  border-style: solid none none none;
  border-radius: 70%;
  padding:10px 20px;
  background-color:black;

}

#playerHand{
  width:50%;
  margin-left:auto;
  margin-right:auto;
  justify-content: center;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, max-content));
}
#dealerHand{
  width:50%;
  
  margin-left:auto;
  margin-right:auto;
  justify-content: center;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, max-content));
} */

.playerMove{
  grid-area:PlayerMenu;
  grid-area:4/10/8/12;
  
}

.moves{
  visibility: visible;
}

.moveList{
  visibility:hidden;
  
}

.movesBet{
  visibility:hidden;
}
.betList{
  visibility: hidden;
}




.btn-group button {
  background-color: black; 
  border: 2px solid #D5AF37;
  border-radius:5%;
  color: white; 
  margin: 10px 0 0 10px;
  padding: 10px 10px; 
  
  width:50%;
  display:block;
  
}
/*prevents double borders*/
/* .btn-group button:not(:last-child) {
  border-bottom: none;
} */
.moveList button:hover {
  background: rgb(162,134,44);
background: linear-gradient(350deg, rgba(162,134,44,1) 30%, rgba(212,175,55,1) 60%, rgba(255,255,255,1) 100%);
  font-weight:bolder;
  color:black;

}
```