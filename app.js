const container = document.querySelector('div');
const trigger = document.querySelector('button');

var quotes = ["Don't watch the clock, Do what it does keep going",
                "All the dinosaurs feared the T-Rex because it worked to become top of the food chain",
                "Everything is hard, Before it is easy",
                "Only way is to finish is to start",
                "Being good is not enough, You have to be best",
                "You have two choices make excuses or make progress",
                "Remember there is no finishing Line"]

function newQuote(){
    var randomNum = Math.floor(Math.random() * (quotes.length));
    container.innerText = quotes[randomNum]; 
}

trigger.addEventListener('click',newQuote);


