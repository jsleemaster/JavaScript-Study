//async & await
//깔끔하게 promise를 사용하는 것

//1. async
async function fetchUser() {
    // 네트워크 통신후 데이터를 받아오는 데 10초가 걸린다고치자.
    return 'smlee'
}
const user = fetchUser();
user.then(console.log) //smlee
console.log(user);

//2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function 사과얻기() {
    await delay(1000);
    return '사과'
}
async function 바나나얻기() {
    await delay(1000);
    return '바나나'
}
//아래 방법은 지저분한 방법
async function 과일얻기() {
    // return 사과얻기()
    // .then(apple => {
    //     return 바나나얻기()
    //     .then( banana => `${apple} + ${banana}`)
    // });

    const applePromise = 사과얻기()
    const bananaPromise = 바나나얻기()
    const apple = applePromise
    const banana = bananaPromise

    // const apple = await 사과얻기()
    // const banana = await 바나나얻기()

    return `${apple} + ${banana}`
}
과일얻기().then(console.log)

// 3. userful Promise API
function 모든과일() {
    return Promise.all([사과얻기(), 바나나얻기()]).then(fruits => fruits.join('+'))
}
모든과일().then(console.log)
//race API
function 과일하나() {
    return Promise.race([사과얻기(), 바나나얻기()]);
}
과일하나().then(console.log)

async function getName() {
    throw new Error('error!')
}

getName.catch((err) => {
    console.log(err)
})
async function showName() {
    //에러는 try catch 문으로 확인가능
    const result = await getName('Mike'); //기다렸다가 reslve가되면 값을 넣어준다
    console.log(result)
}