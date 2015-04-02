function FizzBuzzConsole(fizzNum, buzzNum, length){
  for(var i = 0; i < (length || 100);){
    var out = '';
    i++;
    
    if (i% (Number.isInteger(fizzNum) ? fizzNum : 3) === 0){
    	 out += 'Fizz';
    };
    
    if (i% (Number.isInteger(buzzNum) ? buzzNum : 5) === 0){
    	out += 'Buzz';
    };
    
    console.log(out || i);
  }
};

function FizzBuzzNum(checkNum, fizzNum, buzzNum){
  var out = '';
  
  if(!Number.isInteger(checkNum)) {
    return 'Check number is not a valid integer!';
  }; 
  
  if (checkNum % (Number.isInteger(fizzNum) ? fizzNum : 3) === 0){
  	 out += 'Fizz';
  };
  
  if (checkNum % (Number.isInteger(buzzNum) ? buzzNum : 5) === 0){
  	out += 'Buzz';
  };
  
  return out || checkNum;
};
