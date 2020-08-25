
function splitAmount(billAmount, levelService, numberPeople) {

    if (levelService == "good") {

        console.log( (billAmount+(billAmount * 0.2))/numberPeople    );
 
     } else if (levelService == "fair") {
 
         console.log( (billAmount+(billAmount * 0.15))/numberPeople  );
 
     } else if (levelService == "poor") {
 
         console.log( (billAmount+(billAmount * 0.10))/ numberPeople  );
 
     }
 

}
splitAmount (40,"fair", 2);