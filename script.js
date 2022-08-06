const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

//random quote function
function randomQuote() {
    //loading quote
    quoteBtn.innerHTML = "Loading...";
    //fetching random quotes/data from the API and parsing it into JavaScript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";
    });
}

soundBtn.addEventListener("click", ()=> {
    //the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerHTML}`);
    speechSynthesis.speak(utterance); //speak method of speechSynthesis speaks the utternance
});

copyBtn.addEventListener("click", ()=> {
    //copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=> {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweetUrl);
});

quoteBtn.addEventListener("click", randomQuote);