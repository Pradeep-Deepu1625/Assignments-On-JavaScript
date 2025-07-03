// Write a program to print the following output for the given values a=10,b=20 Output expected is: 10+20=30 10-20=-10 10*20=200 10/20=0 10%20=10
var a = 10;
var b = 20;
console.log(a +b); // 30
console.log(b -a); //10 
console.log(b / a); // 2
console.log(b % a) // 0

// Write a program to print the following for a given value a=3; Output expected: 3*1=3 3*2=6 3*3=9 3*4=12 3*5=15 3*6=18

// Given a variable var x = 23. Increment its value by 1.
var x  = 23;
// x++; // post increament
++x; // preIncreament
console.log(x)

// Print the sum of 12 and 23 using the addition operator.
var num1 = 12;
var num2 = 23;
console.log(num1 + num2)

// Print the difference of 52 and 36 using the subtraction operator.
var num1 = 52;
var num2 = 36
console.log(num1 - num2)

// Print the product of 23 and 56 using the multiplication operator.
var num1 = 23;
var num2 = 56;
console.log(num1 * num2)


// Divide 36 by 5 and print the output by using the division operator.
var divisor = 36;
var divident = 5;
console.log(divisor/divident)

// Divide 67 by 4 and print the quotient.
 var divisor = 67;
 var divident = 4;
 console.log(divisor/divident)


 //Divide 48 by 7 and print the remainder.
 var divisor = 48;
 var divident = 7;
 console.log(divisor % divident);


//  Print the value of 2 raised to the power of 6.
var num = 2;
var power = 6;
console.log(num ** power);


// Given var x = “Edupoly” and var y = “Training”. Print “Edupoly Training” in the console.
var x = "Deepu";
var y = "G";
console.log(x + " " + y)



// Find the perimeter of a square having each side 4cm.
// perimeter of a square =  4a
var side = 4
var perimeterOfSquare = 4 * side;
console.log(perimeterOfSquare)



// Find the perimeter of a rectangle of length 50cm and breadth 35cm.
var length = 50;
var breadth = 35;
var pofRec = 2 * (length + breadth);
console.log(pofRec)


// Find the circumference of a circle of radius 20cm. (Take π = 3.14)
// circumference of circle = 2pir
var radius = 20;
var pi = 3.14;
var POfCircle = 2 * pi * radius;
console.log(POfCircle)

// Find the area of a square having each side 12cm.
// area of square = a ^ 2
var side = 12;
var AofSquare = side ** 2
console.log(AofSquare)


// Find the area of a rectangle of length 25cm and breadth 16cm.
//  area of a rectangle = length * breadth
var length = 25;
var breadth = 16;
console.log("area of rec ==> ::" ,length * breadth);


// Find the area of a circle of radius 3.75cm.
// area of a circle = pir^2
var pi = 3.14;
var r = 3.75;
var AofCircel = pi * (r ** 2)
console.log(AofCircel)


// Given the marks of 3 subjects as 67,48 and 74. Print the average marks of the 3 subjects.
var sub1 = 67;
var sub2 = 48;
var sub3 = 74;
var noOfSubs = 3;
var average = (sub1 + sub2 + sub2 ) / 3;
console.log(average)



// Given the cost of a product as ₹538.56, add 18% GST to it and print the total cost.
var prodCost = 538.56;
// var gst = 18%;
 var gst = (18 / 100) * 538.56
 console.log(gst);
 var totalCost = prodCost + gst;
 console.log(totalCost)


//  Given a variable var x = 48. Decrement its value by 1
var x = 48;
x--;
console.log(x)


// Write a script to swap two numbers;
var num1 = 25;
var num2 = 5;
// using variable
console.log("before Swap::",num1,num2)
var temp;
temp = num1;
num1 = num2;
num2 = temp;
console.log('After Swap::',num1,num2)



// Write a script to swap two numbers without using 3rd variable (please use *,%,/ not + and -)


var num1 = 0;
var num2 = 5;
console.log("before Swap::",num1,num2)
num1 = num1 * num2;
// num1 === 0 ? num1 % num2 : num1 / num2
num2 = num1 / num2;
num1 = num1 / num2;
console.log('After Swap::',num1,num2)

// betwise operator
var num1 = 10;
var num2 = 20;

num1 = num1 ^ num2;
num2 = num1 ^ num2;
num1 = num1 ^ num2;

console.log("After Swap::", num1, num2);



// Write a script to swap two numbers;
var num1 = 25;
var num2 = 7;
var temp;
temp = num1;
num1 = num2;
num2 = temp;
console.log(num1,num2)

// Write a script to swap two numbers without using 3rd variable (please use *,%,/ not + and -)
var num1 = 25;
var num2 = 7;
num1 = num1 * num2;
num2 = num1 / num2;
num1 = num1 / num2;
console.log(num1,num2)


// Write a program to print the reminder of a division
var num = 25;
var divident = 5;
console.log("Remainder ::", num  % divident)

// Write a program to print the simple interest rate of given P T R values
// simple Interest = (principle amount * Time of years * Rate of interest) / 100
var principleAmount = 100000;
var timeInYears = 1;
var rateOfInterest = 24; // 24%     simpleInterest = (p * T * R) / 100 => R = simpleInterest * 100/ (P * T)
var simpleInterest = (principleAmount * timeInYears * rateOfInterest) / 100;
console.log("SimpleInterest ::",simpleInterest)
// Rate Of Interest = (SimpleInterest * 100) / (P * T)
var rateOfInterest = (simpleInterest * 100) / (principleAmount * timeInYears)
console.log("rateOfInterest :: ",rateOfInterest)


// Write a program to print the max of given two numbers using ternary operator
var num1 = 2;
var num2 = 5;
num1 > num2 ? console.log("Max Number ::",num1) : console.log("max Number ::",num2);
var max = num1 > num2 ? num1 : num2;
console.log("Max Number ::",max)

// Write a program to print the max of given three numbers using ternary operator
var num1 = 5;
var num2 = 2;
var num3 = 25;
var max = (num1 > num2) ? (num1 > num3 ? num1 : num3 ) : (num2 > num3 ? num2 : num3)
console.log("max ::",max)



// Find the area of a square for given length of a side
// area of sqare = a ^2
var sideOfSqare = 4;
var areaOfSqaure = sideOfSqare ** 2
console.log("Area Of Sqaure ::",areaOfSqaure)

// Find the area of a rectangle for given length and breadth
//  Area of rectangle = length * breadth
var length = 5;
var breadth = 4;
var areaOfRectangle = length* breadth;
console.log("AreaOfRectangle ::",areaOfRectangle)



// Find the area of a triangle for given base and height (1/2(base * height))
var base = 10;
var height = 7;
var areaOfTriangle = 0.5 * base * height;
console.log("AreaOFTriangle ::",areaOfTriangle)


// Check a given number is even or not using ternary operator
var num = 2;
var EvenOrOdd = num % 2 === 0 ? "Even" : "Its Not Even Number";
console.log(`Number Is ${num} is ::`,EvenOrOdd)



// Check a given number is odd or not using ternary operator
var num = 10;
var OddorNot = num % 2 != 0 ? "Odd" : "It Not Odd Number";
console.log(`Number => ${num} is Odd Or Not is ::`,OddorNot)


// Check a given number is positive or not using ternary operator/
var number = 0;
var positiveOrNot = number < 0 ? "Not Positive" : "Positive Number";
console.log(`Number ${number} is ::`,positiveOrNot)


// Check a given number is multiple of 4 or not using ternary operator
var number = 16;
var multipleOfFourOrNot = number % 4 === 0 ? `${number} is Multiple of Four` : `${number} is not Multiple of  Four`;
console.log(multipleOfFourOrNot) 



// Print the (a+b)^2 for given a and b values
var a = 10;
var b = 5;
var res = (a + b) ^ 2;
console.log(res)


// Print the (a+b)^3 for given a and b values
var res = (a + b) ^ 3
console.log(res)


// Print the (a+b+c)^2 for given a,b and c values/
var a = 10;
var b= 5;
var c =2;
var res = (a + b + c) ^ 2;
console.log(res)

// Ramesh’s basic salary is input through the keyboard. His dearness allowance is 40% of basic salary, and house rent allowance is 20% of basic salary. Write a program to calculate his gross salary.
var DeepuSalary = 25000;
var DearNessAllowanceInPercent = 40
var DearNessAllowance = (DearNessAllowanceInPercent * DeepuSalary) /100 //40%
// 0r => 0.40 * DeepuSalary
var HouseRentAllowanceInPercent = 20;
var HouseRentAllowanceIn = (HouseRentAllowanceInPercent * DeepuSalary) / 100
// Or => 0.20 * DeepuSalary
var grossSalary = DeepuSalary + DearNessAllowance + HouseRentAllowanceIn
console.log(grossSalary)


// The distance between two cities (in km.) is input through the keyboard. Write a program to convert and print this distance in meters, feet, inches and centimeters.
var City1InKm = 1;
var City2InKm = 5;
// var City1InMeters = City1InKm * 1000;
// var City1InFeets = City1InKm * 3280.84;
// var City1InCentiMeters = City1InKm * (City1InMeters * 100);
// var City1InInches = City1InKm *(City1InMeters * 39.3701);
var distanceInKm = City1InKm - City2InKm
distanceInKm = distanceInKm < 0 ? -(distanceInKm) : distanceInKm
console.log(distanceInKm)
var distanceInMeters = distanceInKm * 1000 // one km = 1000 Meters
var distanceInfeets = distanceInKm * 3280.84 // one km = 3280.84;
var distanceInInches =  (distanceInMeters * 39.3701) // one meter = 39.3701 inches
var distanceInCentiMeters = (distanceInMeters * 100) // one meter = 100 cm
console.log("InMeters ::",distanceInMeters)
console.log("InFeets::",distanceInfeets)
console.log("InCentimeters ::",distanceInCentiMeters)
console.log("InInches::",distanceInInches)
var City1InKm = 1;
var City2InKm = 5;

// Step 1: Calculate absolute distance in km
var distanceInKm = City1InKm - City2InKm;
if (distanceInKm < 0) {
  distanceInKm = -distanceInKm;
}

// Step 2: Convert to other units
var distanceInMeters = distanceInKm * 1000;
var distanceInFeet = distanceInKm * 3280.84;
var distanceInInches = distanceInKm * 39370.1;
var distanceInCentimeters = distanceInKm * 100000;

// Step 3: Display results
console.log("Distance in Kilometers: " + distanceInKm + " km");
console.log("Distance in Meters: " + distanceInMeters + " m");
console.log("Distance in Feet: " + distanceInFeet + " ft");
console.log("Distance in Inches: " + distanceInInches + " in");
console.log("Distance in Centimeters: " + distanceInCentimeters + " cm");



// If the marks obtained by a student in five different subjects are input through the keyboard, find out the aggregate marks and percentage marks obtained by the student. Assume that the maximum marks that can be obtained by a student in each subject is 100.
var sub1 = 82;
var sub2 = 75;
var sub3 = 80;
var sub4 = 85;
var sub5 = 70;

var aggregateMarksObtainedBystudent = sub1 + sub2 + sub3 + sub4 + sub5;
var totalMarksOfFiveSubs = 500
var percentage = (aggregateMarksObtainedBystudent / totalMarksOfFiveSubs) * 100
console.log("marks Obtained among five subs :: ",aggregateMarksObtainedBystudent)
console.log("Percentage Obtained by student is ::",`${percentage.toFixed(2)}%`)


// Temperature of a city in Fahrenheit degrees is input through the keyboard. Write a program to convert this temperature into Centigrade degrees
var Fahrenheit = 10;
var celcius = (5/9) * (Fahrenheit  - 32)
console.log(celcius)
var Fahrenheit = 10;
var celcius = (5 / 9) * (Fahrenheit - 32);
console.log("Temperature in Celsius:", celcius.toFixed(2) + "°C");


// The length & breadth of a rectangle and radius of a circle are input through the keyboard. Write a program to calculate the area & perimeter of the rectangle, and the area & circumference of the circle.

var lengthOfrectangle = 10;
var breadthOfRectangle = 7;
var areaOfRectangle = lengthOfrectangle * breadthOfRectangle;
var parameterOfRectangle = 2 * (lengthOfrectangle + breadthOfRectangle)
var radius = 8;
var pi = 3.14;
var areaOfCircle = pi * (radius ** 2)
var parameterOfCircle = 2 * pi * radius
console.log('Area of rectangle ::',areaOfRectangle)
console.log("ParaMeterOf REctangle ::",parameterOfRectangle)
console.log("Area of circle ::",areaOfCircle)
console.log("PeramenterOf circle",parameterOfCircle)


// Two numbers are input through the keyboard into two locations C and D. Write a program to interchange the contents of C and D.
 var C = 5;
 var D = 7;
 var temp;
 temp = C;
 C = D;
 D = temp
 console.log(C,D)


//  If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits. (Hint: Use the modulus operator ‘%’)
var fiveDigitNum = 12345;
var sumOfDigits = 0;
while(fiveDigitNum > 0){
    var rem = fiveDigitNum % 10
    sumOfDigits += rem
    fiveDigitNum = parseInt(fiveDigitNum / 10)
}
console.log(sumOfDigits)
var fiveDigitNum = 12345;
var sum = 0;
for(let i = 0;fiveDigitNum > 0;i++){
    var rem = fiveDigitNum % 10;
    sum += rem;
    fiveDigitNum = parseInt(fiveDigitNum / 10)
}
console.log("Digits::sum::",sum)

// Using only operators
var fiveDigitNum = 12345;
var sum = 0;
var digit1 = fiveDigitNum % 10;
fiveDigitNum = parseInt(fiveDigitNum / 10)
var digit2 = fiveDigitNum % 10;
fiveDigitNum = parseInt(fiveDigitNum /10);
var digit3 = fiveDigitNum % 10;
fiveDigitNum = parseInt(fiveDigitNum /10);
var digit4 = fiveDigitNum % 10;
fiveDigitNum = parseInt(fiveDigitNum /10);
var digit5 = fiveDigitNum %10;
fiveDigitNum = parseInt(fiveDigitNum / 10);
sum = digit1 + digit2 + digit3 + digit4 + digit5
console.log("Digits Sum ::",sum)


// If a five-digit number is input through the keyboard, write a program to reverse the number.
var fiveDigitNumber = 12345;
var reverse =0;

var digit1 = fiveDigitNumber % 10;
reverse = reverse * 10 + digit1
fiveDigitNumber = parseInt(fiveDigitNumber / 10)
var digit2 = fiveDigitNumber % 10;
reverse = reverse * 10 + digit2
fiveDigitNumber = parseInt(fiveDigitNumber / 10);
var digit3 = fiveDigitNumber % 10;
reverse = reverse * 10 + digit3
fiveDigitNumber = parseInt(fiveDigitNumber / 10);
var digit4 = fiveDigitNumber % 10;
reverse = reverse * 10 + digit4;
fiveDigitNumber = parseInt(fiveDigitNumber / 10);
var digit5 = fiveDigitNumber % 10;
reverse = reverse * 10 + digit5
console.log(reverse) 


var fiveDigitNum = 12345;
var reverse=0;

while(fiveDigitNum > 0){
    var rem = fiveDigitNum % 10;
    reverse = reverse * 10 + rem
    fiveDigitNum = parseInt(fiveDigitNum / 10)
}
console.log(`Reverse of Number${fiveDigitNum}::`,reverse)
var fiveDigitNum = 12345;
var reverse =0;
for(let i = 0; fiveDigitNum > 0; i++){
    var rem = fiveDigitNum % 10;
    reverse = reverse * 10 + rem
    fiveDigitNum = parseInt(fiveDigitNum /10)
}
console.log(reverse)



// If a four-digit number is input through the keyboard, write a program to obtain the sum of the first and last digit of this number.
var fourDigit = 1234;
var sum =0;
var lastdig = fourDigit % 10;
fourDigit = parseInt(fourDigit / 10)
var digit2 = fourDigit % 10;
fourDigit = parseInt(fourDigit / 10)
var digit3 = fourDigit % 10;
fourDigit = parseInt(fourDigit / 10)
var firstDig = fourDigit % 10
sum += (lastdig + firstDig)
console.log(`Sum of First Digit and last Digit of ${fourDigit}is ::`,sum)

var fourDigit = 2347;
var lastDigit = fourDigit % 10;
while(fourDigit > 10){
    fourDigit = parseInt(fourDigit / 10)
}
var firstDig = fourDigit
var sum = firstDig + lastDigit;
console.log(`Sum of firt and last digit Of ${fourDigit}is ::`,sum)


// In a town, the percentage of men is 52. The percentage of total literacy is 48. 
// If total percentage of literate men is 35 of the total population, 
// write a program to find the total number 48 Let Us C of illiterate men and women if the population of the town is 80,000.

var totalPopultion = 80000;
var totalMenInperc = 52;
var totalLiteracyPeopleInperc = 48;
var totalliterateMenInpercOutOfPopulation = 35; 
let totalMen = 0.52 * totalPopultion;
let totalLiteratePeople = 0.48 * totalPopultion;
let literateMen = 0.35 * totalPopultion;
let illiterateMen = totalMen - literateMen;
let totalWomen = 0.48 * totalPopultion;
let literateWomen = totalLiteratePeople - literateMen;
let illiterateWomen = totalWomen - literateWomen;
console.log(illiterateWomen + illiterateMen)

function totalIllitratePeopleInTown(percentageOfMen,PercentageOftotalLiteracy,literateMenInPercentOutOftotalPopulation,totalPopultion){

    let menPopulation = (percentageOfMen / 100) * totalPopultion;
    let womenPopulation = ((100 - percentageOfMen) / 100) * totalPopultion;
    let literateMen = (literateMenInPercentOutOftotalPopulation / 100) * totalPopultion;
    let illiterateMen = menPopulation - literateMen;
    let literatePeople = (PercentageOftotalLiteracy / 100) * totalPopultion;
    let literateWomen = literatePeople - literateMen;
    let illiterateWomen = womenPopulation - literateWomen;
    let res = illiterateMen + illiterateWomen
    return res
}
let resultOfTotalIllitrate = totalIllitratePeopleInTown(52,48,35,80000)
console.log("IllitrateWomen ::",resultOfTotalIllitrate)



function totalIlliteratePeopleInTown(
  percentageOfMen,
  percentageOfTotalLiteracy,
  literateMenPercent,
  totalPopulation
) {
  const menPopulation = (percentageOfMen / 100) * totalPopulation;
  const womenPopulation = ((100 - percentageOfMen) / 100) * totalPopulation;
  const literateMen = (literateMenPercent / 100) * totalPopulation;
  const illiterateMen = menPopulation - literateMen;

  const totalLiteratePeople = (percentageOfTotalLiteracy / 100) * totalPopulation;
  const literateWomen = totalLiteratePeople - literateMen;
  const illiterateWomen = womenPopulation - literateWomen;

  const result = illiterateMen + illiterateWomen;
  return Math.round(result); // Round just in case
}

let result = totalIlliteratePeopleInTown(52, 48, 35, 80000);
console.log("Total illiterate men and women:", result);



// A cashier has currency notes of denominations 10, 50 and 100. 
// If the amount to be withdrawn is input through the keyboard in hundreds, 
// find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

function noOfNotes(money){
 let noOfHundreads = parseInt(money / 100);
 console.log(noOfHundreads)
 money %= 100;
 console.log(money)
  let noOfFifts = parseInt(money / 50);
  money %= 50;
 let noOfTens =parseInt(money / 10);
  let res = noOfHundreads + noOfFifts + noOfTens
 return res
}
const noOfNotesSum = noOfNotes(880)
console.log(noOfNotesSum)

function noOfNotes(money) {
  let noOfHundreds = parseInt(money / 100);
  money %= 100;

  let noOfFifties = parseInt(money / 50);
  money %= 50;

  let noOfTens = parseInt(money / 10);

  return {
    "₹100 notes": noOfHundreds,
    "₹50 notes": noOfFifties,
    "₹10 notes": noOfTens,
    "Total notes": noOfHundreds + noOfFifties + noOfTens
  };
}

const noteBreakdown = noOfNotes(880);
console.log(noteBreakdown);


function notesBreakDown(money){
  let notesDenominations = [100,50,10];
  let result ={};
  for(let i=0; i<notesDenominations.length;i++){
    const note = notesDenominations[i];
    result[note] = Math.floor(money / note);
    money %= note;
    console.log(result)
  }
  return result
}
console.log(notesBreakDown(880))



// If the total selling price of 15 items and the total profit earned on them is input through the keyboard, 
// write a program to find the cost price of one item.


function costOfOneItem(totalSellingPrice,profit,noOfItems){
  let actualToatalPriceOfItems = totalSellingPrice - profit;
  return actualToatalPriceOfItems / noOfItems
}
console.log(costOfOneItem(1200,200,10))


function getCostPricePerItem(totalSellingPrice, totalProfit, numberOfItems) {
  if (numberOfItems <= 0) return "Invalid number of items";
  
  const totalCostPrice = totalSellingPrice - totalProfit;
  const costPerItem = totalCostPrice / numberOfItems;

  return costPerItem;
}



// If a five-digit number is input through the keyboard, 
// write a program to print a new number by adding one to each of its digits. 
// For example if the number that is input is 12391 then the output should be displayed as 23402.

function digitIncByOne(num){
  let incDigitByone = 0;
  for(let i=0;num >0;i++){
    let rem = num % 10;
    let nextDigit = (rem + 1) % 10
    incDigitByone = incDigitByone + (nextDigit * (10**i))
    num = parseInt(num / 10)
  }
  return incDigitByone
}
console.log(digitIncByOne(12395))

function digitIncByOne(num) {
  let incDigitByOne = 0;
  let i = 0;

  while (num > 0) {
    let rem = num % 10;
    let nextDigit = (rem + 1) % 10; // handles 9 → 0
    incDigitByOne = incDigitByOne + (nextDigit * (10 ** i));
    num = parseInt(num / 10);
    i++;
  }

  return incDigitByOne;
}

function digitIncByOneStr(num) {
  return Number(
    num
      .toString()
      .split('')
      .map(d => (parseInt(d) + 1) % 10)
      .join('')
  );
}



// Write a program that converts Centigrade to Fahrenheit.
//  Expected Output : Input a temperature (in Centigrade): 45 113.000000 degrees Fahrenheit.


// Step 1: Input temperature in Centigrade
let celsius = 45; // You can change this or use prompt()

// Step 2: Apply formula to convert to Fahrenheit
let fahrenheit = (celsius * 9 / 5) + 32;

// Step 3: Print result with 6 decimal places
console.log(fahrenheit.toFixed(6) + " degrees Fahrenheit");

// Write a JavaScript program that calculates the volume of a sphere. 
// Expected Output : Input the radius of the sphere : 2.56 The volume of the sphere is 70.276237.

function volumeOfSphere(radius){
  // volume of sphere = 4/3 * pi * r**3
  let pi = 3.14;
  let res = (4/3* pi) * radius ** 3
  return res 
}
console.log(volumeOfSphere(3))


function volumeOfSphereeee(radius){
  let res = (4/3) * Math.PI * Math.pow(radius,3);
  return res.toFixed(6)
}
console.log("volume of Sphere ::",volumeOfSphereeee(3))


// Write a JavaScript program that prints the perimeter of a rectangle to take its height and width as input.
//  Expected Output : Input the height of the Rectangle : 5 Input the width of the Rectangle : 7 Perimeter of the Rectangle is : 24.000000

function perimeterOfRectangle(height,width){
  // perimeterOfRectangle = 2(l+w);
  let res = 2 * (height + width)
  return res.toFixed(6)
}
console.log("PerimeterOfRec ::",perimeterOfRectangle(5,7))



// Write a JavaScript program that converts kilometers per hour to miles per hour.
//  Expected Output : Input kilometers per hour: 15 9.320568 miles per hour

function kmhTOmph(kmh){
  let res = kmh * 0.621371
  return res.toFixed(6)
}

console.log("kilometer per hour  to miles ::",kmhTOmph(15))



// Write a JavaScript program that takes hours and minutes as input, and calculates the total number of minutes. 
// Expected Output : Input hours: 5 Input minutes: 37 Total: 337 minutes.

function noOfMinutes(hours,minutes){
  let hoursToMinutes = hours * 60 ;
  let res = hoursToMinutes + minutes;
  return res
}

console.log("Hour to minutes ::",noOfMinutes(5,37))

const noOfMunitesCopy = (hours, minutes) => hours * 60 + minutes;
console.log(noOfMunitesCopy(5,37))


// Write a program in JavaScript that takes minutes as input, and display the total number of hours and minutes.
//  Expected Output : Input minutes: 546 9 Hours, 6 Minutes

function inTimeFormate(minutes){
  let toHours = parseInt(minutes / 60);
  let min = minutes % 60
  let res = `${toHours} Hours, ${min} Minutes`
  return res
}
console.log(inTimeFormate(546))


// Write a program in JavaScript that reads a forename, 
// surname and year of birth and display the names and the year one after another sequentially. 
// Expected Output : Input your firstname: Tom Input your lastname: Davis Input your year of birth: 1982 Tom Davis 1982

const nameWithDateOfBirth = (firstName,lastName,DOB) => `${firstName} ${lastName} ${DOB}`
console.log(nameWithDateOfBirth("Gubbala","Pradeep Kumar",2002))

// Write a program in JavaScript to calculate the sum of three numbers with getting input in one line separated by a comma.
//  Expected Output : Input three numbers separated by comma : 5,10,15 The sum of three numbers : 30

function sumOfThreeNums(str){
  let res = str.split(',').reduce((acc,cur)=> parseInt(acc) + parseInt(cur),0)
  console.log(res)
}
sumOfThreeNums("5,10,15")
function sumOfThreeNums(str) {
  const numbers = str.split(',').map(Number); // Cleanly convert to numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(`The sum of three numbers: ${sum}`);
}



// Write a JavaScript program to perform addition, subtraction, multiplication and division of two numbers 
// Expected Output : Input any two numbers separated by comma : 10,5 
// The sum of the given numbers : 15 The difference of the given numbers : 5 
// The product of the given numbers : 50 The quotient of the given numbers : 2.000000

function mathsMethods(numInstr){
  const [a,b] = numInstr.split(',').map(Number);
  let addition = a +b;
  let subtraction = a - b < 0 ? -(a - b) : a - b;
  // or
  let difference = Math.abs(a-b)
  console.log(difference)
  let multiplication = a * b;
  let division = a / b
  let res = {
    "Additon" : addition,
    "Difference" : subtraction,
    "Multiplication" : multiplication,
    "Division" : division
  }
  return res
}
console.log(mathsMethods('5,10'))

function mathsMethods(numInstr) {
  const [a, b] = numInstr.split(',').map(Number);
  let addition = a + b;
  let subtraction = Math.abs(a - b);
  let multiplication = a * b;
  let division = (a / b).toFixed(6);

  return {
    "Addition": addition,
    "Difference": subtraction,
    "Multiplication": multiplication,
    "Division": division
  };
}

console.log(mathsMethods('5,10'));



// Write a JavaScript program to find the third angle of a triangle if two angles are given. 
// Expected Output : Input two angles of triangle separated by comma : 50,70 Third angle of the triangle : 60
const thirdAngle = (angleOne,angleTwo) => 180 - (angleOne + angleTwo)
console.log("Third angle of the triangle ::",thirdAngle(50,70))

const thirdAngleFromString = (angleStr) => {
  const [a1, a2] = angleStr.split(',').map(Number);
  return 180 - (a1 + a2);
};



// Write a script to display the maximum number in given two numbers using operators
const maxOutOfNums = (num1, num2) => 
  num1 > num2 ? `${num1} is Maximum` : `${num2} is Maximum`;
console.log(maxOutOfNums(7,25))


// Write a script to display the maximum number in given three numbers using operatorss
const maxOutOfThreeNums = (num1,num2,num3) =>{
  return (num1 > num2) ? (num1 > num3 ? num1 : num3) : (num2 > num3 ) ? num2 : num3
}
console.log(maxOutOfThreeNums(25,7,2002))

console.log(Math.max(25,7,2002),"Using math Method") // Using math Method


// Write a script to display the given two strings in ascending order using operators
const stringsInascendingOrder = (str1,str2) => str1 > str2 ? [str1,str2] : [str2,str1];
console.log(stringsInascendingOrder("Deepu","Deepua"))
