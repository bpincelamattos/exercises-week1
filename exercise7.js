
function printSquare(numb){

    var line;
    var column;

    var sameLine = ""; //var to concatenate * in the line

    for (line=0; line<numb; line++){

        for (column=1; column <= numb; column++ ) {
        
            sameLine = sameLine + "*"; // putting together in the same line

        if(column === numb)           
        {
            console.log(sameLine);
            sameLine = "";           
        }
    }
 }
}
printSquare(5);

