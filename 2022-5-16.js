
// 8kyu - Define a card suit


// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'



//P: funciton takes in card
//R: clubs, diamonds, hearts, or spades
//E: ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//P: if card is 3♣ return clubs, etc...






  function defineSuit(card) {
    if (card.includes('♣')) {
      return "clubs"
    }
    else if (card.includes('♦')) {
      return "diamonds"
    }
    else if (card.includes('♥')) {
      return "hearts"
    }
    else if (card.includes('♠')) {
      return "spades"
    }
  }