function FizzBuzz(fizzNum, buzzNum, length){
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
