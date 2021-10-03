
//함수의 실행을 중간에 멈췄다가 재개할수 있는기능
function* fn() {
    console.log(1);
    yield 1;
    yield 2
    return "finish"
}
const a = fn();
a.next(); // value : 1 , done : false
a.next(); // value : 2 , done : false
a.next(); // value : undefined , done : true

a.return('end') //즉시 끝내기 (value값을 end로 던져주고 다음부턴 undefined 를던져줌)

//배열은 반복가능한 객체
//iterable
//Symbol.iterator 메서드가 있다.
function* fn() {
    const num1 = yield '첫번째 숫자를 입력해주세요'

    const num2 = yield '두번째 숫자를 입력해주세요'

    return num1 + num2
}

a.next(1)
a.next(2)
//value : 3 : done: true로 값을 던져줌
//원할때만 변수를 할당해줘서 메모리 효율적으로 좋다
//값을 미리 만들어주지 않음

//yield* 를 이용하여 다른 제네레이터를 호출할 수 있다.
function* gen1() {
    yield "w"
    yield "o"
    yield "r"
    yield "l"
    yield "d"
}

function* gen2() {
    yield "hello"
    yield* gen1(); //반복가능한 모든객체가 올 수 있다 제너레이터 뿐만아니라
    yield "!";
}
//...gen2() -> hello, W o r l d !