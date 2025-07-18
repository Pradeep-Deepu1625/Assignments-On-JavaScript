// // // // // Write a program to print 1 to 10 numbers using a while loop
// // // // var i =1;
// // // // while(i<=10){
// // // //     console.log(i)
// // // //     i++
// // // // }


// // // // // Write a program to print 10 to 1 numbers using a while loop
// // // // var i=10;
// // // // while(i>0){
// // // //     console.log(i)
// // // //     i--
// // // // }



// // // // // Write a program to print 5 to 15 numbers using a while loop
// // // // var i =5;
// // // // while(i<=15 && i>=5){
// // // //     console.log(i)
// // // //     i++
// // // // }


// // // // // Write a program to print 15 to 10 numbers using a while loop
// // // // var i = 15;
// // // // while(i<= 15 && i >= 10){
// // // //     console.log(i)
// // // //     i--
// // // // }


// // // // Write a program to print 1 to 10 even numbers using a while loop
// // // var  i = 1;
// // // while(i > 0 && i <=10){
// // //     i %2 ===0 ? console.log(i) : null
// // //     i++
// // // }


// // // var i = 1;
// // // while (i <= 10) {
// // //   if (i % 2 === 0) {
// // //     console.log(i);
// // //   }
// // //   i++;
// // // }


// // // // Write a program to print 1 to 10 odd numbers using a while loop
// // // var i = 1;
// // // while(i >0 && i <=10){
// // //     if(i % 2 !==0){
// // //         console.log(i)
// // //     }
// // //     i++
// // // }


// // // // Write a program to print first ten multiples of 4 using a while loop (multiples of 4 are 4,8,12,16,20,.....)

// // // var firsttenMultiples  = 10;
// // // var i =1;
// // // while( firsttenMultiples >0 &&firsttenMultiples <= 10){
// // //     if(i % 4 === 0){
// // //         console.log(i)
// // //             firsttenMultiples--
// // //     }
// // //     i++
// // // }


// // // var Count = 1;
// // // while(Count <=10){
// // //     console.log(Count * 4)
// // //     Count++
// // // }




// // // // Write a program to print multiplication table of 6 using while loop

// // // var i =1;
// // // while(i <=10){
// // //     console.log(`6 X ${i} = ${i * 6}`)
// // //     i++
// // // }



// // // // Print the squares of all numbers from 1 to 10.
// // // var i = 1;
// // // while(i<=10){
// // //     console.log(Math.pow(i,2))
// // //     i++
// // // }


// // // // Print the cubes of all numbers from 1 to 10.
// // // var i = 0;
// // // while(i<=10){
// // //     console.log(Math.pow(i,3))
// // //     i++
// // // }


// // // // Write a program to print factors of 24 using while loop (factors of 24 are 1,2,3,4,6,8,12,24)var 


// // // var i=1;
// // // while(i<=24){
// // //     if(24 % i === 0){
// // //         console.log(i)
// // //     }
// // //     i++
// // // }


// // // // Write a program to print 1 to 10 numbers using a for loop
// // // for(let i=1; i<=10;i++){
// // //     console.log(i)
// // // }


// // // // Write a program to print 10 to 1 numbers using a for loop
// // // for(let i=10;i>0;i--){
// // //     console.log(i)
// // // }



// // // // Write a program to print all numbers from 1 to a given number
// // // function toPrintToaParticularNum(num){
// // //     for(let i=1;i<=num;i++){
// // //         console.log(i)
// // //     }
// // // }
// // // toPrintToaParticularNum(5)



// // // // Write a program to print 1 to 10 even numbers using a for loop
// // // for(let i=1;i<=10;i++){
// // //     i%2 === 0 ? console.log(i) :null
// // // }


// // // // Write a program to print 1 to 10 odd numbers using a for loop
// // // for(let i =1;i<=10;i++){
// // //     i % 2 !== 0 ? console.log(i) : null
// // // }



// // // // Write a program to print first 10 multiples of 3 using a for loop
// // // for(let i = 1; i <= 10;i++){
// // //     console.log(i * 3)
// // // }



// // // // Write a program to print multiplication table of 6 using a for loop
// // // for(let i = 1;i<=10;i++){
// // //     console.log(`6 X ${i} = ${6 * i}`)
// // // }



// // // // Write a program to print all the factors of a given number
// // // function factorsOfANum(num){
// // //     for(let i =1;i<=num;i++){
// // //         num % i === 0 ? console.log(i) : null
// // //     }
// // // }
// // // factorsOfANum(8)



// // // // a program to read 5 numbers and print the maximum and minimum number
// // // function maxAndMinOfFiveNums(num1,num2,num3,num4,num5){
// // //     let max = num1;
// // //     let min = num2;
// // //     let nums = [num1,num2,num3,num4,num5]
// // //     for(let i=0;i<nums.length;i++){
// // //         nums[i] > max ? max = nums[i] : null
// // //         nums[i] < min ? min = nums[i] : null
// // //     }
// // //     console.log(max,min)
// // // }
// // // maxAndMinOfFiveNums(1,2,3,4,5)

// // // function maxAndMinOfFiveNums(num1, num2, num3, num4, num5) {
// // //     let nums = [num1, num2, num3, num4, num5];
// // //     let max = nums[0];
// // //     let min = nums[0];

// // //     for (let i = 1; i < nums.length; i++) {
// // //         if (nums[i] > max) max = nums[i];
// // //         if (nums[i] < min) min = nums[i];
// // //     }

// // //     console.log("Maximum:", max);
// // //     console.log("Minimum:", min);
// // // }

// // // // Example usage
// // // maxAndMinOfFiveNums(1, 2, 3, 4, 5); // Output: Maximum: 5, Minimum: 1


// // // // a program to read 5 numbers and print only the even numbers
// // // function printOnlyprimeOutOfFiveNums(...nums){
// // //     let numbers = [...nums]
// // //     for(let i =0; i<5;i++){
// // //         (numbers[i] & 1) === 0 ? console.log(numbers[i]) : null
// // //     }
// // // }
// // // printOnlyprimeOutOfFiveNums(1,10,3,3334,5)



// // // // Print all the digits of a given number
// // // var num = 12345;
// // // for(let i=0;num > 0;i++){
// // //     let digit = num % 10
// // //     console.log(digit)
// // //     num = Math.floor(num / 10)
// // // }



// // // // Write a program to print only even digits of a given number The output should be 4,2,6 Ex. Let us take 154256
// // // var num = 154256;
// // //  var reverseDigits =[];
// // // for(let i=0; num > 0 ; i++){
// // //     var digit = num % 10;
// // //     (digit & 1) === 0 ? reverseDigits.push(digit) : null
// // //     num = Math.floor(num / 10)
// // // }
// // // var evenDigits = reverseDigits.reverse();
// // // console.log(evenDigits.join(','))

// // // // Or


// // var numb = 154256;
// // var evenDigit = [];

// // for (let i = 0; numb > 0; i++) {
// //     let dig = numb % 10;
// //     (dig & 1) === 0 ? evenDigit.unshift(dig) : null;
// //     numb = Math.floor(numb / 10);
// // }

// // console.log(evenDigit.join(','));



// // // Write a program to print only odd digits of a given number Ex. Let us take 1542763 The output should be 1,5,7,3
// // var numbs =1542763;
// // var oddnums=[];
// // for(let i=0;numbs>0;i++){
// //     let digit = numbs % 10;
// //     (digit & 1) !== 0 ? oddnums.unshift(digit) : null
// //     numbs = Math.floor(numbs /10)
// // }
// // console.log(oddnums.join(','))



// // // Write a program to print the number at 10’s place
// // var num = 12345;
// // let tenthPlaceDig = num % 100;
// // tenthPlaceDig = Math.floor(tenthPlaceDig / 10);
// // console.log(tenthPlaceDig)


// // var num = 876;
// // let tenthPlaceDigit = Math.floor((num % 100) / 10);
// // console.log(tenthPlaceDigit); // Output: 7




// // // Write a program to print the number at 100’s place
// // var num = 8789;
// // let hundreadPlace = Math.floor((num % 1000) / 100)
// // console.log(hundreadPlace)


// // function getDigitAtPlace(num, place) {
// //     return Math.floor(num / Math.pow(10, place - 1)) % 10;
// // }

// // // Example: Get 100's place (place = 3)
// // console.log(getDigitAtPlace(12345, 3)); // Output: 3
// // // 

// // // Write a program to print the number at 1000’s place
// // function getThousandPlace(num,place){
// //     return Math.floor(num / Math.pow(10,place -1)) %  10
// // }
// // console.log(getThousandPlace(127345,4))



// // // Write a program to find the LCM of given two numbers


// // // Write a program to convert an octal number to a decimal
// // function octalToDecimal(octalNum) {
// //     let decimal = 0;
// //     let power = 0;

// //     while (octalNum > 0) {
// //         let digit = octalNum % 10;
// //         decimal += digit * Math.pow(8, power);
// //         power++;
// //         octalNum = Math.floor(octalNum / 10);
// //     }

// //     return decimal;
// // }
// // let octal = 123;  
// // console.log("Decimal:", octalToDecimal(octal));  



// // // Write a program to print the sum of 1 to 10 ( initialisation of sum variable with 0 )
// // var sum =0;
// // for(let i=0;i<=10;i++){
// //     sum += i
// // }
// // console.log(sum)
// // //  or Sum of N natural numbers = (n(n+1)/2)
// // var nNaturalNumbs = 11;
// // var sumofnNaturalNums = (nNaturalNumbs * (nNaturalNumbs + 1)) / 2
// // console.log(sumofnNaturalNums)


// // // Write a program to print the average of 1 to 10
// // var sum =0;
// // for(let i=0;i<=10;i++){
// //     sum += i
// // }
// // var average = Math.floor(sum / 10)
// // console.log(average)

// // // Or 
// // var n = 10;
// // var sumofnNaturalNums = (n*(n+1)) /2
// // var average = Math.floor(sumofnNaturalNums / (n+1))
// // console.log(average)



// // // Write a program to print the sum of the numbers between the given two numbers;
// // var num1 = 2;
// // var num2 = 5;
// // var sum = 0;
// // num1 > num2 ? [start , end ] = [num2,num1] : [start,end] = [num1,num2];
// // for(let i=start;i<=end;i++){
// //     sum += i
// // }
// // console.log(sum)
// // //  Using formula 
// // var num1 = 2;
// // var num2 = 5;
// // var sum = 0;
// // num1 > num2 ? [start,end] = [num2,num1] : [start,end] = [num1,num2];
// // var totalSum = (end*(end + 1)) / 2;
// // var beforeSum = ((start - 1) * ((start-1) + 1)) / 2;
// // console.log(totalSum - beforeSum)



// // // Write a program to print the sum of even numbers between the given two numbers;
// // // function sumOfPrimeNumsBtwTwoNums(num1,num2){
// // //     var sum = 0;
// // //     num1 > num2 ? [start,end] = [num2,num1] : [start,end] = [num1,num2];
// // //     for(let i = start;i<=end;i++){
// // //         (i & 1) === 0 ? sum += i : null
// // //     }
// // //     return sum
// // // }
// // // console.log(sumOfPrimeNumsBtwTwoNums(1,5),"even");
// function sumOfEvenBetween(num1, num2) {
//     let [start, end] = num1 > num2 ? [num2, num1] : [num1, num2];
//     let firstEven = (start % 2 === 0) ? start : start + 1;
//     let lastEven = (end % 2 === 0) ? end : end - 1;
//     if (firstEven > lastEven) {
//         return 0;
//     }

//     let n = ((lastEven - firstEven) / 2) + 1;
//     let sum = (n / 2) * (firstEven + lastEven);
//     return sum;
// }
// console.log("Sum of even numbers:", sumOfEvenBetween(1, 5)); 




// // Write a program to print the sum of odd numbers between the given two numbers
// function sumOfOddNumBtwTwoNums(num1,num2){
//     let [start,end] = num1 > num2 ? [num2,num1] : [num1,num2];
//     let firstOdd = (start & 1) === 0 ? start + 1 : start;
//     let lastOdd = (end & 1) === 0 ? end - 1 : end;
//     if(firstOdd > lastOdd){
//         return 0;
//     }
//     let n = ((lastOdd - firstOdd) / 2 ) + 1;
//     let sum = (n/2) * (firstOdd + lastOdd)
//     return sum
// }
// console.log(sumOfOddNumBtwTwoNums(1,8))
// //  Or
// var num1 = 1;
// var num2 = 8;
// var [start,end] = num1 > num2 ? [num2,num1] : [num1,num2];
// var sum = 0;
// for(let i = start;i<=end;i++){
//     (i & 1 !== 0) ? sum += i : null 
// }
// console.log(sum)



// // Write a program to print the product of the numbers between 1 to 10 ( initialisation of product variable with 1 )

// var product = 1;
// for(let i =product;i<=10;i++){
//     product *= i
// }
// console.log(product);
// //  or
// function factorial(n) {
//     let product = 1;
//     for (let i = 1; i <= n; i++) {
//         product *= i;
//     }
//     return product;
// }

// console.log(factorial(10)); 
// //  Or
// function factorialOfN(n){
//     if(n === 0 ){
//         return 1
//     }
//     return n * factorialOfN(n-1)
// }
// console.log(factorialOfN(10))


// // function factorialBig(n) {
// //     if (n === 0n) return 1n;
// //     return n * factorialBig(n - 1n);
// // }
// // console.log(factorialBig(30n)); // very large number



// // Write a program to find the product of all odd numbers between 1 and 10.
// function productOfOddNum(n){
//     let product = 1;
//     for(let i= 1;i<=n;i++){
//         (i & 1) !== 0 ? product *= i : null
//     }
//     return product
// }
// console.log(productOfOddNum(10))

// // Or
// function oddNumProduct(n){
//     var oddNums = Array(n).fill("").map((str,i)=> i+1 ).filter(num => (num & 1) !== 0 );
//     // var oddNums = Array.from({ length: n }, (_, i) => i + 1)
//                 //    .filter(num => (num & 1) !== 0);

//     var product = oddNums.reduce((prod,num) => prod * num,1)
//     return product
// }
// console.log(oddNumProduct(10))



// // Write a program to print the nth power of a given number. 
// // n can be any positive number. (n=3 r =4 then answer must be 3*3*3*3 )
// function nThPowerOfNum(num,power){
//     return Math.pow(num,power)
// }
// console.log(nThPowerOfNum(3,4))

// // Or

// function nThPower(num,power){
//     if(power === 0 ){
//         return 1
//     }
//     return num * nThPower(num,power -1)
// }
// console.log(nThPower(3,4))

// // Or

// function power(num,pow){
//     let nThpow = 1;
//     for(let i = 1;i<=pow;i++){
//         nThpow *= num
//     }
//     return nThpow
// }
// console.log(power(3,4))

// // ChatGptANswer
// function bigIntPower(base, power) {
//     let result = 1n;
//     let num = BigInt(base);
//     for (let i = 0; i < power; i++) {
//         result *= num;
//     }
//     return result;
// }
// console.log(bigIntPower(3, 50)); // Very large result



// // Write a program to print factorial of a given number
// function factorialOfNum(num){
//     if (num < 0) return "Factorial not defined for negative numbers!";
//     if(num === 0) return 1
//     return num * factorialOfNum(num - 1)
// }
// console.log(factorialOfNum(5))

// // Or

// function Factorial(num){
//     if (num < 0) return "Factorial not defined for negative numbers!";
//     let facto = 1;
//     for(let i = 1;i<=num;i++){
//         facto *= i
//     }
//     return facto;
// }
// console.log(Factorial(-15))


// // Write a program to print the nCr of given ‘n’ and ‘r’


function getCombinations(arr, r) {
    const results = [];

    function combine(start, combo) {
        if (combo.length === r) {
            results.push([...combo]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            combo.push(arr[i]);
            combine(i + 1, combo); // move to next item
            combo.pop();
        }
    }

    combine(0, []);
    return results;
}

const items = ['A', 'B', 'C'];
const combos = getCombinations(items, 2);
console.log("Combinations (nCr):", combos);


function Combinations(arr,r){
    let result = [];
    
    return result
}
console.log(Combinations(["A","B","C"],2))



// Write a program to print the number of factors of 24 using while loop (number of factors for 24 is 8)
var num = 24;
var i=1;
var factors = 0;
while(i <= num){
    if(num % i === 0){
        factors++
    }
    i++
}
console.log(factors)


// Write a program to print the count of factors of a given number using for loop;
var num = 24;
var count = 0;
for(let i = 1; i<=num;i++){
    if(num % i===0){
        count++
    }
}
console.log(count)



// Write a program to check a given number is a prime number or not
function isPrimeOrNot(num){
    if (num <= 1) return `${num} is not a prime number`;
    if(num === 2) return `${num} is prime`
    for(let i =2;i<=Math.sqrt(num);i++){
        if(num % i === 0) return `${num} is not a prime number`
    }
    return `${num} is prime`
}
console.log(isPrimeOrNot(97))


// a program to read 5 numbers and print the sum of all entered numbers

function sumOfFiveNums(num1,num2,num3,num4,num5){
    var nums = [...arguments]
    console.log(nums)
    let sum = 0;
    for(let i=0;i<5;i++){
        sum += nums[i]
    }
    console.log(sum)
}
sumOfFiveNums(1,2,3,4,5)

// Or 
function fiveNumsSum(...nums){
    const sum = nums.reduce((acc,cur) => acc + cur,0)
    return sum
}
console.log(fiveNumsSum(1,2,3,4,5))




// a program to read 5 numbers and print average of n numbers
function averageOfFiveNums(...nums){
    var sum = 0;
    for(let i = 0; i< nums.length;i++){
        sum += nums[i]
    }
    var average = sum / nums.length;
    console.log(average)
}
averageOfFiveNums(1,2,3,4,5)

// Or
function fiveNumsAverage(...nums){
    let sum = nums.reduce((acc,cur)=> acc + cur,0);
    let average = sum / nums.length;
    return average
}
console.log(fiveNumsAverage(1,2,3,4,5))



// print Number of Digits in given number.
function noOfDigitsofANum(num){
   return Math.abs(num).toString().replace('.','').length;
}
console.log(noOfDigitsofANum(123))

// Or
function NumOfDigOfNum(num){
    if(num === 0 ) return 1
    let noOfDigits = 0;
    let number = Math.abs(Math.floor(num))
    while(number > 0){
       number =  parseInt(number / 10);
        noOfDigits += 1
    }
    // Or using for Loop
    // for(let i = 0;num > 0;i++){
    //     number = Math.floor(number / 10)
    //     noOfDigits += 1
    // }
    return noOfDigits
}
console.log(NumOfDigOfNum(122.33))

function countDigits(num) {
    if (num === 0) return 1;
    let count = 0;
    let number = Math.abs(Math.floor(num)); // ignore decimals
    while (number > 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}
console.log(countDigits(12233));   // 5
console.log(countDigits(-12233));  // 5
console.log(countDigits(0));       // 1
console.log(countDigits(12.345),"decei");  // 2 (ignores decimal)



// Write a program to count the number of ‘1’s in a given number.
function noOfOnesInNum(num){
    let noOfOnes = 0;
    // let strNum = Math.abs(num).toString();
    // for(let i=0;i<strNum.length;i++){
    //     if(strNum[i] === "1") noOfOnes += 1;
    // }

    // Or
    let number = Math.abs(num)
    while(number > 0){
        let rem = number % 10;
        if(rem === 1) noOfOnes += 1;
            number = Math.floor(number / 10);
    }

    return noOfOnes
}
console.log(noOfOnesInNum(1122311))



// Write a program to eliminate all 0’s from a given number.
function eliminateZeros(num){
     num = Math.abs(num);
     let number = 0;
    let i =0;
    while(num > 0){
        let rem = num % 10;
        if(rem !==0){
            number += rem * (10 ** i)
            i++
        }
        num = Math.floor(num / 10)
    }
    return number
}
console.log(eliminateZeros(102030405))

// Write a program to print all the digits that are less than 5 in a given number.
var num = 1253789;
while(num >0){
    let rem = num % 10;
    if(rem < 5){
        console.log(rem)
    }
    num = Math.floor(num / 10)
}


// Print the greatest digit of a given number(n=1237456 then greatest digit is 7)
var num = 1237456;
var greatest = 0;
while(num > 0){
    let rem = num % 10;
    if(rem > greatest){
        greatest = rem
    }
    num = Math.floor(num /10)
}
console.log(greatest)


// sum of all digits of a given number Ex: let us take 19345 is the given number The output should be 22 (1+9+3+4+5)=22
var num = 19345;
var sum =0;
while(num > 0){
    let rem = num % 10;
    sum += rem;
    num = Math.floor(num/10)
}
console.log(sum)




//  program to print reverse of digits of a number
var num = 12345;
var reverse =0;
while(num > 0){
    let rem = num %  10;
    reverse  = reverse * 10 + rem
    num =  Math.floor(num/10)
}
console.log(reverse)



// print the binary value of 8.

function numToBinary(num){
    return num.toString(2) // if we want in octal we place 8 as base and hex we place 16
}
console.log(numToBinary(9))
// Or
function binary(num){
    if(num === 0) return "0";
    var binary = '';
    while(num>0){
        let rem = num % 2;
        binary = rem + binary
        num = Math.floor(num / 2)
    }
    return binary
}
console.log(binary(9))


// Write a program to convert a binary number into a decimal number;
function binaryToooNum(binary){
if(binary === 0) return 0;
let num =0;
for(let i=0;binary > 0;i++){
    let rem = binary % 10;
    num = num + (rem * (2**i))
    binary = Math.floor(binary / 10)
}
return num
}
console.log(binaryToooNum(1000),"j")

// Or
function binaryToNum(binaryStr) {
    let num = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        num = num * 2 + Number(binaryStr[i]);
    }
    return num;
}
console.log(binaryToNum("1000")); // Output: 8

// or In single line
var binaryTONum = parseInt('1000',2)
console.log(binaryTONum)




// Write a program to check a given number is palindrome number or not.
function isPalindromeOrNot(num){
    let actualNum = num;
   let reverseNum ='';
    while(num > 0){
        let rem = num % 10;
        reverseNum += rem;
        num = Math.floor(num /10)
    }
   return (parseFloat(reverseNum) ===actualNum ? `${actualNum} is palindrome` : `${actualNum} is not palindrome`)
}
console.log(isPalindromeOrNot(120021))

// Or
function isPalindrome(num){
    let strNum = num.toString();
    let halfLen = strNum.length /2;
    for(let i=0; i<halfLen; i++){
        if(strNum[i] === strNum[strNum.length - i -1]){
            continue
        }else{
            return `${num} is not palindrome`
        }
    }
    return `${num} is palindrome`
}
console.log(isPalindrome(120021))

// or
function isPalindromeNumber(num) {
    if (num < 0) return `${num} is not palindrome`; // negative numbers not palindromes

    let original = num;
    let reversed = 0;

    while (num > 0) {
        let rem = num % 10;
        reversed = reversed * 10 + rem;
        num = Math.floor(num / 10);
    }

    return (reversed === original)
        ? `${original} is palindrome`
        : `${original} is not palindrome`;
}

console.log(isPalindromeNumber(120021)); // 120021 is palindrome
console.log(isPalindromeNumber(12321));  // 12321 is palindrome
console.log(isPalindromeNumber(12345));  // 12345 is not palindrome




// Write a program to check a given number is armstrong number or not Ex:153 is an armstrong number;
function armStrongNum(num){
    let powerRaised = num.toString().length;
    let actualNum= num;
    let armstrong=0;

    while(num > 0){
        let rem = num % 10;
        armstrong += rem ** powerRaised
        num = Math.floor(num/10)
    }
    return (actualNum === armstrong) ? `${actualNum} is armStrong Number` : `${actualNum} is not armStrong Number`
}
console.log(armStrongNum(153))

// OR 
function armStrongNum(num) {
    let actualNum = num;
    let power = 0;
    let temp = num;

    // Count the number of digits
    while (temp > 0) {
        power++;
        temp = Math.floor(temp / 10);
    }

    let armstrong = 0;
    temp = num;

    while (temp > 0) {
        let rem = temp % 10;
        armstrong += rem ** power;
        temp = Math.floor(temp / 10);
    }

    return (actualNum === armstrong)
        ? `${actualNum} is an Armstrong Number`
        : `${actualNum} is not an Armstrong Number`;
}

console.log(armStrongNum(153));   //  Output: 153 is an Armstrong Number
console.log(armStrongNum(9474));  //  Output: 9474 is an Armstrong Number
console.log(armStrongNum(123));   // Output: 123 is not an Armstrong Number




// Write a program to print the fibonacci number series up to a given number Expected output:0 1 1 2 3 5 8 13

function fibonacciSeries(limit) {
    let a = 0, b = 1;
    let series = [];

    while (a <= limit) {
        series.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    console.log(series.join(' '));
}

fibonacciSeries(13);  // Output: 0 1 1 2 3 5 8 13



// Print A Calendar Taking Input From User Using Loop
let getDate = new Date(2024,7-1);
console.log(getDate.getMonth())
let date = new Date(2024,7,0).getDate();
console.log(date)


function printCalender(year,month){
    const weeks = ['Sun',"Mon","Tue","Wed","Thu","Fri","Sat"]
    console.log(`Calendar for ${year}-${month}`);
    console.log(weeks.join(' '))
    if(month < 1 || month > 12) return `Invalid Month`;

    const date = new Date(year,month,0);
    const startingWeekDay = new Date(year,month -1,1).getDay();
    let line = '';
    let totalDays = date.getDate()

    // Printing space before starting date
    for(let i=0;i<startingWeekDay;i++){
        line += "    "
    }

    // Print Dates
    for(let date = 1; date <= totalDays;date++){
        line += (date < 10 ? "  " + date : " " + date)+  " "
        if((startingWeekDay + date-1) % 7 === 6){
            line += `\n`
        }
    }
    return line
}
console.log(printCalender(2025,2))

function printCalendar(year, month) {
    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    console.log(`Calendar for ${year}-${month}`);
    console.log(weeks.join(' '));

    if (month < 1 || month > 12) return `Invalid Month`;

    let totalDays;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            totalDays = 31;
            break;
        case 4: case 6: case 9: case 11:
            totalDays = 30;
            break;
        case 2:
            totalDays = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
            break;
    }

    const startingWeekDay = new Date(year, month - 1, 1).getDay();
    let line = '';

    for (let i = 0; i < startingWeekDay; i++) {
        line += "    ";
    }

    for (let date = 1; date <= totalDays; date++) {
        line += (date < 10 ? "  " + date : " " + date) + " ";
        if ((startingWeekDay + date - 1) % 7 === 6) {
            line += "\n";
        }
    }

    return line;
}

console.log(printCalendar(2025, 2));

