//1.주어진 배열을 문자열로 변환
const fruits = ['apple', 'banana', 'orange'];
const result = fruit.join(','); //apple,banana, orange

//2. 주어진 문자열을 배열로 변환
const fruits = 'a, b, c, d';
const result = fruits.split(',') // ['a','b','c','d']
//split(',',2) ['a','b']

//3. 주어진 배열을 거꾸로 변환
const array = [1, 2, 3, 4, 5]
const result = array.reverse()
console.log(array) // 5,4,3,2,1
console.log(result) // 5,4,3,2,1

//4. 원하는 부분만 리턴해서 받기
const array = [1, 2, 3, 4, 5];
const result = array.slice(2, 5); //3,4,5
console.log(array) //1,2,3,4,5

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('F', 18, true, 88),
]
//5. 스코어가 90점이상인 학생을 찾기 (하나만 찾기)
// //첫번째 true 값만 반환하고 끝 없으면 undefined를 반환
const result = students.find((v, i) => v.score === 90)
students.findIndexOf((v, i) => v.score === 90) //index위치 찾기
console.log(result) // student C에 값이 출력됨

//6.수업이 등록된 학생들만 찾기 (원하는 값 모두 찾기)
const result = students.filter((v) => v.enrolled);
console.log(result) // true인 값 3개만 출력됨

//7. 점수만 받아오기
const result = students.map((v) => v.score) // 45,80,90,66,88

//8. 점수가 50점보다 낮은 학생이 있는지 없는지 확인해라

//하나라도 맞으면 true = some
const result = students.some((v) => v.score < 50) //true

//모든 조건 만족 해야 true 아니면 false = every
const result2 = students.every((v) => v.score >= 50); //false

//9. 평균계산
// 9.1 0은 초깃값 설정
// 9.2 curr은 배열을 순차적으로 돔
// return 으로 던져진 값을 누적하며 prev에 던져줌
// reduceRight는 배열을 거꾸로 돔 원리는 똑같다.
const result = students.reduce((prev, curr) => prev + curr.score, 0)
console.log(result / students.length) // 73.8

//10. 학생들의 모든점수를 스트링으로 변환
const result = students
    .map((v) => v.score)
    .filter((score) => score >= 50) //50점이상인 아이들만 변환하고 
    .join() //문자열로 변환

//11. 학생들의 점수를 정렬해서 낮은 점수로 변환
const result = students
    .map((v) => v.score)
    .sort((a, b) => a - b) //점수가 늦은순으로 나옴 반대로 하고싶으면 b-a
    //배열의 첫번째부터 두번째값이랑 비교해서 정렬을 시켜주는 거임
    //b가 a보다 크다면 -니까 낮은 순으로 정렬된다. 
    //a이전값과 b현재값을 전달
    //lodash 라이브러리를 이용해도 괜찮다 =>_.sortBy(arr)
    .join()

// Array.isArray()
Array.isArray(arr1) // false , true 로 변환



