

$(document).ready(function(){
  $("#groceries").submit(function(event) {
    event.preventDefault();
    let groceries = [];
    let newList = [];
    const item = $("input#item").val();
    const item2 = $("input#item2").val();
    const item3 = $("input#item3").val(); 
    groceries.push (item)
    groceries.push (item2)
    groceries.push (item3)
    groceries = groceries.sort();
    groceries.forEach(function(item) {
      newList.push(item[0].toUpperCase().concat(item.slice(1)));
    })
    const sentence = $("input#sentence").val();
    let newSentenceArray = [];
    const words = sentence.split(' ');
    words.forEach(function(word){
      if(word.length >= 3){
        newSentenceArray.push(word);
      }
    })
    newSentence = newSentence.reverse()
    newSentence = newSentence.join(" ");
    console.log(newSentence);
    $("#output").text(newList);
  
    
  })

//suits
// card value
//first foreach
//second foreach
let deck = []
const suits = ["spades", "hearts", "clubs", "diamonds"];
const values = [2,3,4,5,6,7,8,9,10,"jack", "queen", "king", "ace"]
suits.forEach(function(suit){
  values.forEach(function(value) {
    deck.push(<li>value of suit</li>);
    $("#output").append(deck);

  })
})



})