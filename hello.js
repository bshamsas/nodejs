
//Q1
   const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
    readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline.question('How old are you?', Age =>{
        if (Age < 16){
           console.log("You arenot allowed to drive in Iowa")
        }
        else{
           console.log("You’re allowed to get a drivers license in Iowa");
        }
        readline.close();
    })
    });

    



 
   