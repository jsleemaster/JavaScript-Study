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
let p = new Promise((res, rej) => {
    let a = 1 + 1
    if (a === 2) {
        res('Success')
    } else {
        rej('Fail')
    }
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

//3. promise 체이닝
const fetchNumber = new Promise((res, rej) => {
    setTimeout(() => {
        res((1))
    }, 2000)
});
fetchNumber
    .then(num => num * 2) //2
    .then(num => num * 3) // 6
    .then(num => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(num - 1) // 5
            }, 2000)
        })
    })
    .then((num => console.log(num) // 4초뒤에 5가 전달됨
    ))

//4.오류 핸들링
const 치킨얻기 = () =>
    new Promise((res, rej) => {
        setTimeout(() => res('치킨'), 1000)
    });
const 계란얻기 = () =>
    new Promise((res, rej) => {
        // setTimeout(() => res('계란'), 1000)
        setTimeout(() => rej(new Error(`error! 계란! `)), 1000)
    });
const 계란후라이 = () =>
    new Promise((res, rej) => {
        setTimeout(() => res('후라이'), 1000)
    });
치킨얻기()
    .then(계란얻기())
    .catch((error) => {
        return '계란 실패 했으니 빵을 가져라' // 위 과정에서 실패하면 이 값을던져라
    })
    .then(계란후라이())
    .then(식사 => console.log(식사)) // 치킨 -> 계란 -> 후라이가 나온다 3초뒤
    .catch(console.log) // 에러를 보여준다!

//Promise All

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
]).then((message) => {
    console.log(message)// 0 :video1 ,1: video 2 , 2:video 3
})
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree,
]).then((message) => {
    console.log(message)// video 1 
})