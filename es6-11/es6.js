//1. 짧은 속성 이름
const smlee1 = {
    name: 'smlee',
    age: 18
}
const name = 'smlee'
const age = 18
const smlee2 = {
    name: name,
    age: age
}
const smlee3 = {
    name,
    age
}
//2. 구조분해 할당 (Destructuring assignment)
//2.1 Object
const Student = {
    name: 'Anna',
    level: 1
}
const { name, level } = Student;
const { name: studentName, level: studentLevel } = Student;
console.log(studentLevel, studentName)
//2.2 Array
const number = [1, 2];
const [first, second] = number

//3. 복사 Spread Syntax
const obj1 = { key: 'val1' }
const obj2 = { key: 'val2' }
const array = [obj1, obj2]
//copy
const arrayCopy = [...array]
console.log(array, arrayCopy)// 동일한 값이 나옴
const arrayCopy = [...array, { key: 'val3' }]  //값을 추가도 가능
obj1.key = 'newKey'; // 기존값을 이렇게변경하면 전부다 변경됨

const obj3 = { ...obj1 } // 객체는 객체로 복사해야함 

//array concatenation (배열합치기)
const number1 = ['1', '2']
const number2 = ['3', '4']
const number = [...number1, ...number2] // 1,2,3,4 로 출력됨

//object merge (객체 합치기)
const number1 = { key: '1' }
const number2 = { key: '2' }
const number3 = { ...number1, ...number2 } //key : 2 // 객체는 마지막에 있는 아이가 값을 최종적으로 덮어씌움