// let arr = ["A" , "B" , "C","D", "E"]
// console.log(arr[3]);

function likes(arr) {
    if (arr.length === 0) {
        return "no one like this"
    }

    else if (arr.length === 1) {
        return "swami like this"
    }
    else if (arr.length === 2) {
        return "Swami and Sudha like this"
    }
    else if (arr.length === 3) {
        return "Swami, Sudha and Shiva like this"

    }
    else if (arr.length === 4) {
        return "Swami, Sudha and 2 others like this"
    }

}


console.log(likes[[]])
console.log(likes(['Swami', 'Sudha', 'Shiva']))
