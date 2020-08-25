function factors(numb)
{
    var myArray = [];
    var i;

    for(i=0; i <= numb; i++)
    {
        if(numb % i == 0)
        {
            myArray.push(i);

        }

    }

    console.log(myArray);


}
factors(120);