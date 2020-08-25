function printBanner(text)
{
    var i; //column
    var banner ="";
    var size = text.length;

    for (i=1; i <= size + 4; i++)
    {
        banner = banner + "*";

         if ( i == size + 4)
        {
            console.log(banner);
        }
    }

    console.log("* "+ text + " *");
    console.log(banner);

}
printBanner("My name is Barbara");