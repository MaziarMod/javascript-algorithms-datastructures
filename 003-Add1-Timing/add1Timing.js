function addToUp(n) {
    let total = 0
    for( var i=0; i <= n; i++){
        total += i;
    }
    return total;
}

t1 = performance.now();
console.log(addToUp(1000000000))
t2 = performance.now();

console.log(`time of this function is : ${(t2 - t1)/1000} seconds.`);
