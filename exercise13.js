function leetspeak(message)
{   
    var leet = ["4", "3", "6", "1", "0", "5", "7"];
    var alpha = ["A", "E", "G", "L","O", "S", "T"];
    var newCase = "";
    var newMessage = "";
    var eachString ;
    var newString ; 
    
    newCase = message.toUpperCase(); //putting all the letter uppercase LEET
    
    for (var i=0; i <= message.length; i++) //reading the message i=0
    {   
        eachString = newCase.charAt(i); // x<-L
        for (var j=0; j<= alpha.length; j++) //comparing to each alpha index j=0 | J=1| J=2
        {
            newString = alpha[j];
            
            if (eachString == newString) //se L=A? |L=E? |L=G
            {
                 newMessage += leet[j]; 
            } 
        }
    }
    console.log (newMessage);
}
leetspeak('leet');
