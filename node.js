//Q2
    const ask = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
       });
   let sum = 0;
   getNumber(sum);
   function getNumber(num){
    ask.question("Enter a number: ", (number) => {
    if (number =="stop"){
     console.log(num);
     ask.close();
     return 0;
    }
    return getNumber((num += parseInt(number)));
   });
 }