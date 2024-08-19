function decendingOrder(num){
    let newStr = String(num)
    let newArr = newStr.split(" ")
    let decArr = newArr.sort(function(x,y){return y-x})
    let joinArr = decArr.join("")
    return joinArr

}
console.log(decendingOrder(284736))