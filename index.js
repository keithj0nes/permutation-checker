let lodash = require("lodash");

checkPerm = (str1, str2) => {

  let letterCount1 = {};
  let letterCount2 = {};

  if(str1.length !== str2.length){
    console.log("strings are not the same length");
    return false;
  }

  letterLooper = (str, letterCounter) => {
    for(let i = 0; i < str.length; i++){
      let currentLetter = str[i];
      if(!letterCounter[currentLetter]){
        letterCounter[currentLetter] = 1;
      } else {
        letterCounter[currentLetter] += 1;
      }
    }
  }

  letterLooper(str1, letterCount1);
  letterLooper(str2, letterCount2);

  if(!lodash.isEqual(letterCount1, letterCount2)){
    console.log("lodash says it's not equal");
    return false;
  }

  console.log("these words are the permutations of each other");
  return true;
}

checkPerm("hello", "hlelo")
