const express = require('express');
const app = express()
const port = 8008;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


app.get('/:input',(req, res) =>   {

    let array = [1,3,5,"qwe",15,"A",23]; //hardcoded for testing
    var inputarray = req.params.input;  // type  http://localhost:8008/[1,3,5] in browser

    console.log(inputarray);

  if(inputarray.length> 0) {
    for (ele of array) {
        
        if(isNaN(ele)){
            console.log("Invalid Item");
            continue;
        }
        if (ele % 3 == 0 && ele % 5 == 0) 
        {
            console.log("FizzBuzz"); // If the value is divisible by both 3 and 5 then output the word “FizzBuzz”
        }
        else if(ele % 3 == 0){
            console.log("Fizz"); //If the value is a multiple of 3 then output the word “Fizz”
        } 
        else if(ele % 5 == 0){
            console.log("Buzz"); // If the value is a multiple of 5 then output the word “Buzz”
        }
        else{
            console.log(`Divided ${ele} by 3`)
            console.log(`Divided ${ele} by 5`)
        } 
    };
  }
  else{
      console.log("No elements in array");
  }

    res.send('Hello World!')
});



// steps for execution 
// 1) npm i
// 2) node app
// type in browser http://localhost:8008/?input%20=%20[1,3,5]
