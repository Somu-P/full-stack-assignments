const num=[10,20,30,40,50]

function sumArr(arr){
return arr.reduce((sum,num)=>sum+num,0)
}
module.exports={num,sumArr}