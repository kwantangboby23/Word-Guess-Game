
var wordBank = ['Madonna', 'Jackson', 'Beatles', 'Queen', 'BonJovi'];
var wins = 0;
var losses = 0;
var currentWord = []; //q u e e n
var hideWord = [];  // _ _ _ _ _
var guessedLetter = []; // a  
var guessesLeft = 8;
var availableLetters = [];
var gameRunning = false;
var guess; //q 
var  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];//computer random pick  ex) queen
    


    console.log(pickedWord);



    for (var i =0; i < pickedWord.length; i++) {
        if (pickedWord[i] === '' ){
            hideWord.push('');
        }   else{
            hideWord.push('_');
        }
    }
    
    for (var i =0; i < pickedWord.length; i++) {
        currentWord[i] = pickedWord.charAt(i).toString().toLowerCase();
    }



    availableLetters = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'];

    
    

function indexOfAll(array, search) {
    var i = array.indexOf(search), indexes=[];
    while(i !== -1){
        indexes.push(i);
        i = array.indexOf(search, ++i);
    }
    return indexes;
}
   
document.onkeyup = function(event) {
    guess= String.fromCharCode(event.keyCode).toLowerCase(); 
    
    guessesLeft--;
    
    if(availableLetters.indexOf(guess) !== -1 ){
        indexOfAll(currentWord, guess);
        console.log("indexofALL  "+indexOfAll(currentWord,guess ));
        console.log("guessedLetter : " + currentWord.indexOf(guess));
    
        
        
        if(currentWord.indexOf(guess) == -1) {
            guessedLetter.push(guess);
        } else {
            for(var i=0; i<indexOfAll(currentWord, guess).length; i++){
                hideWord[indexOfAll(currentWord, guess)[i]] = guess;
            }
        }
    } else {
        alert("Please type in letter")
    }  
    
    
    
    if (guessesLeft == 0){
        losses ++;
        alert("You Lose!"); reset();
    }   if (currentWord.join("") == hideWord.join("")){
        wins ++;
        alert("You Win!"); reset();
    }

    
    
    
    
    
    
    console.log(guessesLeft);

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("hideword").innerHTML = hideWord;
    document.getElementById("guesses").innerHTML = guessedLetter;
    document.getElementById("guessesleft").innerHTML = guessesLeft;

}

function reset(){
    this.currentWord = []; 
    this.hideWord = [];  
    this.guessedLetter = []; 
    this.guessesLeft = 8;

    var  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    for (var i =0; i < pickedWord.length; i++) {
        if (pickedWord[i] === '' ){
            hideWord.push('');
        }   else{
            hideWord.push('_');
        }
    }
    
    for (var i =0; i < pickedWord.length; i++) {
        currentWord[i] = pickedWord.charAt(i).toString().toLowerCase();
    }
}



 


    

   

