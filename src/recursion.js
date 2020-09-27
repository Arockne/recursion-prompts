/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  //if the value of n is less than 0
  if (n < 0) {
    //return -1
    return null;
  }
  //if the value of n is 0
  if (n === 0) {
    //return 1
    return 1;
  }
  //return n * factorial(n-1)
  return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  //if the length of the array is 0
  if (array.length === 0) {
    //return 0
    return 0;
  }
  //Create a copy of the input array
  var copy = array.slice();

  //For every call to the function remove the last element
  var lastElement = copy.pop();
  //Add the last element to the function until the array is 0
  return lastElement + sum(copy);
  
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //if array is empty
  if (array.length === 0) {
    //return 0
    return 0;
  }
  
  //Initialize sum to be 0
  var sum = 0;
  //utilizing a for loop
  for (var i = 0; i < array.length; i++) {
    //if the current element is an array
    if (Array.isArray(array[i])) {
      //add sum to arraySum with an argument of the current element
      sum += arraySum(array[i]);
      //otherwise
    } else {
      //add sum to the current element
      sum += array[i];
    }
  }
  //return the total
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  //if n is 0
  if (n === 0) {
    //return true
    return true;
  }

  //if n is 1
  if (n === 1) {
    //return false
    return false;
  }

  //if n is positive
  if (n >= 0) {
    //return the function call subtracted by 2
    return isEven(n - 2);
  }

  //if n is negative
  if (n < 0) {
    //return the function add by 2
    return isEven(n + 2)
  }

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //if n is 0
  if (n === 0) {
    //return 0
    return 0;
  }

  //initialize sum to be input value minus 1
  var sum = n - 1;

  //if the value is greater than 0
  if (n > 0) {
    //add the value of the function with an argument of n - 1
    sum += sumBelow(n - 1);
  }

  //if the value is less than 0
  if (n < 0) {
    //let sum be a negative num plus one
    sum = n + 1;
    //add the value of the function with an argument of n + 1
    sum += sumBelow(n + 1);
  }

  return sum;
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  //if y is equal to x + 1
  if (x === y) {
    return [];
    //return y in an array
  }
  
  var result;
   
  //if x is less than y
  if (x < y) {
    //store the value of the first item in the stack
    result = range(x, y - 1);  
    //store the rest of the values in the array
    if (x !== y - 1) {
      result.push(y - 1);
    } 
  //otherwise
  } else {
    //store the result calling range with the arguments of x minus 1 and y
    result = range(x - 1, y);
    //if the value of x minus one does not equal y
    if (x - 1 !== y) {
      //store the value of x minus one into the result array to the front
      result.unshift(x - 1)
    }
  }
  //return the array of numbers
  return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //if exp is 0
  if (exp === 0) {
    //return 1 since base ^ 0 is 1
    return 1;
  }

  //if the exp is less than 0
  if (exp < 0) {
    //return the function with the arguments of the base, exp adding 1 divided by the base
    return exponent(base, exp + 1) / base; 
  }
  //return base * the function with the arguments of base and exp -1
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return '';
  }
  
  return reverse(string.slice(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  //if x is 0
  if (x === 0) {
    //return the remainder
    return y;
  }
  //if either x or y is 0
  if (x < 0 || y < 0) {
    //return null
    return null;
  }
  //return the value of the result of the recursion assigning the arguments of y % x and x
  return gcd(y % x, x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  //go through every element in the string
  if (str.length === 0) {
    return [];
  }

  var result = createArray(str.slice(1));
  result.unshift(str[0]);
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  }

  var reverse = reverseArr(array.slice(1));
  reverse.push(array[0]);
  return reverse;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {

  if (length === 0) {
    return [];
  }

  var result = buildList(value, length - 1);
  result.push(value);
  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  //if n is 0
  if (n === 0) {
    //return an empty array
    return [];
  }
  var result;
  //store the last call to fizzBuzz with an argument of n minus 1 in a result variable
  result = fizzBuzz(n - 1);
  //if n is multiple of 3 and 5
  if (n % 3 === 0 && n % 5 === 0) {
    //assign n to be 'FizzBuzz'
    n = 'FizzBuzz';
  }
  
  //if n is multiple of 3
  if (n % 3 === 0) {
    //assign n to be 'Fizz'
    n = 'Fizz';
  }

  //if n is multiple of 5
  if (n % 5 === 0) {
    //assing n to be 'Buzz'
    n = 'Buzz';
  }
  //store n into result array
  result.push(n.toString());
  //return result
  return result;
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  }

  var count = countOccurrence(array.slice(1), value);
  if (value === array[0]){
    count++;
  }
  return count;
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //if array.length is equal to 0
  if (array.length === 0) {
    //return an empty array
    return [];
  }
  //initialize a result var
  var result;
  //assing the recursion of rMap to result having arrays first index to be removed each time
  result = rMap(array.slice(1), callback);
  //push each value of the result utilizing the callback function on each value
  result.unshift(callback(array[0]));
  //return result
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  //initialize count variable to be the value of 0
  var count = 0;
  //if the typeof object is indeed an object
  if (typeof obj === 'object') {
    //iterate through the object
    for (var currentKey in obj) {
      //assign current value of the object
      var value = obj[currentKey];
      //if the inputKey is equal to the currentKey
      if (key === currentKey) {
        //increment count
        count++
      }
      //if the typeof the currentvalue is an object
      if (typeof value === 'object') {
        //increment count to the function with value and key
        count += countKeysInObj(value, key);
      }
    }
  }
  return count
}
// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  //initialize the count variable to be 0
  var count = 0;
  //if the type of obj is indeed an obj
  if (typeof obj === 'object') {
    //iterate through the obj
    for (var key in obj) {
      //initialize the value var to be the current value in the obj
      var currentValue = obj[key];
      //if the value in the object is equal to the input value
       if (currentValue === value) {
         //increment the count
         count++;
       }
       //if the current value is an object
       if (typeof currentValue === 'object') {
        //increment count to the functio with currentvalue and key
         count += countValuesInObj(currentValue, value);
       }
     }
  }
  //return count;
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
//I
  //Object of key value pairs and objects as values
//O
  //the input obj reassigned old input keys to be the new input keys
var replaceKeysInObj = function(obj, oldKey, newKey) {
  //if the type of the input object is indeed an object
  if (typeof obj === 'object') {
    //iterate over the object
    for (var key in obj) {
      //if the current key is equal to the oldKey
      if (key === oldKey) {
        //reassign the oldkey to be the new key
        obj[newKey] = obj[oldKey];
        //delete the oldkey
        delete obj[oldKey];
      }
      //if the currentValue is an object
      if (typeof obj[key] === 'object') {
        //utilize recursion calling the function an argument the currentValue, oldkey, newKey
        replaceKeysInObj(obj[key], oldKey, newKey);
      }
    }
  }
  //return obj;
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
