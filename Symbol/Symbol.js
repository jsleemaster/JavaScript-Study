//유일한 식별자
const a = Symbol();
const b = Symbol();
// a === b : false
// a == b : false
//유일성을 보장한다.
const id = Symbol('id');
const user = {
    name: 'smlee',
    age: 30,
    [id]: 'myid'
}
Object.keys(user) // ["name","age"] //심볼형은 건너뛴다

//Symbol.for() : 전역 심볼
// 하나의 심볼만 보장받을 수 있음
// 없으면 만들고 있으면 가져옴
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만
// Symbol.for 메소드는 하나를 생선한뒤 키를 통해 같은 Symbol을 공유한다
const id1 = Symbol.for('id')
const id2 = Symbol.for('id')
// id1 === id2 true
// Symbol.keyfor(id1) // "id"

//숨겨진 Symbol key 보는법
//1.
Object.getOwnPropertySymbols(user); //[Symbol(id)]

Reflect.ownKeys(user) // ["name","age",Symbol(id)]