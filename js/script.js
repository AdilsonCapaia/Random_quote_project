// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// global variable for control the shown quote. to not appear twice.
var lastQuote = [];
// declaration of my arrays of objects

var myquotes = [

  {quote : "Don't cry because it's over, smile because it happened.", source :" Dr. Seuss ", citation : "google sites" , year : 1880,tags: "life"},
  {quote : " You only live once, but if you do it right, once is enough.", source : "  Mae West ", citation : " google's site " , year : 1980, tags: "Humor, life"},
  {quote : " Reality continues to ruin my life.", source : "Bill Watterson ", citation : " The Complete Calvin and Hobbes " , year : 1969, tags: " humor"},
  {quote : " If you have no critics, you will likely have no success", source : "Malcom X", citation : " Brain quote site " , year : 1967, tags: " Success"}
]

// creation and definition of my  "getRandomQuote " function 
// getRandomQuote will generate a random quote from "myquotes" array and return a quote object.
function getRandomQuote(){
	var Q = myquotes[Math.floor(Math.random() *myquotes.length)];
	console.log( Q);
	lastQuote.push(Q);
	
	return Q ;
}
// creation and definition of my  "printQuote " function 
// "printQuote " will print the selected  content of the quote to the page .
function printQuote(){
	
	objecto = getRandomQuote();
	var message = '<p class="quote"> ' + objecto['quote']  + '</p> '; 
	message += '<p class="source"> '+ objecto['source'] + '<span class="citation"> ';
    message += objecto['citation'] + ' </span> <span class="year"> '+ objecto['year'] + '</span> </p> ';
	var div = document.getElementById('quote-box').innerHTML = message;
}

printQuote();