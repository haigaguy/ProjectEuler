// Problem 3 - project Euler
//https://projecteuler.net/problem=3

function chkPrime(num)      //A function that takes value
{
  var prime = 0;
  var x = num;
  var y = 2;
  
  while(x>1)            //while loop to check divisibility by all numbers below num
  {
    while(x % y === 0)    //while loop to check if num is prime
    {
      prime = x;        
      x = x/y;
    }
    
    y++;
  
  
  }
  return prime;
};

console.log(chkPrime(600851475143));
  
