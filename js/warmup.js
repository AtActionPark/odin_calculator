myMax = function(array){
  var max = array[0];
  for (i = 1;i< array.length;i++){
    if (array[i] > max){
      max = array[i];
    }
  }

  console.log(max);
  return max;
};

vowel_count = function(string){
  var vowels = string.match(/([aeiouy])/ig);
  var counter = vowels.length;
  
  console.log(counter);
  return counter;
}

reverse = function(string){
  var rev = "";
  for (i = string.length-1; i>= 0; i--){
    rev += string[i]
  }

  console.log(rev);
  return rev;
}