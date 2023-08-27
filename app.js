const container = document.querySelector('div');
const trig = document.querySelector('button');
const h1 = document.querySelector('h1');
var quotes = ["House blowing up builds character.","All the dinosaurs feared the T-Rex.","Ever see 127 Hours?","Captain Deadpool! No, just Deadpool.","Fourth wall break inside of a fourth wall break? That's like... 16 walls!","Superhero landing! She's going to do a superhero landing!"]

function newQuote(){
    var randomNum = Math.floor(Math.random() * (quotes.length));
    container.innerText = quotes[randomNum]; 
}
trig.addEventListener('click',newQuote);
