function matrixMultiply(myArray1,myArray2)
{
    var result = [[0,0],[0,0]];
   
    for (i=0; i < myArray1.length; i++) //accessing outer array 
    {
        for (j=0 ; j < myArray1.length; j++) //accessing inner array
        {
            for (k=0; k < myArray1.length; k++)
            {
                result[i][j] = result[i][j] + (myArray1[i][k] * myArray2[k][j]);   //how to some instead of concat
            }
        }
    }
console.log(result);      
}
matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]);