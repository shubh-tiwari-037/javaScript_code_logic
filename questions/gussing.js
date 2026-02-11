const max=prompt("enter max limit");
const random=Math.floor( Math.random() *max) +1;

let guess=prompt("guess a number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
      if (guess==random){
        console.log("your are right ! random number was", random);
        break;
     }
      else if(guess< random){
        guess=prompt("you are too small ");
        break;
     }
     else {
        guess=prompt("you are too large please tray again ");
     }
}