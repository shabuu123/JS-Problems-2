 function getMiddle(str){
    if(str.length % 2!==0){
        let length = str.length
        let middleNUm = Math.floor (length /2)
        console.log(str[middleNUm])
    }else{
        let length = str.length
        let middleNUm = length/2
        let output = str[middleNum -1]+ str[middleNUm]
        console.log(output)
    }
 }
 getMiddle("shabnam")