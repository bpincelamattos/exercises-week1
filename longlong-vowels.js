function longLongVowels(word){
    
    var newMessage= "";

    for (var i=0; i <= word.length; i++) //lendo letra por letra
    {   
        var currentLetter = word.charAt(i); //currentletter = g
        var nextLetter = word.charAt(i+1); //nextletter =   o
        
        if (currentLetter === nextLetter) //is g=0
        { 
            if(currentLetter == "a" || currentLetter == "e" || currentLetter == "i" || 
            currentLetter == "o" || currentLetter == "u" )
            {
                newMessage += currentLetter.repeat(3);
            }
        }
        newMessage += word.charAt(i); 
    }
    console.log(newMessage);
}
longLongVowels("mousse");