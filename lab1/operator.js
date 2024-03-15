a = 1
b = a++  //b=a=1 => a++=1+1=2
c = ++a  //++a=2+1=3 => c=a=3

//a++ : postfix operator
//++a : prefix operator

console.log("a = " + a)   //3
console.log("b = " + b)   //1
console.log("c = " + c)   //3

a = a + 1 //a++ ++a a+=1

x = 17
y = 3
z = x%y //%: get remainder of a division