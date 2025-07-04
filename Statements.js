// Write a program to check a number is divisible by 7 or not.
let num = 4;
if(num % 7 === 0 ){
    console.log(`${num} is divisible by 7`)
}else{
    console.log('Not Divisble by 7')
}


// Write a program to check a number is factor of 84 or not.
let factNum = 84;
let number = 5
if(factNum % number === 0) {
    console.log("Number is factor of 84")
}else{
    console.log("not factor")
}

// Write a program to check a number is factor of 96 or not.
// and if the given number is more Than 96 program should say ‘not a valid input’

function checkFactorOf96(num){
    if(num > 96){
        console.log("not a valid number")
    }else if(96 % num === 0){
        console.log(`${num} is factor 96`)
    }else{
        console.log(`${num} is not factor to 96`)
    }
}


// Write a program to check a number is multiple of 3 or not.
function multipleOfthree(num){
    if(num % 3 ===0){
        console.log(`${num} is multiple of 3`)
    }else{
        console.log(`${num} is not multiple of 3`)
    }
}

// Write a program to check a number is positive or not.
function positiveOrNot(num){
    if(num >=0 ){
        console.log(`${num} is positive`)
    }else{
        console.log(`${num} is not positive`)
    }
}
function positiveOrNot(num) {
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num === 0) {
    console.log(`${num} is neither positive nor negative`);
  } else {
    console.log(`${num} is not positive`);
  }
}


// Write a program to check a number is having 4 at units place (984).
function numHavingfourAtUnitPlace(num){
    let rem = num % 10;
    if(rem === 4){
        console.log(`${num} number having 4 at unit place`)
    }else{
        console.log(`${num} number not having 4 at unit place`)
    }
}



// Write a program to check a number is 3 digited number or not.
function numIsThreeDigitedOrNot(num){
    if(num > 99 && num < 1000){
        console.log(`${num} is three digited`)
    }else{
        console.log(`${num} is not three digited`)
    }
}


// Write a program to print even or odd for a given number
function evenorOdd(num){
    if(num % 2 === 0){
        console.log(`${num} is even`)
    }else{
        console.log(`${num} is odd`)
    }
}


// Write a program to print the greatest number in given two number
function greatestNumofTwoNums(num1,num2){
    if(num1 > num2){
        console.log(`${num1} is greatest`)
    }else{
        console.log(`${num2} is greatest`)
    }
}

// Write a program to print the least number in given two numbers
function leastNumOfTwoNums(num1,num2){
    if(num1 < num2){
        console.log(`${num1} is least`)
    }else{
        console.log(`${num2} is least`)
    }
}


// Write a program to print the given two numbers in ascending order
function ascendingOrerOftwoNums(num1,num2){
    if(num1 < num2){
        console.log([num1,num2])
    }else{
        console.log([num2,num1])
    }
}

function ascendingOrderOfTwoNums(num1, num2) {
  if (num1 === num2) {
    console.log(`Both numbers are equal: [${num1}, ${num2}]`);
  } else if (num1 < num2) {
    console.log([num1, num2]);
  } else {
    console.log([num2, num1]);
  }
}


// Write a program to print the given two numbers in descending order

function ascendingOrderOfTwoNums(num1, num2) {
  if (num1 === num2) {
    console.log(`Both numbers are equal: [${num1}, ${num2}]`);
  } else if (num1 > num2) {
    console.log([num1, num2]);
  } else {
    console.log([num2, num1]);
  }
}


// Write a program to print the greatest number in given three numbers
function greatestNumOutOfThreeNums(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        console.log(`${num1} is greatest among ${num1,num2,num3}`)
    }else if(num2 > num1 && num2 > num3){
            console.log(`${num2} is greatest among ${num1,num2,num3}`)        
    }else{
                console.log(`${num3} is greatest among ${num1,num2,num3}`)
    }
}


// Write a program to print the least number in given three numbers
function leatestNumOutOfThreeNums(num1,num2,num3){
    if(num1 < num2 && num1 < num3){
        console.log(`${num1} is least among ${num1,num2,num3}`)
    }else if(num2 < num1 && num2 < num3){
            console.log(`${num2} is least among ${num1,num2,num3}`)        
    }else{
                console.log(`${num3} is least among ${num1,num2,num3}`)
    }
}


// Write a program to print the given three numbers in ascending order
function ascendingOrderOfThreeNums(num1,num2,num3){
    let first , second, third;
    if(num1 <= num2 && num1 <= num3){
        first = num1;
        if(num2 <= num3){
            second = num2;
            third = num3
        }else{
            third = num2;
            second = num3;
        }
    }else if(num2 <= num1 && num2 <= num3){
        first = num2;
        if(num1 <= num3){
            second = num1;
            third = num3
        }else{
            second = num3;
            third = num1
        }
    }else{
        first = num3;
        if(num1 <= num2){
            second = num1;
            third = num2;
        }else{
            second = num2;
            third = num1
        }
    }
    console.log(`Asecnding order of ${[num1,num2,num3]} is ${[first,second,third]}`)
}
ascendingOrderOfThreeNums(9,8,0)


// Write a program to take marks of three subjects and print the grade of student
function gradeOfStudent(sub1,sub2,sub3){
    let grandTotalAvg = parseInt((sub1 + sub2 + sub3) / 3);
    if(sub1 >= 35 && sub2 >= 35 && sub3 >= 35){
        if(grandTotalAvg >= 90 && grandTotal <= 100){
        console.log("grade :: A")
    }else if(grandTotalAvg >= 80 && grandTotalAvg <= 89){
        console.log("Grade :: B")
    }else if(grandTotalAvg >= 70 && grandTotalAvg <=79){
        console.log("Grade :: C")
    }else if(grandTotalAvg >= 60 && grandTotalAvg <= 69){
        console.log("Grade :: D")
    }else{
        console.log("Grade :: E")
    }
    }else{
        console.log("grade :: F")
    }
}



// Character Is Vowel or Consonant
var Character = "D";
let vowels = "AEIOUaeiou"
if(vowels.includes(Character) !== -1){
    console.log(`${Character} is an vowel`)
}else{
    console.log("Not Vowel")
}
if(vowels.indexOf(Character)){
    console.log(`${Character} is an vowel`)
}else{
        console.log("Not Vowel")
}

function checkVowelOrNot(char){
    if(char.length !== 1 || !/[A-Za-z]/.test(char)){
        console.log(`${char} is invalid`)
        return
    }
    let lowerChar = char.toLowerCase();
    if('aeiou'.includes(lowerChar)){
        console.log(`${char} is vowel`)
    }else{
        console.log(`${char} is not vowel`)
    }

}
(checkVowelOrNot("i"))


// A Character Is an Alphabet or Not
function isAlphabetOrNot(Char){
    if(!/[A-Za-z]/.test(Char)){
        console.log(`${Char} is not alphabet`)
    }else{
        console.log(`${Char} is Alphabet`)
    }
}
isAlphabetOrNot("y")



// Uppercase, Lowercase, Special Character, or Digit
let Chare = "1";
if(/[A-Z]/.test(Chare)){
    console.log(`${Chare} is in UpperCase`)
}else if(/[a-z]/.test(Chare)){
        console.log(`${Chare} is in LowerCase`)
}else if(/\d/.test(Chare)){
        console.log(`${Chare} is Digit`)
}else if(/\W/.test(Chare)){
    console.log(`${Chare} is Special Character`)
}


// Leap Year
let year = 2025;
if((year % 4 === 0 && year % 100 !== 0) ||  (year % 400 === 0 && year % 100 ===0)){
    console.log(`${year} is leap year`)
} else{
    console.log(`${year} is not leap year`)
}


// The Date Is Correct or Not
function isValidDateOrNot(year,month,day){
    let date = new Date(year,month -1,day)
    return (
        date.getFullYear() === year &&
        date.getMonth() === month -1 && 
        date.getDate() === day
    )
}
console.log(isValidDateOrNot(2024,6,30))


// Voting Eligibility Checker
let voterAge = 23
if(voterAge >= 21){
    console.log("he or she is valid voter")
}else{
    console.log("he or she not a valid voter")
}

// Check whether a number is negative, positive or zero.
var Number1 = -1;
if(Number1 >0){
    console.log(`${Number1} is Positive`)
}else if(Number1 < 0){
    console.log(`${Number1} is Negative`)
}
else{
    console.log(` number is Zero`)
}


// Check whether a number is divisible by 5 and 11 or not.
let numberToCheck = 55;
if(numberToCheck % 5 === 0 && numberToCheck % 11 ===0){
    console.log(`${numberToCheck} is divisble by 11 and 5`)
}else if(numberToCheck % 5 === 0){
    clonsole.log(`${numberToCheck} is not divisble by 5 only`)
}else if(numberToCheck % 11 === 0){
    clonsole.log(`${numberToCheck} is not divisble by 11 only`)

}
else{
    clonsole.log(`${numberToCheck} is not divisble by both`)
}


// Input any alphabet and check whether it is vowel or consonant.
let alphabet = "l";
let tolowerAlpha = alphabet.toLocaleLowerCase()
if(!/[A-Za-z]/.test(alphabet)){
    console.log("not a valid alphabet")
    return
}else if('aeiou'.includes(tolowerAlpha)){
    console.log(`${alphabet} is Vowel`)
}else{
    console.log(`${alphabet} is Consonant`)
}


// Input any character and check whether it is the alphabet, digit or special character.
let alpha1 = "@";
if(/[a-zA-Z]/.test(alpha1)){
    console.log("The Character is Alphabet")
}else if(/\W/.test(alpha1)){
    console.log("The Given input is Special character")
}else if(/\d/.test(alpha1)){
    console.log("the Input is Digit")
}



// Input week number and print weekday.

function getWeekDay(weekNumber){
    if(weekNumber < 1 || weekNumber > 7){
        console.log('Invalid Input Please give valid input btw 1 to 7')
        return
    }
    const weekDays = [
        "Monday",
        "tuesday",
        "Wednesday",
        "Thursday",
        "friday",
        "Saturday",
        "Sunday"
    ];
    console.log(`${weekNumber} is a ${weekDays[weekNumber -1]}`)
}
getWeekDay(7)



// Input month number and print number of days in that month.
let monthNum = 9;
let yearNum = 2024;
if(monthNum < 1 || monthNum > 12){
    console.log("Invalid Month Number")
    return
}
const date = new Date(yearNum,monthNum,0).getDate()
console.log(`In month ${monthNum} & In year ${yearNum} has ${date}'s`)


if(monthNum < 1 || monthNum > 12){
    console.log("Invalid Input Month")
    return
}else{
    switch(monthNum){
        case 1 : case 3 : case 5 :case 7: case 8 : case 10 : case 12:
            days = 31;
            break;
        case 4 : case 6 : case 9 : case 11 :
            days = 30;
            break;
        case 2 :
            if((yearNum % 4 === 0 && yearNum % 100 !== 0) || (yearNum % 400 === 0 && yearNum % 100 === 0)){
                days = 29
            }else {
                days = 28
            }
    }
console.log(`In month ${monthNum} & In year ${yearNum} has ${days}'s`)
}



// Count the total number of notes in a given amount.
function numberOfNotes(amount){
    let noOfNotes = 0;
    let noOfFiveHundreadNOtes = 0;
    let noOfhundreadNotes = 0;
    let noOfFiftyNotes = 0;
    let noOftwentyNotes = 0;
    let noOftenNotes = 0;
    if(amount >= 500){
        noOfFiveHundreadNOtes += parseInt(amount / 500)
        noOfNotes += noOfFiveHundreadNOtes;
        amount %= 500
    }
    if(amount >= 100){
        noOfhundreadNotes += parseInt(amount / 100)
        noOfNotes += noOfhundreadNotes
        amount %= 100
        console.log(amount)
    }
    if(amount >= 50){
        noOfFiftyNotes += parseInt(amount / 50)
        noOfNotes += noOfFiftyNotes
        amount %= 50
        console.log(amount)
    }
    if(amount >= 20){
        noOftwentyNotes += parseInt(amount / 20)
        noOfNotes += noOftwentyNotes
        amount %= 20
        console.log(amount)
    }
    if(amount >= 10){
        noOftenNotes += parseInt(amount / 10)
        noOfNotes += noOftenNotes;
    }
    return {
        "NoOfFiveHundreads" : noOfFiveHundreadNOtes,
        "NoOfHundreads" : noOfhundreadNotes,
        "NoOfFifty's" :noOfFiftyNotes,
        "NoOftwenty's" : noOftwentyNotes,
        "NoOfTens" : noOftenNotes,
        "TotalNOtes" : noOfNotes
    }
}
console.log(numberOfNotes(1230))


function numOfNotes(amount){
    const notes = [500,100,50,20,10];
    const nuOfNotes = {};
    let CountOfNotes = 0;
    for(let note of notes){
        const Count = Math.floor(amount / note);
        if(Count > 0){
            nuOfNotes[`${note}`] = Count
            CountOfNotes += Count
            amount %= note;
        }
    }
    nuOfNotes["TotalNotes"] = CountOfNotes
    return nuOfNotes
}

console.log(numOfNotes(1230))


// Input angles of a triangle and check whether the triangle is valid or not.
function checkTriangleIsValid(angle1,angle2,angle3){
    let sumOfThreeAngles = angle1 + angle2 + angle3;
    if(sumOfThreeAngles === 180){
        console.log("its is valid triangle")
    }else{
        console.log("Its not a valid triangle")
    }
}
checkTriangleIsValid(60,60,60)
const checkTriangleValid = (angle1,angle2,angle3) => (angle1 + angle2 + angle3 ) === 180 ? "Valid Triangle" : "Not valid Trianle";
console.log(checkTriangleValid(60,70,60))
const triangleValid = (a1, a2, a3) => {
  if (a1 <= 0 || a2 <= 0 || a3 <= 0) return "Angles must be positive";
  return (a1 + a2 + a3 === 180) ? "Valid Triangle" : "Not Valid Triangle";
};




// Check whether the triangle is an equilateral, isosceles or scalene triangle.
function checkEquilateralIssoScalene(a1,a2,a3){
    if(a1 <=0 || a2 <= 0|| a3 <= 0) return "angle must be positive"
    if(a1 + a2 + a3 === 180){
        if(a1 === a2 && a2 === a3){
            return "It is an equilateral triangle"
        }else if(a1 === a2 || a2 === a2 || a3 === a1){
            return "It is an isosceles triangle"
        }else {
            return "It is scalene triangle"
        }
    }else{
        return "Not a valid triangle"
    }
}
console.log(checkEquilateralIssoScalene(70,70,40))
const checkEqIsSc = (a1,a2,a3)=>{
   return a1 <= 0 || a2 <= 0 || a3 <= 0 ? "angle must be Positive" : 
       (a1 + a2 + a3 === 180 ? ((a1 === a2 && a2 ===a3 ? "It is an Equilateral Triangle": a1 === a2 || a2 === a3 || a3 === a1 ? "It is Isosceles Triangle" : "It is an scalene Triangle"))  : "Not a valid Triagnle")

}
console.log(checkEqIsSc(40,90,50))
const checkEqISc = (a1, a2, a3) => {
  return a1 <= 0 || a2 <= 0 || a3 <= 0
    ? "Angle must be positive"
    : a1 + a2 + a3 !== 180
    ? "Not a valid Triangle"
    : a1 === a2 && a2 === a3
    ? "It is an Equilateral Triangle"
    : a1 === a2 || a2 === a3 || a1 === a3
    ? "It is Isosceles Triangle"
    : "It is a Scalene Triangle";
};
