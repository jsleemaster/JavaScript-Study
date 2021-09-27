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

//4. 추가 ,삭제, 복사

//push
fruit.push('복숭아', '감')

//pop
fruit.pop() // console.log(fruit) // '사과','바나나','복숭아'
const pop = fruit.pop() // console.log(fruit) // '사과','바나나','복숭아'
console.log(pop) // '사과','바나나'

//unshift
fruit.unshift('귤', '오렌지')
console.log(fruit) // '귤','오렌지','사과','바나나','복숭아'

fruit.shift('자두', '체리');
console.log(fruit) // '오렌지','사과','바나나'

//shift와 unshift는 굉장히 느림 사용 x

// 원하는 위치를 지우는 법

//splice
fruit.splice(1, 1) // 시작할 위치, 몇개를 지울지
fruit.splice(1, 0) // 원하는 위치에서 넣을 수도 있다. ex)fruit.splice(1,0,'사과') // 추가
const result = fruit.splice(1, 0) //반환도 함
console.log(fruit) // '오렌지','바나나'
fruit.splice(1, 1, '사과', '귤') // 시작할 위치, 몇개를 지울지 , 그 자리에 뭘 넣을지,뭘넣을지 추가2
console.log(fruit) // '오렌지','사과','귤'

//slice
arr1.slice(n, m) // n부터 m 까지 반환 , 아무것도 넣지않으면 복사됨

//5. 병합
const fruit2 = ['체리', '망고'];

new fruit3 = fruit.concat(fruit2);
console.log(fruit3); // '오렌지','사과','귤','체리','망고'

//6. 찾기
console.log(fruit3.indexOf('체리')) // 3
console.log(fruit3.indexOf('감')) // -1

console.log(fruit3.includes('체리')) // true
console.log(fruit3.includes('감')) // false

fruit3.push('체리')
//동일한 값이 있다면 가장 앞에서부터 일치하는걸 찾아서 반환하기 떄문에 뒤에서부터도 찾을 수 있다.
console.log(fruit3.lastIndexOf('체리')) // 5

