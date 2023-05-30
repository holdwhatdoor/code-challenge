const findSum = function(array) {
  // variable set to value of passed param 'array' using reduce() with callback function that adds each element of the array
  var sum = array.reduce(function (sum, array){
    return sum + array;
  }, 0);
return sum;
};
const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  // declared variables - boolean, string and array
  let palindrome;
  let matchTestStr = "";
  let matchTestArray = [];
  // loops 'str' param and sets a string variable for each string index in reverse order  
  for(i = str.length - 1; i >= 0; i--){
    matchTestArray.push(str[i]);
    matchTestArray = matchTestArray.join("").split(",");
    matchTestStr = matchTestArray[0];
  }
  // tests reversed string variable against initial passed param 
  // string - isPalindrome set to 'true' if the strings match, otherwise false
  if(matchTestStr === str){
    palindrome = true;
  }
  else{
    palindrome = false;
  }
  return palindrome;
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // variables to index beginning and end of parenthesis
  let begin;
  let end;
  // for loop to set 'begin' and 'end' vars to index of open/close parenthesis
  for(i = 0; i < str.length; i++){
    begin = str.indexOf('(');
    end = str.indexOf(')');
    end = end + 1;
  }
  // var 'slice' set to string of all indexed chars from open to closed parenthesis and removed from passed param 'str' via .replace(); returns str
  let slice = str.slice(begin, end);
  str = str.replace(slice, "");
  return str;
};

const scoreScrabble = function(str) {
  var letterValues = [];
  // for loop iterates through passed param 'str' and adds corresponding value for 'str' index char and pushes to 'letterValues' array
  // 'letterScore' var uses .reduce function on 'letterValues' array and returns 'letterScore'
    for(i = 0; i < str.length; i++){
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' ||
      str[i] === 'o' || str[i] === 'u' || str[i] === 'l' ||
      str[i] === 'n' || str[i] === 'r' || str[i] === 's' ||
      str[i] === 't'){
        letterValues.push(1);
      }
      if(str[i] === 'd' || str[i] === 'g'){
        letterValues.push(2);
      }
      if(str[i] === 'b' || str[i] === 'c' || str[i] === 'm' ||
      str[i] === 'p'){
        letterValues.push(3);
      }
      if(str[i] === 'f' || str[i] === 'h' || str[i] === 'v' ||
      str[i] === 'w' || str[i] === 'y'){
        letterValues.push(4);
      }
      if(str[i] === 'k'){
        letterValues.push(5);
      }
      if(str[i] === 'j' || str[i] === 'x'){
        letterValues.push(8);
      }
      if(str[i] === 'q' || str[i] === 'z'){
        letterValues.push(10);
      }
    }
    var letterScore = letterValues.reduce(function (sum, number){
      return sum + number;
    }, 0);
    return letterScore;
};
