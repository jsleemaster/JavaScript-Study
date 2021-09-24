Math.PI //3.14
Math.ceil() //올림
Math.floor() //내림 
Math.round() //반올림
Math.random() //0~1 사이 무작위 숫자 생성
// 1~100 임의의 숫자를 뽑고 싶다면
Math.floor(Math.random() * 100) + 1
// => 0.6789 * 100 -> 67.89 -> 67-> +1
Math.max(1, 4, -1, 5, 10, 9, 5.54) //10
Math.min(1, 4, -1, 5, 10, 9, 5.54) // -1
Math.abs(-1) // 1 절대값
Math.pow(2, 10) //1024 제곱
Math.sqrt(16) //4 제곱근 (루트 16)


//요구사항 : 소수점 둘째자리까지 반올림해서 표현
let num = 30.1234
Math.round(num * 100) / 100 // 30.12
//이거 말고 toFixed()를 이용하자
num.toFixed(2); //30.12
num.toFixed(0); //30
num.toFixed(6); //30.123400
//* 문자열을 반환함 Number로 변환하면 해결
