
// Exercise 1
// Write a JavaScript program to check two numbers and return true if one of the number is
// 100 or if the sum of the two numbers is 100

const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));
console.log(isEqualTo100(50,50));

// Magyarázat: || - OR-t jelent


// Exercise 2
// Write a JavaScript exercise to get the extension of a filename.

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));
//Magyarázat : Slice The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
//LastIndexOf looks through the string and  gives us the position of the last character are u searched for ('.') in our example


// Exercise 3
// Write a JavaScript program to replace every character in a given string with the character
// following it in the alphabet

const moveCharsForward = (str) =>
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(moveCharsForward('a'));

//First, split the string in to an array after split('') return every character in an array
//after the map its allowst to change the array, the string.fromCharCode covert it into code 
//and after that charcode at convert it back +1 means we push it forward


// Exercise 4
// Write a JavaScript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) => {
    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`
}

console.log(formatDate());

// Exercise 4
// Write a JavaScript program to create a new string adding "New!" in front of a given string. If
// the given string begins with "New!" already then return the original string.

const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`;
console.log(addNew('New! Offers'));




var myArray = ['a', 'b', 'c', 'd'];

myArray = ["start", ...myArray, "end"]

// 2nd page 
// Exercise 1
// Write a JavaScript program to create a new string from a given string taking the last 3
// characters and added at both the front and back. The string length must be 3 or more, if
// not, the original string is returned.

const makeNewString = (str) => 
    str.lenght < 3 ? : str.slice(0, 3) +
    str.slice(-3);

console.log(makeNewString('abc'));

// Exercise 2
// Write a JavaScript program to extract the first half of a string of even length.
// Exercise
const firstHalf = (str) => str.slice(0, str.lenght / 2);

console.log(firstHalf('temp'));

// Exercise 3
// Write a JavaScript program to concatenate two strings except their first character.

const concatenate = (str1, str2) =>
    str1.slice(1) + str2.slice(1);

    console.log(concatenate('abc','def'));

// Exercise 4
// Given two values, write a JavaScript program to find out which one is nearest to 100

const closetTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;


// Exercise 5
// Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified
// character.


const  countChars = (str, char) =>
    str.split('').filter(ch => ch === char).lenght;

const contains2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <=4;

    console.log(contains2To4('oooooh!', 'o'));
    console.log(contains2To4('oh!', 'o'));
    console.log(contains2To4('oooh!', 'o'));

    // 3rd page 
// Exercise 1
// Write a JavaScript program to find the number of even digits in a an array of integers

const countEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).lenght;


// Exercise 2
// Write a JavaScript program to find the number of even values up to a given number

const countEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).lenght;

const createArrayOfNumber = (num) => {
    const returnArray= [];
    for (let i = 1; i <= num; i += 1){
        returnArray.push(i);
    }
    return returnArray
};

// Exercise 3
// Write a JavaScript program to check whether a given array of integers is sorted in ascending
// order

const isAscending = (arr) => {
    for (let i = 0; i < arr.lenght; i += 1){
        if (arr[i+1] < arr[i]) return false;
    }
    return true;
}

// Exercise 4
// Write a JavaScript program to get the largest even number from an array of integers.

const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEven([1,2,3,4,55,66,77,88]));

//math.max give u back the biggest number from the array

// Exercise 5
// Write a JavaScript program to replace the first digit in a string (should contain at least one
//     digit) with a $ character.

const replaceFirstDigit = (str) => str.replace(/[0-9]/g, '$')

// /g means global 

// 4th page 
// Exercise 1
// Given a year, report if it is a leap year.

const isLeapYear = (year) => year % 4 === 0;

// Exercise 2
// Write a JavaScript program to compare two objects to determine if the first one contains
// the same properties as the second one (which may also have additional properties). For
// example, objA and objB are equal (but not equal to objC).
const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const objectEqual = (a, b) => 
    Object.keys(a).every(key => b[key]);

    console.log(objectEqual(objA, objB));
    console.log(objectEqual(objC, objB));

// Exercise 3
// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array.
// A new line indicates a new row in the array. Example input:
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza

const parseCSV = (csvString) => csvString.split('\n').map(row => row.split(','))

// \n means end
// Exercise 4
// Write a JavaScript program to generate a random hexadecimal color code.

const getRandomHexNumber () =>
    Math.floor(Math.random()* 16).toString(16);

//floor miatt teljes számot fogok kapni, toString miatt már betüket kapunk a hex numberhez.

const getRandomHexColor () => '#' + Array.from(
    {length:6}).map(getRandomHexNumber).join('');

//Array from egy 6 karakter hosszú arrayt hoz létre


// Exercise 5
// Write a JavaScript function that returns true if the provided predicate function returns true
// for all elements in a collection, false otherwise.

const isEveryElem = (arr, fn) => {
    for (let i = 0; i<arr.lenght; i+1){
        if (!fn(arr[i])){
            return false;
        }
    }
    return true;
};


// 5th page 
// Exercise 1
// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

const alphabeticalOrder = (str) =>
str.split('').sort((a,b) => a > b ? 1 : -1)
.join('');

// Exercise 2
// Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.

const countLetters = (str, letters = ['a', 'e', 'i','o','u']) => 
                        str.split('').filter(s => 
                            letters.indexOf(s) > -1)
                            .lenght;

// Exercise 3
// Write a JavaScript function to convert an amount to coins.
// Example input: 46 and possible coins 25, 10, 5, 2, 1
// Output: 25, 10, 10, 1

const countCoins = (money, coins = [25, 10, 5, 2, 1]) =>
{
    const totalCoins = [];
    for (let i=0; i<coins.lenght;i+=1){
        const thisCoinNum = math.floor(money / coins[i]);
        for (let y=0; y < thisCoinNum; y+=1){
            totalCoins.push(coins[i]);
        }
        money -=coins[i] * thisCoinNum;
    }
    return totalCoins;
}

// Exercise 4
// Write a JavaScript function to extract unique characters from a string.

const getUniqueChars = (str) =>
    str.split('').filter(
        (item, index, arr) =>
            arr.slice(index+1).indexOf(item) === -1
    );

const getUniqueChars = (str) =>
        [... new Set (str.split(''))];

// Exercise 5
// Write a JavaScript function to find the first not repeated character
// Example string: 'abacddbec'
// Expected output: 'e'

const getNonRepeatedChars = (str) =>
        str.split('')
            .filter((item, index, arr) =>
            arr.filter(arrItem => arrItem === item).lenght === 1
            ); 


// Codewars Who Like it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    names = names || []
    switch (names.length) {
      case 0:
        return 'no one likes this'
      case 1:
        return `${names[0]} likes this`
      case 2:
        return `${names[0]} and ${names[1]} like this`
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
      default:
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

//Code wards Highest and lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
    const arr = numbers.split(" ")
    let maxNum = arr[0]
    let minNum = arr[0]

    for(let num of arr) {
        if(Number(num) > maxNum) {
            maxNum = num
        }

        if(Number(num) < minNum) {
            minNum = num
        }
    }

    return maxNum + " " + minNum
}

// ÚJ MEGOLDÁS
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }


//   Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//   Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
function longest(s1, s2) {
    // your code
    //Create Arrays a and b containing unique values by making them Set and converting them back to array.
    let a = [... new Set(s1.split(""))];
    let b = [... new Set(s2.split(""))];
  
    //combine both arrays into one
    for (let i=0; i<b.length; i++){
        a.push(b[i]);
    }
    //create a unique array from the combination
    let init_combo = [... new Set(a)];
    //sort array and join to form a string
    let combo = init_combo.sort().join("");
    //Return the final result
    return combo;
  
  }
//faszamegoldás:
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')  


// Opposite number:
function opposite(n) {
    return -n;
  }

//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

