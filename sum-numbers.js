function sumNumbers(myArray)
{
    sum = 0;

    for ( i=0; i < myArray.length; i++)
    {
        sum += myArray[i];        
    }
console.log(sum);
}
sumNumbers([1, 4, 8]);