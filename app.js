const container = document.querySelector('div');
const trigger = document.querySelector('button');

var quotes = [
    "Don't watch the clock. Do what it does — keep going. 🕒",
    "All the dinosaurs feared the T-Rex... be that T-Rex. 🦖",
    "Everything is hard before it is easy. 💪",
    "The only way to finish is to start. 🎯",
    "Being good is not enough. You have to be the best. 🔥",
    "Make excuses or make progress. Your call. 🚀",
    "No finishing line. Just keep going. 🏁",
    "Success is built on discipline, not motivation. 🧱",
    "Push yourself. No one's coming. 🏋️",
    "Dream big. Start small. Act now. 💡"
];


function newQuote(){
    var randomNum = Math.floor(Math.random() * quotes.length);
    container.classList.remove("show");
    setTimeout(() => {
        container.innerText = quotes[randomNum]; 
        container.classList.add("show");
    }, 300);
}

document.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
        newQuote();
    }
});

trigger.addEventListener('click',newQuote);

newQuote();