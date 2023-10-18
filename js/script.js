/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


// Create an array of objects that store literary quotes. The four objects will include quote, source, year, and citation properties.
var quotes = [
  {
    quote: "It matters not what someone is born, but what they grow to be.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
  },
  {
    quote: "Not all those who wander are lost.",
    source: "J.R.R. Tolkein",
    citation: "The Lord of the Rings",
    year: 1954,
  },
  {
    quote: "All we have to decide is what to do with the time that is given us.",
    source: "J.R.R. Tolkein",
    citation: "The Fellowship of the Ring",
    year: 1954,
  },
  {
    quote: "Beware; for I am fearless, and therefore powerful.",
    source: "Mary Shelley",
    citation: "Frankenstein",
    year: 1818,
  },
  {
    quote: "Two roads diverged in a wood, and I - I took the road less traveled by",
    source: "Robert Frost",
    citation: "The Road Not Taken",
    year: 1916,
  },
  {
    quote: "You can trod me in the very dirt, but still like dust, I rise.",
    source: "Maya Angelou",
    citation: "Still I Rise",
    year: 1978,
  },

];


// Create a function that generates a random number from zero to the length of the array, assign it to a variable, and returns a random object from the quotes array.
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}


// Create the printQuote() function that calls the getRandomQuote function, build a string of HTML and quote properties, and display random quote to the browser using a string.
function printQuote() {
  var quoteObject = getRandomQuote();
  var html = `<p class = 'quote'> ${quoteObject.quote} </p>
  <p class = 'source'> ${quoteObject.source}`;

  if (quoteObject.citation) {
    html += `<span class = 'citation'>${quoteObject.citation}</span>`;
  }
  if (quoteObject.year) {
    html += `<span class = 'year'>${quoteObject.year}</span>`;
  } else {
    html += `</p>`;
  }
  document.getElementById('quote-box').innerHTML = html;
}

//Run printQuote function when initial page loads
printQuote();

//Event listener to respond to the "show another quote" button click.
document.getElementById('load-quote').addEventListener("click", printQuote, false);