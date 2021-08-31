function getFibonacci(n) {
    if(n <= 1) return [0,1];
    var a = getFibonacci(n - 1);
    a.push(a[a.length - 1] + a[a.length - 2]);
    return a;
}

//Example
console.log(getFibonacci(8));