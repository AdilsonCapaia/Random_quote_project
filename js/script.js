// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// lastQuote, is a array that we put in the last index of the quote that we have shown to the user.
var lastQuote =[];

// controlQuote is for control the first quote, and to begin the control flux,
// that make sure that the quote doesn't repeat until we have shown all of them  
var controlQuote = 0 ;

// declaration of my arrays of objects
var myquotes = [

  {quote : "Don't cry because it's over, smile because it happened.", source :" Dr. Seuss ", citation : 'google sites' , year : 1880, tags :" Life"},
  {quote : " You only live once, but if you do it right, once is enough. ", source : "Mae West", citation : " google's site " , year : 1980, tags :"Humor"},
  {quote : " If you have no critics, you'll likely have no success. ", source : "Malcom X", citation : " Brain Quote " , year : 1967, tags :" Success-Life"},
  {quote : " All that I am, or I hope to be. I owe to my angel mother. ", source : "Abraham Lincoln", citation : " Brain Quote " , year : 1880, tags :" Mother's days"},
  {quote : " Education is not preparation for life; education is life itself.", source : "John Dewey", citation : " Brain Quote " , year : 1990, tags :" Education"},
  {quote : " Education is the most powerful weapon which you can use to change the world.", source : "Nelson Mandela", citation : " Brain Quote " , year : 1920, tags :" Education"}
]

// creation and definition of my  "getRandomQuote " function 
// getRandomQuote will generate a random quote from "myquotes" array and return a quote object.
function getRandomQuote(){
	
	//generate a random position from 0 to the length of array myquotes
   var NewPositionQuote = Math.floor(Math.random() *myquotes.length);
	
   // if controlQuote variable is greater than the length of  array of objects "myquotes" then 
   // "controlQuote" and "lastQuote" array, both are set to zero, this mean that de quotes 
   //can be regenerated again. all quotes have been already displayed.
	
   if( controlQuote >= myquotes.length ) { 
	  controlQuote = 0;  
	  for( var i=0 ; i<= myquotes.length; i +=1){
		lastQuote.pop();  // erase all number of quotes displayed
	  }
   }
	
   // loop that control the quotes that have not  been displayed yet. 
   //but , just if  "controlQuote" is greater than 0. mean that at this moment
   // we can check if the quote has already been displayed
   if(controlQuote > 0){
		
	  // Generate a new random quote index position until find the quote that have not been displayed yet
	  while(lastQuote.indexOf(NewPositionQuote) !== -1){ 
		NewPositionQuote = Math.floor(Math.random() *myquotes.length);
	  }
	  // push the last displayed quote to the array lastQuote
	  lastQuote.push(NewPositionQuote);
	  controlQuote +=1;
	  return myquotes[NewPositionQuote]; // return the quote object to be displayed
   } 
   // the first time and increment, and after we pass to the if statement (controlQuote > 0) for control if the quote has been displayed
   controlQuote +=1; 
   // push the last displayed quote to the array lastQuote
   lastQuote.push(NewPositionQuote);
   // return the quote object to be displayed, the first time and each time that all quote have been displayed
   return myquotes[NewPositionQuote]; 
}

// creation and definition of "random_BG " function 
// will generate the random color to background
function random_BG(){
   document.body.style.backgroundColor = 'rgb( ' + Math.floor(Math.random()*255) + ','+ Math.floor(Math.random() *255) +','+ Math.floor(Math.random()*255)+ ')';
}

// creation and definition of my  "printQuote " function 
// "printQuote " will print the selected  content of the quote to the page .
function printQuote(){
	
   objecto = getRandomQuote();
   var message = '<p class="quote"> ' + objecto['quote']  + '</p> '; 
   message += '<p class="source"> '+ objecto['source'] + '<span class="citation"> ';
   message += objecto['citation'] + ' </span> <span class="year"> '+ objecto['year'] + '</span>';
   message += '<span class="tags">'+ objecto['tags']  +'</span> </p> ';
   random_BG();// call of the random_BG for change the Background first
   var div = document.getElementById('quote-box').innerHTML= message;
   setTimeout('printQuote()', 30000);
}

printQuote();
