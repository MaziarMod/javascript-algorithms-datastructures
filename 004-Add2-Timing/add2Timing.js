function addToUp(n) {

    return n * (n+1) / 2;
}

t1 = performance.now();
console.log(addToUp(1000000000))
t2 = performance.now();

console.log(`time of this function is : ${(t2 - t1)/1000} seconds.`);