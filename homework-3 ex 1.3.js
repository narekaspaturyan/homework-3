

// // Homework 3

//// exercise 1.3

var a = 4593563;
var largest = a%10;
var smallest =  a%10;

while(a > 0) {
    var digit = a % 10;
    a = Math.floor(a / 10);

    
    if (digit > largest) {
        largest = digit;
    }

    if (digit < smallest) {
        smallest = digit;
    }
    
 }

 console.log(largest-smallest);
