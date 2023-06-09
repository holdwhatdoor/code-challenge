const findSum = function(array) {
  // variable set to value of passed param 'array' using reduce() with callback function that adds each element of the array
  var sum = array.reduce(function (sum, array){
    return sum + array;
  }, 0);
return sum;
};

const findFrequency = function(array) {
    // Object variable with declared properties of letter strings
    var mostLeast = {
      most: '',
      least: ''
    }
    // array variables of letter instances, array of object letter/count and array of number of times letter appears as 'counted'  
    var letterInstance = [];
    var countArray = [];
    var counted = [];
    // forEach function to populate 'letterInstance' array with each letter in the passed param 'array'
    array.forEach(function (item){      
      if(item.hasOwnProperty(item)){
        letterInstance[item] += 1;
      }
      else {
        letterInstance[item] = 1;
      }
    });
      // variable to hold an array of each letter 
    let letters = Object.keys(letterInstance);
    // for loop to iterate through letter instances and create object with count 0 for each letter
    for(i = 0; i < letters.length; i++){
      let letterObj = {
        letter: '',
        count: 0
      }
      letterObj.letter = letters[i];
      // inner for loop to iterate 'array' and increase count of letter instance within the passed param 'array'
      for(j = 0; j < array.length; j++){
        if(array[j] === letters[i]){
          letterObj.count++;
        }
      }  
      // populates 'counted' array with count for each letter
      counted.push(letterObj.count);
      // populates 'countArray' with letter objects of letter and count property/values
      countArray.push(letterObj);
    }
  // variables assigned to value of hi and low numbers of 'counted' array
    var max = Math.max(...counted);
    var min = Math.min(...counted);
    /**
     * for loop to iterate object array 'countArray' and compare 
     * count value of each letter object to most and least count and 
     * and assign 'mostLeast' object letter properties .most and .least
    */
    for(k = 0; k < countArray.length; k++){
      if(max === countArray[k].count){
        mostLeast.most = countArray[k].letter;
      }
      else if(min === countArray[k].count){
        mostLeast.least = countArray[k].letter;
      }
    }
    return mostLeast;
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
  var products = [];
  for(i = 0; i < array.length; i++){
    var current = array[i];
    var next = array[i+1];
    var product = current * next;
    if(product){
      products.push(product);
    }
  }
  var largestProduct = Math.max(...products);
  return largestProduct;
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
