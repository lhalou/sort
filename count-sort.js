//计数排序
// 可以进行排序 也可以记录一个数据的个数
let a = [4,3,6,1,9,6,0]

let hash = {}
let index = 0
while(index < a.length){
    let unmber = a[index]
    if(hash[unmber] === undefined) {
        hash[unmber] = 1
    }else {
        hash[unmber]=hash[unmber] + 1
    }
    index = index +1
}
console.log(hash,'hash')
let b = []
for(let i in hash) {
    const number = hash[i]
    if(number !==undefined) {
        for(let idx = 0; idx< number; idx++) {
            b.push(i)
        }
    }
}
console.log(b,'b')


//复杂度（O(N + max)）