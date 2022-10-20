let num= 19;

let fact = 0;

for(let i=1 ; i<=num ; i++) {
    if(num % i == 0) {
        fact++;
    }
}
    if(fact == 2) {
        console.log("Yes");
    } else {
        console.log("No");
    }