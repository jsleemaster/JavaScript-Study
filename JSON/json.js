//XHR  X =XML
//AJAX  X = XML
// XML = HTML 과 같지만 데이터를 서버와 주고받는 형태라고 보면됨
// fetch() API 를 이용한다
//XML 보단 JSON을 이용한다.
//JSON 은 key 와 value로 이루어져있다.
//모든 언어에 지원한다. 
//1. 어떻게 변환하는지?
//1.1 Object to JSON
let json = JSON.stringify(['apple', 'banana']); // ["apple","banana"]

//1.2 JSON to Object
const rabbit = {
    name: '토끼',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //함수는 안됨
}
JSON.parse(rabbit) //{ "name": "토끼" ...}
JSON.parse(rabbit, ["name"]) // { "name": "토끼" } 만나옴 , 여러개의 키를 입력해서 추가 가능
JSON.parse(rabbit, (key, value) => {
    console.log(`key: ${key}, value ${value}`) // 모든 키와 벨류들이 전달됨
    return key === 'name' ? 'soon' : value // 네임만 soon으로 바뀌고 나머지는 그대로 나옴 
})
const string = JSON.stringify(rabbit) // 문자로 되기때문에 관련된 api는 사용할수 없음
const obj = JSON.parse(string)
const obj2 = JSON.parse(string, (key, value) => {
    return key === 'birthDate' ? new Date() : value //이런 식으로 전달해야 Date함수를 사용할 수 있음
})

