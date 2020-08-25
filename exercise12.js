function decipher(message)
{   
    var newMessage = "";
    for(var i=0; i <= message.length; i++)
    {
        var asciiValue = message.charCodeAt(i); //return ascii code of the character

        if( asciiValue >= 78 && asciiValue <= 90)
        {
            newMessage += String.fromCharCode(asciiValue - 13); //return the character of the ascii code
        }
        else if( asciiValue >=65 && asciiValue <=77)
        {
            newMessage += String.fromCharCode(asciiValue + 13);
        }
        else 
        {
            newMessage += message.charAt(i);
        }

    }

    console.log(newMessage);
}
decipher ("TRAVHF JVGUBHG RQHPNGVBA VF YVXR FVYIRE VA GUR ZVAR");

//[ A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
//   newMessage = String.fromCharCode(((asciiValue - 65 + offset) % 26) + 65);
