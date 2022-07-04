function addToUp(n) {
    let total = 0
    for( var i=0; i <= n; i++){
        total += i;
    }
    return total;
}

console.log(addToUp(5));