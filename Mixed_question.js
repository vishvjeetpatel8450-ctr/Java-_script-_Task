    
// 1. Count word frequency in a sentence.

// Input: "hello world hello"
// Output: {'hello': 2, 'world': 1}

// ---------------------------------------------------------

// let name = "hello world hello";

// let words = name.split(" ");

// let frq = {};
 
// for(let word of words){
//     if(frq[word]){
//         frq[word]++;
//     }else{
//         frq[word] = 1;
//     }
// }
// console.log(frq);


//<------------------ !!!!!! ------------------>


// 2. Find the first non-repeating character in a string.

// Input: "aabbcdde"
// Output: 'c'

// ---------------------------------------------------------

// let alpha ="aabbcdde";

// for(let char of alpha){
//     if(alpha.indexOf(char) === alpha.lastIndexOf(char)){
//         console.log(char);
//         break;
//     }
// }


//<------------------ !!!!!! ------------------>


// 4. Remove duplicate elements from a list using Set.

// Input: \[1, 2, 3, 2, 1]
// Output: \[1, 2, 3]

// ---------------------------------------------------------

// let number =[1,2,3,2,1];

// let notrep =[];

// for(let i = 0; i < number.length; i++){
//     if(!notrep.includes(number[i])){
//         notrep.push(number[i]);
//     }
// } 
// console.log(notrep);


//<------------------ !!!!!! ------------------>


// 5. Reverse words in a string (not characters).

// Input: "I love Dart"
// Output: "Dart love I"

// ---------------------------------------------------------

// let str ="I love Dart";

// let result = str.split(" ").reverse().join(" ");

// console.log(result);


//<------------------ !!!!!! ------------------>


    // 6. Check if a string is a palindrome using loop.

    // Input: "madam"
    // Output: true

// ---------------------------------------------------------

// let name = "madam";

// let result =name.split("").reverse().join("");

// if(name.toLowerCase() === result.toLowerCase()){
//     console.log("yes");
// }else{
//     console.log("no");
// }


//<------------------ !!!!!! ------------------>


// 7.Find max occurring element in a list.

// Input: \[1, 2, 2, 3, 3, 3]
// Output: 3

// ---------------------------------------------------------

// let number =[1, 2, 2, 3, 3, 3];

// let result = Math.max(...number);

// console.log(result);


//<------------------ !!!!!! ------------------>


// 9. Find all duplicates in a list using Set.

// Input: \[1, 2, 3, 2, 3, 4]
// Output: \[2, 3]

//---------------------------------------------------------

// let number = [1, 2, 3, 2, 3, 4];

// let repet =[];
// let uniqe =[];

// for(let i = 0; i < number.length; i++){
//     if(!repet.includes(number[i])){
//         repet.push(number[i]);
//     }else{
//         uniqe.push(number[i]);
//     }
// }
// console.log(uniqe);


//<------------------ !!!!!! ------------------>

// 10. Filter even numbers and square them.

// Input: \[1, 2, 3, 4]
// Output: \[4, 16]

//---------------------------------------------------------

// let number = [1, 2, 3, 4];

// let result = number.filter(num => num % 2 == 0) .map(num => num * num);

// console.log(result);


//<------------------ !!!!!! ------------------>


// 11. Group words by their starting letter.

// Input: \["apple", "banana", "apricot", "blueberry"]
// Output: {'a': \['apple', 'apricot'], 'b': \['banana', 'blueberry']}

//---------------------------------------------------------


// let name = ["apple", "banana", "apricot", "blueberry"];

// let result ={};

// let match = name.sort();

// for(let word of match){
    
//     let letter = word[0];
    
//     if(!result[letter]){
//         result[letter] = [];
//     }
//     result[letter].push(word);
// }
// console.log(result);


//<------------------ !!!!!! ------------------>


// 12. Convert a list of strings to a map with index as key.

// Input: \['a', 'b', 'c']
// Output: {0: 'a', 1: 'b', 2: 'c'}

//---------------------------------------------------------

// let str =['a', 'b', 'c'];

// let stor =[];

// let result = str.entries();

// for(let entries of result){
//     stor.push(entries);
// }    
// console.log(stor);


//<------------------ !!!!!! ------------------>


// 15. Print a map where value is length of each word.

// Input: \['cat', 'elephant', 'dog']
// Output: {'cat': 3, 'elephant': 8, 'dog': 3}

//---------------------------------------------------------

// let name = ['cat', 'elephant', 'dog'];

// let result = {};

// for (let i = 0; i < name.length; i++) {
//     result[name[i]] = name[i].length;
// }

// console.log(result);


//<------------------ !!!!!! ------------------>


// 21. Group list of names by their length.

// Input: \['Ram', 'Shyam', 'Aman', 'Jay']
// Output: {3: \['Ram', 'Jay'], 5: \['Shyam', 'Aman']}

//---------------------------------------------------------

// let name =['Ram', 'Shyam', 'Aman', 'Jay'];

// let sort={};

// for(let word of name){

//     let len = word.length;

//     if(!sort[len]){
//         sort[len] = [];git 
//     }
//     sort[len].push(word);
// }
// console.log(sort);


//<------------------ !!!!!! ------------------>

// 22. Capitalize first letter of every word.

// Input: "hello world"
// Output: "Hello World"

//---------------------------------------------------------

// let str ="hello world";

// const result = str.charAt(0).toUpperCase() + str.slice(1, 6) + str.charAt(6).toUpperCase() + str.slice(7);

// console.log(result);   


//<------------------ !!!!!! ------------------>

// 29. Group list of numbers into even and odd.

// Input: \[1, 2, 3, 4, 5]
// Output: {'even': \[2, 4], 'odd': \[1, 3, 5]}

//---------------------------------------------------------

// let number =[1, 2, 3, 4, 5];

// let even = [];
// let odd = [];

// for(let nums of number){
//     if(nums % 2 == 0){
//         even.push(nums);
//     }else{
//         odd.push(nums);
//     }
// }
// console.log({ even , odd });


//<------------------ !!!!!! ------------------>


// 35. Count total vowels in a sentence.

// Input: "I am learning Dart"
// Output: 6

//---------------------------------------------------------

// let sentence = "I am learning Dart";

// let count = 0;

// const vowels ="aeiouAEIOU";

// for(let char of sentence){
//     if(vowels.includes(char)){
//         count++
//     }
// }    
// console.log(count);


//<------------------ !!!!!! ------------------>

// 33. Print elements that appear only once in a list.

// Input: \[1, 2, 2, 3, 4, 4]
// Output: \[1, 3]

//---------------------------------------------------------

// let number = [1, 2, 2, 3, 4, 4];

// for(let nums of number){
//     if(number.indexOf(nums) === number.lastIndexOf(nums)){
//         console.log(nums);
//     }
// }


//<------------------ !!!!!! ------------------>


//  26. Remove vowels from a string.

// Input: "hello world"
// Output: "hll wrld"
  
//---------------------------------------------------------

// let sentence = "hello world";

// const vowels ="aeiouAEIOU"  
// let result =sentence.split("").filter(char => !vowels.includes(char)).join("");

// console.log(result);


//<------------------ !!!!!! ------------------>


// 34. Remove empty strings or null values from a list.

// Input: \['apple', '', null, 'banana']
// Output: \['apple', 'banana']

//---------------------------------------------------------

// let str = ['apple', '', null, 'banana'];

// let result = str.filter(item => item != "" && item !== null);

// console.log(result);


//<------------------ !!!!!! ------------------>


// 2. Chunk a list into smaller lists of size n.

// Input: \[1,2,3,4,5,6], size = 2
// Output: \[\[1,2], \[3,4], \[5,6]]

//---------------------------------------------------------

// let num = [1,2,3,4,5,6];

// let sum = 2;

// let result = [];

// for(let i = 0 ; i < num.length ; i += sum){
//     result.push(num.slice(i , i + sum));
// }
// console.log(result);


//<------------------ !!!!!! ------------------>


// 24. Sort a map by its values in descending order.

// Input: {'a': 2, 'b': 5, 'c': 1}
// Output: {'b': 5, 'a': 2, 'c': 1}

//---------------------------------------------------------

// let number = {'a': 2, 'b': 5, 'c': 1};

// let result = Object.values(number).sort((a , b) => b - a);

// console.log(result);


//<------------------ !!!!!! ------------------>


// 20. Print only unique characters in a string.

// Input: "aabbcde"
// Output: \['c', 'd', 'e']


//---------------------------------------------------------

// let str = "aabbcde";

// let result = str.split('').filter(char => str.indexOf(char) === str.lastIndexOf(char));

// console.log(result);


//<------------------ !!!!!! ------------------>


// 16. Check if two lists have any common elements.

// Input: \ x   
// Output: true 

//---------------------------------------------------------

// let arr1 = [1 , 2 , 3];
// let arr2 = [3 , 4 , 5];

// let result = arr1.some(x => arr2.includes(x));

// console.log(result);

//<------------------ !!!!!! ------------------>

// let number = {'a': 1, 'b': 2};
// let number2 = {'b': 3, 'c': 4};

// let result = {};

// let mix = {...number,...number2};

// for(let key of Object.keys(mix)) {
//     result[key] = (number[key] || 0) + (number2[key] || 0);
// }

// console.log(result);


    // let sentense = "I love programming in Dart";

    // let spl = sentense.split(" ");

    // let result = "";

    // for(let char of spl){
    //     if(char.length > result.length){
    //         result =  char;
    //     }
    // }   
    // console.log(result);


// let str ="banana";

// let count ={};

// for(let i = 0 ; i < str.length ; i++){
//     let char = str [i];

//     if(count[char]){
//         count[char]++;
//     }else{
//         count[char] = 1;    
//     }
// }
// console.log(count);
// let a = 10
// const a = 10;
// function test() {
//   const a = 20;
//   console.log(a);
// }

// // test();
// console.log(a);
// const c;
// c = 10
// console.log(c)

// let num =["banana","kiwi",88,99,,null,"","4","5","6"];

// let word = [];
// let nums = [];
// let nuls = [];

// num.forEach(item => {
//     if(item === undefined || item === null || item === Number){
//         nuls.push(item);
//     }else if(isNaN(item)){
//         word.push(item);
//     }else{
//         nums.push(item);
//     }
// });
// console.log("word:", word);
// console.log("num:", nums);
// console.log("nuls", nuls);


// Input: "aabbcdde"
// Output: 'c'


// let alpha ="aabbcdde";

// for(let i = 0;i < alpha.length;i++){

//     let count = 0;

// for(let j =0;j < alpha.length;j++){

//     if(alpha[i] === alpha[j]){
//         count++;
//     }
// }
// if(count === 1){
//     console.log(alpha[i]);
//     break;
// }
// }


//--------------------------------------------------------------------------------

    // let arr = [1, 2, 3, 2, 1];
    // let rep = {};
    // let res = [];

    // for(let num of arr){
    //     if(!rep[num]){
    //         res.push(num);
    //         rep[num] = true;
    //     }
    // }
    // console.log(res);

// let arr = [1, 2, 3, 2, 1];
// let res =[...new Set(arr)];
// console.log(res);

// 1,2,3