// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let quoteBy = document.querySelector('.person');

const quoteArr = [{
    quote: "There Is No Greater Thing You Can Do With Your Life And Your Work Than Follow Your Passions – In A Way That Serves The World And You.",
    person: "Richard Branson"
},
{
    quote: "As soon as something stops being fun, I think it’s time to move on. Life is too short to be unhappy. Waking up stressed and miserable is not a good way to live.",
    person: "Richard Branson"
},
{
    quote: "If you dont like the road you’re walking, start paving another one.",
    person: "Dolly Parton"
},
{
    quote: "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.",
    person: "Helen Keller"
}];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quoteArr.length);

    quote.innerText = quoteArr[random].quote;
    quoteBy.innerText = quoteArr[random].person.toUpperCase();
});