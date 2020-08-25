function cipher(message)
{  
    var asciiValue; 
    var newMessage = "";

    for (var i=0; i <= message.length; i++)
    {   
        asciiValue = message.charCodeAt(i); //charCodeAt return ascii value of a character
        //charAt return the character in this position
        if( asciiValue >= 65 && asciiValue <= 77)
        {
            newMessage = newMessage + String.fromCharCode ( asciiValue + 13); //fromCharCode takes the ascii code and returs the letter
        }                                                                        
        else if (asciiValue >= 78 && asciiValue <= 90)
        {
            newMessage = newMessage + String.fromCharCode ( asciiValue - 13); 
        }
        else 
        {
            newMessage += message.charAt(i);   
        }
   }
   console.log(newMessage);
}
cipher ("GENIUS WITHOUT EDUCATION IS LIKE SILVER IN THE MINE");