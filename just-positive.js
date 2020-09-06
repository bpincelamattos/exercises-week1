function positiveNumbers(myArray)
{
    newArray = [];

    for ( var i=0; i < myArray.length; i++)
    {
        var numb = myArray[i];
        if(numb >= 0 )
        {
            newArray.push(numb);
        }
    }
    console.log(newArray)
}
positiveNumbers([-1, -2, -3]);