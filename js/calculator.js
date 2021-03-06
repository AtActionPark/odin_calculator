/* 
I first tinkered with storing all commands in a single buffer and 
regexing the shit out of it. It worked, but did not handle multiple
operations in a row.
I was inspired by Hutton's much more elegant solution, 
at https://github.com/Hutbytheton/js_calculator.
*/

var buffer = [];
var number = "";

init = function(){
  document.querySelector('.display').innerHTML = 0;
}

add = function(a,b){
  return a + b;
};

subtract = function(a,b){
  return a - b;
};

multiply = function(a,b){
  return a * b;
};

divide = function(a,b){
  return a / b;
};

clear = function(){
  number = "";
}

display = function(dis){
  document.querySelector('.display').innerHTML = dis;
}

getNum = function() {
  num = parseFloat(number);
  return num;
}

storeNumber = function(digit) {
  number += digit;
  display(getNum());
}

storeOperation = function(op) {
  operation = [];
  operation = [op, getNum()];
  clear();
}

equals = function() {
  var num2 = getNum();
  if (operation !== []) {
    clear();
    switch(operation[0]) {
      case add:
        return add(operation[1], num2);
        break;
      case subtract:
        return subtract(operation[1], num2);
        break;
      case multiply:
        return multiply(operation[1], num2);
        break;
      case divide:
        return divide(operation[1], num2);
        break;
    }
  } else {
      return num2;
  }
}

displayEquals = function() {
  var result = equals();
  number = result.toString();
  display(parseFloat(result));
}

displayClear = function() {
  clear();
  display(0);
}
