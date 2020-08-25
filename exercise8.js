

function printBox(width,height)
{
    var i; // rows
    var j; //columns
    var fullLine = ""; //var to print 1st and last line
    var hollowLine = ""; //var to print hollow lines

    for (i=1; i <= height; i++)   // rows
    { 
        if( i == 1 || i == height ) //checking if is 1st or last row
        {
            for (j=1; j<=width; j++)  //columns
            {
                fullLine = fullLine + "*";
                if (j == width)      //checking if is the end of the column
                {
                    console.log(fullLine);
                    fullLine = "";
                }
            }
        }
        else                              // if is not the 1st or last row
        {
            for (j=1; j<=width; j++)      //column
            {
                if(j == 1 || j == width )  // if is first or last column 
                {
                    hollowLine = hollowLine + "*"; //print *
                }
                else                                // if is not first or last column
                {             
                    hollowLine = hollowLine + " ";  // print space
                }
                
                if ( j== width)                     //if is the last column
                {
                    console.log(hollowLine);
                    hollowLine = "";
                }
            }
            
        }        
    }
}
    
printBox(5,5);