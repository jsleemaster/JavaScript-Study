//비동기를 간편하게 처리할 수 있도록 도와주는 Object
// 성공 과 실패 값을 전달 해줌
// Promise는 자바스크립트 안에 포함되어있음
// 1. state(상태) : pending -> fulfilled or rejected
// 2. 제공자(Producer)와 소비자(Consumer)의 차이점을 이해해야함
//  1. Producer //promise 만들기
// 새로운 프로미스가 만들어지는 순간 바로 실행된다 (중요)
const promise = new Promise((resolve, reject) => {
    //무거운 작업 (시간이 걸리는 작업은 보통 여기서 처리함 , network, read files)
    console.log('doing something....'); //만드는 순간 바로 실행됨!
    setTimeout(() => {
        // resolve('smlee'); //완성된 데이터를 전달하면 된다 2초뒤에
        reject(new Error('no network')) // 에러를 정확히 명시하여 전달해줘야한다
    }, 2000)
})
//2. Consumer : then, catch, finally 값을 받아 올 수 있다!
//성공 실패 끝냄
promise // 체이닝
    .then((value) => {
        //promise가 정상적으로 끝나면 값을 전달해줌 resolve에 들어온 값을 value에 전달해줌 
        console.log(value)// smlee가 나옴
    })
    .catch((error) => {
        console.log(error) // no netWork 가 전달됨
    })
    .finally(() => {
        console.log('finally') //성공이나 실패가 끝나면 무조건 나옴
    })



