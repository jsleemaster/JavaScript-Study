//this 값을 바꿀 수 있는 3가지

//1.call 메소드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할수 있다.
const smlee = {
    name: 'smlee'
}
function thisName() {
    console.log(this.name)
}
thisName() // undefined
thisName.call(smlee) //smlee

//응용
function upDate(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
upDate.call(smlee, 1994, 'programer')
console.log(smlee) // name :smlee , birthYear : 1994, occupation : programer
//2.apply
upDate.apply(smlee, [1994, 'programer']) // apply는 매개변수를 배열로 받는다

//배열을 순서대로 가져온다
const num = [1, 3, 5, 10, 2]
//null 은 this로 사용될 값인데 아무거나 넣어도 상관없다
const min = Math.min.apply(null, num) // 1 
const max = Math.max.apply(null, num) // 10

const max = Math.max.call(null, ...num) // 10


//3.bind

function update(test1, test2) {
    this.test1 = test1
    this.test2 = test2
}
//지정한 값을 영구히 연결시켜놓는다
const newTest = update.bind(smlee)
console.log(newTest('test1', 'test2')) // name : smlee , test1 : test1 , test2: test2
const user = {
    name: 'smlee',
    showName: function () {
        console.log(`hello, ${this.name}`);
    }
}
let fn = user.showName
fn() //이 상태는 this를 잃음

//항상 값을 받아놓게 만든다
fn.call(user)
fn.apply(user)

let bindFn = fn.bind()
bindFn() // hello, smlee 가 된다