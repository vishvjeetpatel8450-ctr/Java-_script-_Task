let name = ["apple", "banana", "apricot", "blueberry"];

let result ={};

let match = name.sort();

for(let word of match){
    
    let letter = word[0];
    
    if(!result[letter]){
        result[letter] = [];
    }
    result[letter].push(word);
}
console.log(result);