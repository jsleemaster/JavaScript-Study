function makeCounter() {
    let num = 0;

    return function () {
        return num++;
    }
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2  계속 기억하고있는것이고 은닉화하는 것