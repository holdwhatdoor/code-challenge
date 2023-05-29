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
  // your code here - don't forget to return a number!
};
