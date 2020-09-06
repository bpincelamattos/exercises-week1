function ticTacToe (myArray)
{
    var result;

    if (myArray[0][0] == 'X' && myArray[0][1] == 'X' && myArray[0][2] == 'X')
    {
        result = 'X';
    } else if (myArray[1][0] == 'X' && myArray[1][1] == 'X' && myArray[1][2] == 'X')
    {
        result = 'X';
    } else if (myArray[2][0] == 'X' && myArray[2][1] == 'X' && myArray[2][2] == 'X')
    {
        result = 'X';
    } else if (myArray[0][0] == 'X' && myArray[1][0] == 'X' && myArray[2][0] == 'X')
    {
        result = 'X';
    }else if (myArray[0][1] == 'X' && myArray[1][1] == 'X' && myArray[2][1] == 'X')
    {
        result = 'X';
    } else if (myArray[0][2] == 'X' && myArray[1][2] == 'X' && myArray[2][2] == 'X')
    {
        result = 'X';
    } else if (myArray[0][0] == 'X' && myArray[1][1] == 'X' && myArray[2][2] == 'X')
    {
        result = 'X';
    } else if (myArray[0][2] == 'X' && myArray[1][1] == 'X' && myArray[2][0] == 'X')
    {
        result = 'X';
    } else if (myArray[0][0] == 'O' && myArray[0][1] == 'O' && myArray[0][2] == 'O')
    {
        result = 'O';
    } else if (myArray[1][0] == 'O' && myArray[1][1] == 'O' && myArray[1][2] == 'O')
    {
        result = 'O';
    } else if (myArray[2][0] == 'O' && myArray[2][1] == 'O' && myArray[2][2] == 'O')
    {
        result = 'O';
    } else if (myArray[0][0] == 'O' && myArray[1][0] == 'O' && myArray[2][0] == 'O')
    {
        result = 'O';
    }else if (myArray[0][1] == 'O' && myArray[1][1] == 'O' && myArray[2][1] == 'O')
    {
        result = 'O';
    } else if (myArray[0][2] == 'O' && myArray[1][2] == 'O' && myArray[2][2] == 'O')
    {
        result = 'O';
    } else if (myArray[0][0] == 'O' && myArray[1][1] == 'O' && myArray[2][2] == 'O')
    {
        result = 'O';
    } else if (myArray[0][2] == 'O' && myArray[1][1] == 'O' && myArray[2][0] == 'O')
    {
        result = 'O';
    } else {
        result = 'null';
    }
    console.log(result);
}
ticTacToe([
    ['O', 'X', 'O'],
    ['O', 'O', null],
    [null, 'X', 'X']
    ])
  