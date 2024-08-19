function squareNum(num) {
    let newArr = String(num)
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i] * newArr[i])
    }
}
squareNum(2456)