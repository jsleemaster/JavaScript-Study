//옵셔널 체이닝
const person1 = {
    name: 'smlee',
    job: {
        title: 'Engineer',
        manager: {
            name: 'bob'
        }
    }
}
const person2 = {
    name: 'smlee'
}
function printManger(person) {
    console.log(person.job?.manager?.name) //인자 값에 잡이 있으면 매니저값이 있으면 이름을 출력 
}
printManger(person1)
printManger(person2)

//Nullish Coalescing OPerator
const name = 'Smlee'
const userName = name || 'Guest'; // 앞이 값이 false일때만 guest가 들어옴
//false : false, '',0,null, undefined 는 다 false이기 때문에 || 를 쓰면 name에 아무런 이름을 쓰고 싶지 않을때도 게스트로 됨 조심해서 쓰자
//축약 ||
num2 ||= 0; //num2 = num2 || 0

const name = '';
const userName = name ?? 'Guest'; // 이름이 있다면 이름을 쓰고 없다면 guest를 이용하자
// 축약 ??
userName ??= 'Guest'

const num = 0;
const message = num ?? 'undefined'; // num에 값이 있다면 num을 쓰고 없다면 undefined를 보내라

//숫자
let billion = 1_000_000_000
//1000000000 으로 반환 쉼표는 안되니까 이걸쓰자
