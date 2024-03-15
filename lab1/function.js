//1) function without parameter and no return
function sayHello() {
   console.log("Hello world")
}
//call (invoke) method
sayHello()

//2) function with parameter and no return
function welcome(name) {
   console.log("Hello " + name)
}
welcome("Greenwich Vietnam")

//3) function without parameter but has return
function getCurrentYear() {
   return 2024;
}
console.log(getCurrentYear())

//4) function with parameter and has return
function calculateTotal(a, b) {  //a,b: parameter (tham số)
   return a + b;
}
console.log(calculateTotal(10,20))  //10,20: argument (đối số)