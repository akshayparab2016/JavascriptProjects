var randomGenNo =  Math.floor(Math.random() * 100 + 1);
// document.getElementById("demo1").innerHTML = randomGenNo;
var guess = 1;

function inputValidate(){
var guessedNo = document.getElementById("guessField").value;
   if(guessedNo == randomGenNo){     
document.getElementById("demo").innerHTML = 
("<h2 id='success'>" + "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN <b>" + guess + "</b> GUESSES" + "</h2>");
   document.getElementById("myForm").reset(); 
   }
    else if(guessedNo > randomGenNo){     
       guess++;
        document.getElementById("demo").innerHTML = ("<h2 id='smaller'>" + "OOPS SORRY!! TRY A 'SMALLER' NUMBER" + "</h2>");
   } 
   else{ 
       guess++; 
       document.getElementById("demo").innerHTML = ("<h2 id='greater'>" + "OOPS SORRY!! TRY A 'GREATER' NUMBER" + "</h2>");
   }    
} 

function resetAll(){
document.getElementById("myForm").reset();
    window.location.reload(true); 
    }