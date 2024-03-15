//declare variable with "var" => scope: global variable
var a = 10

//declare variable with "let" => scope: local variable
let b = 20

//declare constant with "const"
const PI = 3.14

var a = 5

function demo() {
   console.log(a)
   let b = 10
}
console.log(b)
demo()