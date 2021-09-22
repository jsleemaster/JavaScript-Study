//Object


//Object = {key : value}
//생성방법
const obj1 = { }; // 리터럴
const obj1 = new Object; //생성자

const smLee = { name: 'smLee', age: 28 };

//1.가능은 하나 안하는게좋다
smLee.hasJob = true;
//2.삭제도 됨
delete smLee.hasJob

//3.Computed 속성
console.log(smLee.age); //아래와 동일
console.log(smLee['age']);
smLee['hasJob'] = true

function printValue(obj, key) {
    console.log(obj[key])
}
printValue(smLee, 'name') // 출력됨

//속성 값 짧게하기

const person1 = { name: 'bob', age: 2 }
const person2 = { name: 'steve', age: 3 }
const person3 = { name: 'soon', age: 4 }
const person4 = makePerson('smlee', 24)
console.log(person4) // {name : smlee , age : 24}
//4. 생성자 함수
function makePerson(name, age) {
    // return {
    //     name,
    //     age
    // }
    //this = {}; 새로운 오브젝트를 만들고 return this가 된거임
    this.name = name;
    this.age = age
}

//5. 값이 있는지 확인하는 방법

console.log('name' in smLee) //true
console.log('age' in smLee) //true
console.log('random' in smLee) //false

//6. for ..in  vs for..of

//6.1 for in
for (key in smLee) {
    //할당된 배열을 전부 도는 문법
}

//6.2 for of
const array = [1, 2, 3, 4];
for (value of array) {
    //array에 있는 모든 값을 할당 in과 of는 동일
}

//7. cloning
const user = { name: 'smlee', age: '22' };
const user2 = user
user2.name = 'coder'
console.log(user.name)  //coder로 할당됨, 
// 원래 있던 객체도 변하기 때문에 아래 방법을 이용함
Object.assign(user, user2) //복사하고자하는 값, 복사되는 값, 여러개를 넣어도 됨, 배열도 전달해도됨 첫번째 인덱스는 무조건 복사될값
Object.assign({ }, test1, test2) //test1과 test2에 동일한 key가 있다면 뒷쪽이 우선순위라서 test2에 있는 키가 할당이 됨
const 예제 = Object.assign({ }, test1) //이런식으로 예제에 담아서 보여줄수도 있다.

//Computed property 계산된 속성
let a = 'age';
const user = {
    name: 'Mike',
    [a]: 30 // age : 30
}

//Object.assign()
const cloneUser = Object.assign({ }, user) // user가 {}에 복사됨

//Object.keys(); //키를 배열로
Object.keys(user) // name , age
//Object.values(); // 값을 배열로
Object.values(user) // mike, 30
//Object.entries() //키, 값을 배열로
Object.entries(user) // ["name","Mike"],["age",30]
//Object.fromEntries(); //키,값 배열을 객체로
const arr = [
    ["name", "Mike"],
    ["age", 30]
]
Object.fromEntries(arr) // { name: 'Mike', age: 30}
