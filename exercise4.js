
function totalAmount(billAmount, levelService) {

    if (levelService == "good") {

       console.log( billAmount+(billAmount * 0.2));

    } else if (levelService == "fair") {

        console.log( billAmount+(billAmount * 0.15));

    } else if (levelService == "poor") {

        console.log( billAmount+(billAmount * 0.10));

    }

}
totalAmount(40,"fair");