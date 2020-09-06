function matrixAdd (matrix1, matrix2)
{
    var result = [];
    
    for (i=0; i < matrix1.length; i++) //accessing outer array 
    {
        result[i]=[]; //why do i have to define only result[i]

        for (j=0 ; j < matrix1.length; j++) //accessing inner array
        {
          result[i][j] = matrix1[i][j] + matrix2[i][j];           

        }
    }
console.log(result);      
}
matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]);