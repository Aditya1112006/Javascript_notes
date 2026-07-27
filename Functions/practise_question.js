// Write a javascript fucntion that return element larger than a number.
let arr = [2,6,4,34,12,64];
let target = 10;
let newarr = [];
function LargerDetection(){
    for(let i = 0;i<arr.length;i++){
        if(target < arr[i]){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(LargerDetection());

// Qs2. Write a JavaScript function to extract unique characters from a string. Example: str = "abcdabcdefgggh" ans = "abcdefgh"

function uniquechar(str){
    let ans = "";
    for(let i = 0; i<str.length;i++){
        if(!ans.includes(str[i])){
            ans += str[i];
        }
    }
    return ans;
}
console.log(uniquechar("aubifibifaadueu"));

// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example: country = ["Australia", "Germany", "United States of America"]
// output: "United States of America"
function Longestcountry(countries){
    let longest = countries[0];
    for(let i = 1;i<countries.length;i++){
        if(countries[i].length>longest.length){
            return countries[i];
        }
    }
    return longest;
}
console.log(Longestcountry(["Australia", "Germany", "United States of America"]));

// Qs4. Write a JavaScript function to count the number of vowels in a String argument
function vowelCount(str){
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(
            str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'i' ||
            str[i] === 'o' ||
            str[i] === 'u'
        ){
            count ++;
        }
    }
    return count;
}
console.log(vowelCount("bvipasl lif"));

// Qs5. Write a JavaScript function to generate a random number within a range (start, end).
function randomNum(start,end){
    if(start>end){
        return "Invalid range";
    }
    let random = Math.floor(Math.random()* (end - start + 1)) + start;
    return random;
}
console.log(randomNum(5, 10));