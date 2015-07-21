//Problem 1 at Project Euler was to sum all the numbers divisible by 3 or 5 below 1000
//Following is my code for the same

var div3 = new Array();               //Array to store the numbers divisible by 3 or 5

for( var x = 1; x < 1001; x++) {      // for loop to run the if statement below 1000 times

	if( x % 3 === 0 || x % 5 === 0 )    // if statement to check divisibility of 3 or 5
	{
		div3.push(x.toString());          // using push statement to store the values into the array
	}

}

eval(div3.join('+')));          // join function inside eval to dd all the numbers inside the array
console.log(eval);                    // displaying eval in a dialog box to the user
