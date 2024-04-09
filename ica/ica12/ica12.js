const btn = document.querySelector("#js-new-quote");
const answerBtn = document.querySelector("#js-tweet");
const quoteText = document.querySelector("#js-quote-text");
const answerText = document.querySelector("#js-answer-text");

let answer = '';

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

btn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', getAnswer);

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        displayQuote(json['question']);
        answer = json['answer'];  
        answerText.textContent = "";  
    } catch (err) {
        console.error("Error fetching quote:", err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(quote) {
    quoteText.textContent = quote;
}

function getAnswer() {
    answerText.textContent = answer;
}


getQuote();

