function leetspeak(message)
{
    var leet = {A:'4', E:'3', G:'6', L:'1', O:'0', S:'5', T:'7'}; //changing the alphabet
    var newCase = "";
    var newMessage = "";
    
    
    newCase = message.toUpperCase(); //putting all the letter uppercase LEET
    
    for (var i=0; i <=message.length; i++) //reading the message
    {
        if (leet[newCase.charAt(i)]) //comparing if the string in that index is equal(true) to one of the new alphabet letters 
        {                                        //charAt gives you the string in that index
            newMessage += newCase.replace(newCase.charAt(i), leet[newCase.charAt(i)] ); //replacing new character
        }
    }
    console.log (newMessage);
}
leetspeak('lees');