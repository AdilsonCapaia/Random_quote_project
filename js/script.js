// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// declaration of my arrays of objects

var myquotes = [

  {quote : "Don't cry because it's over, smile because it happened.", source :" Dr. Seuss ", citation : 'google sites' , year : 1880},
  {quote : " I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ", source : " Marilyn Monroe ", citation : " google's site " , year : 1980}
]

// creation and definition of my  "getRandomQuote " function 
// getRandomQuote will generate a random quote from "myquotes" array and return a quote object.
function getRandomQuote(){
	console.log(myquotes[Math.floor(Math.random() *myquotes.length)] );
	return myquotes[Math.floor(Math.random() *myquotes.length)] ;
}
// creation and definition of my  "printQuote " function 
// "printQuote " will print the selected  content of the quote to the page .
function printQuote(){
	
	objecto = getRandomQuote()
	var message = '<p class="quote"> ' + objecto['quote']  + '</p> '; 
	message += '<p class="source"> '+ objecto['source'] + '<span class="citation"> ';
    message += objecto['citation'] + ' </span> <span class="year"> '+ objecto['year'] + '</span> </p> ';
	var div = document.getElementById('quote-box').innerHTML= message;
}

printQuote();