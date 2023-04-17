// bitwise operator 

/* & AND

| OR

^ XOR

~ NOT

<< LEFT shift

>> right shift

bitwise operators treat arguments as 32-bit number 
and work on the level of their binary representation */

/* Operator        	Description             Example	Same as	Result             	Decimal
f
&	AND	              5 & 1                	0101 & 0001	0001	                  1
|	OR	               5 | 1             	0101 | 0001	0101	                   5
~	NOT            	   ~ 5	                 ~0101	1010	                       10
^	XOR         	    5 ^ 1	         0101 ^ 0001	0100                   	 4
<<	left shift  	    5 << 1	           0101 << 1	1010                   	 10
>>	right shift	        5 >> 1	            0101 >> 1	0010                   	  2
>>>	unsigned right shif 5 >>> 1	                 0101 >>> 1	0010	              2                     */

console.log("******** bitwise operator ******************");
//& =
let a = 1 //0001
let b = 2 //0010
console.log(a & b);  // =  0


//| =
let x = 1 //0001
let y = 2  //0010
console.log(x | y);  // = 3

 
