// let obj = {age:25}
// let obj1 = obj

// obj1.city = 'delhi'

// obj1 = {school :'dps'}

// console.log(obj) // 25 +delhi
// console.log(obj1) // dps


// var x = 5

// if(true){
//     var x = 10
// }

// console.log(x)


// let x = 5

// if(true){
//     let x = 10
//     // console.log(x)

// }

// console.log(x)


// let x = 5

// if(true){
//     let x = 10
//     const y =10
//     // console.log(x)'
//     console.log(x)
// console.log(y)

// }


// console.log(x)

// var x
// console.log(x)

// x=10



// console.log(a)

// let a = 10

// var arr = [1,2,3,4,5]

// for(let num of arr){
//     console.log(num)
// }


// let obj = {a:1,b:2,c:3}

// for(let key in obj){
//     console.log(key,obj[key])
// }


// function add(a=10,b=10){
//     return a+b
// }
// console.log(add(10,20))



// function sum(...nums){
//     return nums.reduce((acc,cur)=>acc+cur,0)

// }
// console.log(sum(1,2,3,4,5,6,7,8,9,0,1,2,2,2,2,2,2,2,2,2,22,2,2,2,2,))



// let str = "hello"

// // str = "byeee"

// str[1] = "b"

// console.log(str)



// function arrToArrOfObj(arr){
//     return arr.map(x=>({fName:x,len:x.length}))
// }

// console.log(arrToArrOfObj(['apple','banana','cherry']))



// function getProduct(arr){
//     return arr.map(subArr=>subArr.reduce((acc,cur)=>acc*cur,1))

// }

// console.log(getProduct([[1,2],[1,2,3,4],[1,2,3,4,5]]))


// function flatArr (arr){
//     return arr.reduce((acc,cur)=>acc.concat(cur),[])
// }

// console.log(flatArr([[1,2],[3,4],[5,6]]))




// function getFreq(arr){
//     let freq = {}
//     for(let i=0;i<arr.length;i++){
//         if(freq[arr[i]]){
//             freq[arr[i]]++
//         }else{
//             freq[arr[i]] = 1
//         }

//     }

//     return freq
// }

// console.log(getFreq(['apple','apple','orange','cherry','cherry']))


// function getFreq(arr) {
//     return arr.reduce((acc, cur) => {
//         if (acc[cur]) {
//             acc[cur]++
//         } else {
//             acc[cur] = 1
//         }
//         return acc

//     },{})
// }

// console.log(getFreq(['apple','apple','orange','cherry','cherry']))



// function groupByKey(arr,prop){
//     return arr.reduce((acc,obj)=>{
//         let key = obj[prop]

//         if(!acc[key]){
//             acc[key] = []
//         }
//         acc[key].push(obj)
//         return acc

//     },{})
// }


// let arr = [
//     {name:'aman',age:30,city:'delhi'},
//     {name:'naman',age:20,city:'jaipur'},
//     {name:'aman',age:30,city:'delhi'},
//     {name:'naman',age:20,city:'rajasthan'},
//     {name:'karan',age:28,city:'delhi'},
//     {name:'aman',age:28,city:'delhi'},
//     {name:'chaman',age:30,city:'delhi'}
// ]


// console.log(groupByKey(arr,'city'))





// console.log('hiiii')
// console.log('hiiii')
// console.log('hiiii')
// console.log('hiiii')
// console.log('hiiii')

// setTimeout(()=>{
//     console.log("taking nap for 5 sec")
// },5000)

// console.log('byee')
// console.log('bye')


// setTimeout(()=>{
//     console.log('break for 0sec')
// },0)

// console.log('1')

// setTimeout(()=>{
//     console.log('break for 5sec')
// },5000)

// console.log('2')




// function step1(cb){
//     setTimeout(()=>{
//         console.log("step 1 done")
//         cb()
//     },1000)
// }

// function step2(cb){
//     setTimeout(()=>{
//         console.log("step 2 done")

//         cb()
//     },2000)
// }

// function step3(cb){
//     setTimeout(()=>{
//         console.log("step 3 done")

//         cb()
//     },3000)
// }


// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("all steps are completed")
//         })
//     })
// })



// function step1 (){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('step 1 done')
//             resolve()
//         },1000)
//     })
// }
// function step2 (){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('step 2 done')
//             resolve()
//         },2000)
//     })
// }
// function step3 (){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             console.log('step 3 done')
//             resolve()
//         },3000)
//     })
// }

// // consume promise

// // step1()
// // .then(step2)
// // .then(step3)
// // .then(()=>{
// //     console.log("all steps done")
// // })

// async function runStep(){
//     await step1()
//     await step2()
//     await step3()

// }
// runStep()









// check numn is even or odd using promise

// function checkNum(num){
//     return new Promise((res,rej)=>{
//         if(num%2==0){
//             res('number is even')
//         }
//         else{
//             rej('num is odd')
//         }
//     })
// }

// checkNum(8)
// .then((mssge)=>console.log(mssge))
// .catch(error=>console.log(error))


// function checkPalindrome(num){
//     return new Promise((res,rej)=>{
//         const isPlain = num.toString() === num.toString().split('').reverse().join('')
//         if(isPlain){
//             res('num is palindrome')
//         }
//         else{
//             rej('num is not palindrome')
//         }
//     })
// }


// checkPalindrome(122)
// .then((mssge)=>console.log(mssge))
// .catch(error=>console.log(error))


// function getEvenOdd(arr){
//     return arr.reduce((acc,cur)=>{
//         if(cur%2===0){
//             acc[0].push(cur)
//         }
//         else{
//             acc[1].push(cur)

//         }
//         return acc;

//     },[[],[]])
// }

// console.log(getEvenOdd([1,2,3,4,5,6]))


// function groupByKey(arr,prop){
//     return arr.reduce((acc,cur)=>{
//         let key = cur[prop]
//         if(!acc[key]){
//             acc[key] = []
//         }
//         acc[key].push(cur)
//         return acc



//     },{})
// }

// let arr = [
//     {name:'aman',age:30,city:'delhi'},
//     {name:'naman',age:20,city:'jaipur'},
//     {name:'aman',age:30,city:'delhi'},
//     {name:'naman',age:20,city:'rajasthan'},
//     {name:'karan',age:28,city:'delhi'},
//     {name:'aman',age:28,city:'delhi'},
//     {name:'chaman',age:30,city:'delhi'}
// ]


// console.log(groupByKey(arr,'age'))


// function groupByKey(arr,keys){
//     return arr.reduce((acc,cur)=>{
//         let groupKeyArr = keys.map(key=>cur[key])
//         let groupKey = groupKeyArr.join('-')
//         if(!acc[groupKey]){
//             acc[groupKey] = []
//         }
//         acc[groupKey].push(cur)
//         return acc



//     },{})
// }

// let arr = [
//     {name:'aman',age:30,city:'delhi'},
//     {name:'naman',age:20,city:'jaipur'},
//     {name:'aman',age:30,city:'delhi'},
//     {name:'naman',age:20,city:'rajasthan'},
//     {name:'karan',age:28,city:'delhi'},
//     {name:'aman',age:28,city:'delhi'},
//     {name:'chaman',age:30,city:'delhi'}
// ]
// let keys = ['age','city']


// console.log(groupByKey(arr,keys))




function getAllOp(arr,funcs){
    return funcs.map(fn=>arr.map(fn))
}


let arr= [1,2,3,4,5,6]
let funcs = [x=>x+1,x=>x+2,x=>x*2]

console.log(getAllOp(arr,funcs))