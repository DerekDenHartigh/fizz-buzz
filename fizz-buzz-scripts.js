"use strict";

/*
The Challenge:

Write a short program that prints each number from 1 to 100 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/

function fizzBuzz() {
    let n=1;
    while (n<100){
        if (n%15===0) {
            console.log("FizzBuzz")
        }
        else if ((n%5)===0) {
            console.log("Buzz");
        }
        else if ((n%3)===0){
            console.log("Fizz")
        }
        else console.log(n);
        n++;
    }
}

//while loops!
//pseudocode:   while(condition){do this repeatedly;} 
//              let a=#, j=#; while (a>30)
//              {do this stuff;}