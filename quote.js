// Variables
const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const quoteBy = document.querySelector(".person");

const API = "https://api.kanye.rest";

btn.addEventListener("click", getQuotes);

async function getQuotes() {
  const response = await fetch(API);
  const data = await response.json();

  displayQuotes(data);
}

function displayQuotes({quote}) {
  quote.innerHTML = `"${quote}"`;
}
