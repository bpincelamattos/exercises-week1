function rockPaperScissors(player1,player2)
{
    if (player1 === "rock" & player2 === 'scissors')
    {
        console.log("Player 1");
    } else if (player1 === 'scissors' & player2 === 'rock')
    {
        console.log('Player 2');
    } else if (player1 === 'rock' & player2 === 'paper')
    {
        console.log('Player 2');
    } else if (player1 === 'paper' & player2 === "rock")
    {
        console.log('Player 1');
    } else if (player1 === 'paper' & player2 === 'scissors')
    {
        console.log('Player 2');
    } else if (player1 === 'scissors' & player2 === 'paper')
    {
        console.log('Player 1');
    } else if (player1 === player2)
    {
        console.log('Draw');
    }

}
rockPaperScissors('paper', 'scissors');