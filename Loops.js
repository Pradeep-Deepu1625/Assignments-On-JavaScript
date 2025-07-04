// // Write a program to print 1 to 10 numbers using a while loop
// var i =1;
// while(i<=10){
//     console.log(i)
//     i++
// }


// // Write a program to print 10 to 1 numbers using a while loop
// var i=10;
// while(i>0){
//     console.log(i)
//     i--
// }



// // Write a program to print 5 to 15 numbers using a while loop
// var i =5;
// while(i<=15 && i>=5){
//     console.log(i)
//     i++
// }


// // Write a program to print 15 to 10 numbers using a while loop
// var i = 15;
// while(i<= 15 && i >= 10){
//     console.log(i)
//     i--
// }


// Write a program to print 1 to 10 even numbers using a while loop
var  i = 1;
while(i > 0 && i <=10){
    i %2 ===0 ? console.log(i) : null
    i++
}


var i = 1;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}


// Write a program to print 1 to 10 odd numbers using a while loop
var i = 1;
while(i >0 && i <=10){
    if(i % 2 !==0){
        console.log(i)
    }
    i++
}


// Write a program to print first ten multiples of 4 using a while loop (multiples of 4 are 4,8,12,16,20,.....)

var firsttenMultiples  = 10;
var i =1;
while( firsttenMultiples >0 &&firsttenMultiples <= 10){
    if(i % 4 === 0){
        console.log(i)
            firsttenMultiples--
    }
    i++
}


var Count = 1;
while(Count <=10){
    console.log(Count * 4)
    Count++
}




// Write a program to print multiplication table of 6 using while loop

var i =1;
while(i <=10){
    console.log(`6 X ${i} = ${i * 6}`)
    i++
}



// Print the squares of all numbers from 1 to 10.
var i = 1;
while(i<=10){
    console.log(Math.pow(i,2))
    i++
}


// Print the cubes of all numbers from 1 to 10.
var i = 0;
while(i<=10){
    console.log(Math.pow(i,3))
    i++
}


// Write a program to print factors of 24 using while loop (factors of 24 are 1,2,3,4,6,8,12,24)