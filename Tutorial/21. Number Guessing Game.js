const minimun=1;
const maximum=100;
const answer=Math.floor(Math.random()*(maximum - minimun+1))+minimun;

let attemp=0;
let guess;
let ruuning =true;

while (ruuning) {
    guess=window.prompt(`Enter the number betweeb ${minimun} - ${maximum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if(guess<minimun || guess>maximum){
        window.alert("Please enter within range");
    }else{
        attemp++;
        if(guess<answer){
            window.alert("To Low try again!");
      
        }else if(guess>answer){
            window.alert("Too High try again!");
          
        }else{
            window.alert(`Hurrah Right ${guess}! and done in ${attemp} attemps `)
            ruuning=false;
        }
    }

}