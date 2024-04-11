const btn = document.querySelector("#js-new-quote");
const quoteText = document.querySelector("#js-quote-text");

// Use HTTPS if available
const endpoint = 'https://dog-api.kinduff.com/api/facts?number=5';

btn.addEventListener('click', getQuote);





async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        displayFacts(json.facts); 
    } catch (err) {
        console.error("Error fetching dog fact:", err);
        alert('Failed to fetch new dog fact');
    }
}

function displayFacts(facts) {
    quoteText.textContent = facts.join('\n');
}

getQuote();  