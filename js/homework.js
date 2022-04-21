"use strict";
//Завдання 8

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//     // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// Завдання 9

// Варіант 1
// function add(a, b, c) {
//   // Change code below this line
//     return a + b + c;
//   // Change code above this line
// }
// add(2, 5, 8); //15

// let rezult = add(15, 27, 10); // 52
// console.log(rezult)

// rezult = add(10, 20, 30); // 60
// console.log(rezult);

// rezult = add(5, 10, 15); // 30
// console.log(rezult);

// Варіант 2
// function add(a, b, c) {
//   // Change code below this line

// return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// Завдання 10
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `"You picked ${name}, price per item is ${price} credits"`;
//   // Change code above this line
//   return message;
// };
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Enginer', 4070));

// Завдання 11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5,100));
// console.log(calculateTotalPrice(8,60));
// console.log(calculateTotalPrice(3,400));
// console.log(calculateTotalPrice(1,3500));
// console.log(calculateTotalPrice(12,70));

// Завдання 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// const message = `You ordered droids worth ${(orderedQuantity * pricePerDroid) + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//  // Change code above this line
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// Завдання 13
// function isAdult(age) {
//   // Change code below this line
//   const passed =(age >= 18);

//   // Change code above this line
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// Завдання 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === 'jqueryismyjam';

//   // Change code above this line
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// Завдання 15
// function checkAge(age) {
//   let message;
//   if (age >= 18) { // Change this line
//    message = 'You are an adult';}
//   else  {message = 'You are a minor';}

//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// Завдання 16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered > available) {message = "Not enough goods in stock!" }
//   else { message = "Order is processed, our manager will contact you."};
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// //Завдання 17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//Завдання 18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {message = "Insufficient funds!";}
//   else {message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;}

//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

//Завдання 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null ) { // Change this line
//     message = 'Canceled by user!';
//   } else if (password === 'jqueryismyjam' ) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//Завдання 20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if(ordered === 0) {message = "There are no products in the order!";}
//   else if(ordered > available ) {message = "Your order is too large, there are not enough items in stock!"}
//   else {message = "The order is accepted, our manager will contact you" }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//Завдання 21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

//Завдання 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro'|| subType === "vip" ; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

//Завдання 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

//Завдання 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//     if (totalSpent >= 50000) { discount = GOLD_DISCOUNT }
    
//     else if (totalSpent >= 20000) { discount = SILVER_DISCOUNT }
    
//     else if (totalSpent >= 5000) { discount = BRONZE_DISCOUNT }
        
//     else { discount = BASE_DISCOUNT }

//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

//Завдання 25
// function checkStorage(available, ordered) {
// let message
//   // Change code below this line

//  message = (ordered > available) ? 'Not enough goods in stock!' : 'The order is accepted, our manager will contact you';
  
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//Завдання 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//    message = (password === ADMIN_PASSWORD) ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

//Завдання 27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

//Завдання 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// switch (password) {
//   case null:
//   message = "Canceled by user!";
//   break;

//   case "jqueryismyjam":
//   message = "Welcome!";
//   break;

//   default:
//     message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//Завдання 29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;
//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//       break;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

 //Завдання 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }
// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

//Завдання 31
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];
// console.log(courseTopic.length);
// console.log(courseTopic[0]);
// console.log(courseTopic[courseTopicLength - 1]);

//Завдання 32
// function getSubstring(string, length) {
//   const substring = string.slice(0,length); // Change this line

//   return substring;
// }
// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// Завдання 33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//     if (maxLength >= message.length) {result = message}
//     else {result = message.slice (0, maxLength) + "..."}
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// Завдання 34
// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

// Завдання 35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name) ; // Change this line
//   return result;
// }
// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));

// Завдання 36
// function checkForSpam(message) {
//     let result;
//   // Change code below this line
//     if (message.toLowerCase().includes("spam") === true ||
//         message.toLowerCase().includes("sale") === true)
//     {result = true}
//     else{result = false}
// //   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));


// const fruits = ["apple","peach","pear","banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// Change code below this line
//====================================================================================================================================================================================================================================================


 // Завдання 9
// function getExtremeElements(array) {
//   // Change code below this line
//     const firstArrayElement = array[0];
//     const lastArrayIndex = array.length - 1;
//     const lastArrayElement = array[lastArrayIndex];
//     return [firstArrayElement, lastArrayElement];
// // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]))
// // Ви маєте повернути новий масив, в якій помістити 2 елементи. Тобто return [звернутись через індекс до першого елементу, звернутись через індекс до останнього елемента]

 // Завдання 10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//    words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log (splitMessage("best_for_week", "_"));

// //Завдання 11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let calculateWordPrice;
//     const messageSplite =  message.split(" ");
//     const arraylength = messageSplite.length;
//     calculateWordPrice = arraylength * pricePerWord;
//     return calculateWordPrice;
// //     const rezult = (message.split(delimeter).length * pricePerWord);
// //     return rezult;
// //    // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

//Завдання 12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//     string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//Завдання 13
// function slugify(title) {
//   // Change code below this line
//     let slugString;
//     let lowerCaseTitle = title.toLowerCase();
//     let lowerCaseArray = lowerCaseTitle.split(" ");
//     slugString = lowerCaseArray.join("-");
   
//
//   // Change code above this line
//     return slugString;
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//Завдання 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2);
// // const lastThreeEls = ;

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//Завдання 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);
// // (Change this line
// console.log(allClients);

// Завдання 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let message;
//     const allArray = firstArray.concat(secondArray);
//     let allArraylength = allArray.length;
//     if (allArraylength > maxLength) {message = allArray.slice(0,maxLength)}
//      else {message = allArray}
//     return message;
//     // Change code above this line
//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// Завдання 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// }

// Завдання 18 ??????????????????????????
// function calculateTotal(number) {
//     // Change code below this line
//     let sum = 0;
//     for (let i = 1; i <= number; i += 1)
//         sum += i;
//     return sum
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// Завдання 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+= 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// Завдання 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1)
//     total += order[i];

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice());

// Завдання 21
// function findLongestWord(string) {
//   // Change code below this line
//   let stringArray = string.split(" ");
//   let longestMax = stringArray[0];
//   for (let i = 0; i < stringArray.length; i += 1) {
//     if (stringArray[i].length > longestMax.length) {
//       longestMax = stringArray[i]
//     }
//   }
//   return longestMax;
// }
//  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//  console.log(findLongestWord("Google do a roll"));
//  console.log(findLongestWord("May the force be with you"));

//   // Change code above this line
// Завдання 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i+=1) {
//   numbers.push(i);
// }
// return numbers
//   // Change code above this line
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// // Завдання 23
// function filterArray(numbers, value) {
//    // Change code below this line
//     let valueNumbers = [];
//     for (let i = 0; i < numbers.length; i += 1){
//         if (numbers[i] > value) {valueNumbers.push(numbers[i])}
//     }
// return valueNumbers

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Завдання 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//    return fruits.includes(fruit);
    
//    // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));

// Завдання 25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//     let newArray = [];
//     for (let i = 0; i < array1.length; i += 1) 
//         if (array2.includes(array1[i]))
        
//         { newArray.push(array1[i]) }
    
//     return newArray

//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



















