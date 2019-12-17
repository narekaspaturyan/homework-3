

// // Homework 3

// // exercise 1

// for (var i=1; i<=10; i++ ){
//     console.log(i)
// };

// //// exercise 2 
// for(var i=1; i<=10; i++){
//     if(i===6)continue;
//       console.log(i);
// };
    
//  // // exercise 3
// for (var i=1; i<=10; i++){
//     if(i%2>0) continue;
//     console.log(i)
// };


// // exercise 4

// var sum = 0;                     
// for( var i=1; i<=10; i++){
//  sum=sum+i;
//  }
//  console.log(sum)


// // exercise 5

// var sum = 0;
// for( var i = 1; i<=10; i++){
//     if(i===8) continue;
//     sum=sum+i;
// }
// console.log(sum)


// // exercise 6

// var sum = 0;

// for(var i= 1; i<=10; i++){
//     if(i%2===0) continue;
//     sum=sum+i;
// }
// console.log(sum);


// // exercise 7

// var sum = 0;
// for( var i= 1; i<=10; i++){
//     sum = sum+(i*i) 
// }
// console.log(sum);


// // exercise 8
// For every number between 1 and 12 log into console name of the season of
// corresponding month
// for(var i = 1; i<=12; i++){
//     if(i===12 && 1 && 2)
//     console.log('winter');
//     else if (i === 3 && 4 && 5)
//     console.log('spring');
//     else if (i === 6 && 7 && 8)
//     console.log('summer');
//    else if (i === 9 && 10 && 11)
//     console.log('automn')
         
/////////// 2-nd lösung 

// for(var i = 1; i<=12; i++){
//     if(i===1)
//     console.log('winter');
//     else if (i === 2 )
//     console.log('winter');
//     else if (i === 3 )
//     console.log('spring');
//    else if (i === 4)
//     console.log('spring')
//     else if(i=== 5 )
//     console.log('spring');
//     else if (i ===6 )
//     console.log('summer');
//     else if (i === 7 )
//     console.log('summer');
//    else if (i === 8)
//    console.log('summer')
//    else if(i=== 9 )
//     console.log('automn');
//     else if (i === 10)
//     console.log('automn');
//     else if (i === 11)
//     console.log('automn');
//    else if (i === 12)
//     console.log('winter')
         
// }
    



// exercise 1 first shit

// 1.Given five numbers as input. Calculate and print the average of the numbers.

// input 45 -12 0 3 -15    output 4.2
// 7 52 -23 9 -81     output -7.2


// var myArr = [ 7 ,52, -23, 9,-81];
// var  sum = 0; 
// var result = 0
// console.log(myArr)
// for (var i = 0; i<myArr.length; i++){
    
//     sum += myArr[i];
//     result = sum/myArr.length;
// }

// console.log(result);
///////////////////////////////////////////////////////////
// var num = 4593563;
// var digits = num.toString().split('');
// var newDigits = digits.map(Number);
// var arr =newDigits.length;
// var myArr=0;
// for (var i= 0; i<arr; i++) {
//    myArr+=[i]
//    console.log(myArr)
// }
////////////////////////////////////////////////////////////////
// exercise 3 ***

//Enter a number. Find the difference between its biggest and smallest digits.

// input 5            output 0
//       152                 4
//       4593563             6

// var num = 4593563;

var a = 4593563
var largest = a%10
var smallest =  a%10

while(a > 0) {
    var digit = a % 10;
    a = Math.floor(a / 10);

    
    if (digit > largest) {
        largest = digit
    }

    if (digit < smallest) {
        smallest = digit
    }
    
 }

 console.log(largest-smallest)





  





// Iteration 1:
// Check if array[0] i.e. 4 is greater than 0 => True : largest = 4

// Iteration 2:
// Check if array[1] i.e. 5 is greater than 4 => True : largest = 5

// Iteration 3:
// Check if array[2] i.e. 9  is greater than 5 => True : largest = 9

// Iteration 4:
// Check if array[3] i.e. 3 is greater than 9 => False : largest = 9

// Iteration 5:
// Check if array[4] i.e. 5 is greater than 9 => False: largest = 9

// Iteration 6:
// Check if array[5] i.e. 6 is greater than 9 => False: largest = 9

// Iteration 7:
// Check if array[5] i.e. 3 is greater than 9 => False: largest = 9













// // var arr = newDigits.length;
// var sum=0;
// var result= 0;
// // console.log(newDigits)
// // console.log(digits)
// for (var i= 0; i<newDigits.length; i++) {
//      sum = newDigits[i]
//     if(sum===9 && 1){
//         console.log("ok")
//     }else {
//         console.log('nicht')
//     }
// }
// // console.log(result)
















