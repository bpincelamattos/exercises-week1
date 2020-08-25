//var dollarAmount

function tipAmount(billAmount, levelService) {

    if (levelService == "good") {

       console.log(billAmount * 0.2);

    } else if (levelService == "fair") {

        console.log(billAmount * 0.15);

    } else if (levelService == "poor") {

        console.log(billAmount * 0.10);

    }

}
tipAmount (100,"poor");