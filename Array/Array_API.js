//1.주어진 배열을 스트링으로 변환
const fruits = ['apple', 'banana', 'orange'];
const result = fruit.join(','); //apple,banana, orange

//2. 주어진 스트링을 배열로 변환
const fruits = 'a, b, c, d';
const result = fruits.split(',') // ['a','b','c','d']
//split(',',2) ['a','b']

//3. 주어진 배열을 거꾸로 변환
const array = [1, 2, 3, 4, 5]
const result = array.reverse()
console.log(array) // 5,4,3,2,1
console.log(result) // 5,4,3,2,1
