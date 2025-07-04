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


// Write a program to print factors of 24 using while loop (factors of 24 are 1,2,3,4,6,8,12,24)var 


var i=1;
while(i<=24){
    if(24 % i === 0){
        console.log(i)
    }
    i++
}


// Write a program to print 1 to 10 numbers using a for loop
for(let i=1; i<=10;i++){
    console.log(i)
}


// Write a program to print 10 to 1 numbers using a for loop
for(let i=10;i>0;i--){
    console.log(i)
}



// Write a program to print all numbers from 1 to a given number
function toPrintToaParticularNum(num){
    for(let i=1;i<=num;i++){
        console.log(i)
    }
}
toPrintToaParticularNum(5)



// Write a program to print 1 to 10 even numbers using a for loop
for(let i=1;i<=10;i++){
    i%2 === 0 ? console.log(i) :null
}


// Write a program to print 1 to 10 odd numbers using a for loop
for(let i =1;i<=10;i++){
    i % 2 !== 0 ? console.log(i) : null
}



// Write a program to print first 10 multiples of 3 using a for loop
for(let i = 1; i <= 10;i++){
    console.log(i * 3)
}



// Write a program to print multiplication table of 6 using a for loop
for(let i = 1;i<=10;i++){
    console.log(`6 X ${i} = ${6 * i}`)
}



// Write a program to print all the factors of a given number
function factorsOfANum(num){
    for(let i =1;i<=num;i++){
        num % i === 0 ? console.log(i) : null
    }
}
factorsOfANum(8)



// a program to read 5 numbers and print the maximum and minimum number
function maxAndMinOfFiveNums(num1,num2,num3,num4,num5){
    let max = num1;
    let min = num2;
    let nums = [num1,num2,num3,num4,num5]
    for(let i=0;i<nums.length;i++){
        nums[i] > max ? max = nums[i] : null
        nums[i] < min ? min = nums[i] : null
    }
    console.log(max,min)
}
maxAndMinOfFiveNums(1,2,3,4,5)

function maxAndMinOfFiveNums(num1, num2, num3, num4, num5) {
    let nums = [num1, num2, num3, num4, num5];
    let max = nums[0];
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
        if (nums[i] < min) min = nums[i];
    }

    console.log("Maximum:", max);
    console.log("Minimum:", min);
}

// Example usage
maxAndMinOfFiveNums(1, 2, 3, 4, 5); // Output: Maximum: 5, Minimum: 1