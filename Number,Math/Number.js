//10진수 -> 2/16진수
let num = 10;
num.toString(2) // 1010
let num2 = 255;
num.toString(16) // "ff"


let x = Number('X') //NaN
x == NaN //false
x === NaN //false
NaN === NaN //false
isNaN(x) //true
isNaN(3) //false

//parseInt(값 ,진수); 
let redColor = 'f3';
parseInt(redColor) //NaN
parseInt(redColor, 16) //243
parseInt('11', 2) //3

//parseFloat(); 소수점까지 반환
let padding = '10.5%'
parseFloat(padding) //18.5