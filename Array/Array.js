'use strict'

//1.배열 선언
const arr1 = new Array();
const arr2 = [1, 2];

//2.배열 접근
const fruit = ['사과', '바나나'];
console.log(fruit[1]) // 바나나
console.log(fruit.length) // 2
console.log(fruit[fruit.length - 1]) // 마지막 배열에 접근

//3.배열 순회
// map
fruit.map((v, i) => {
    console.log(fruit[i])
})

// for of
for (let value of fruit) {
    console.log(value)
}
// forEach
fruit.forEach(value, index => {
    console.log(value), console.log(index) // 사과,바나나, 0, 1
})
