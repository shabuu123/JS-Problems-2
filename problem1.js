
function mul3or5(num) {
    if (num % 3 === 0 || num % 5 === 0) {

        return true
    }

    else{
        return false
    }

}
console.log(mul3or5(25));
console.log(mul3or5(15))
console.log(mul3or5(91))