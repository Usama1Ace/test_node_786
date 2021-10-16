// fs (File System)   Async


const { readFile ,writeFile } = require('fs')

readFile('./content/first.txt','utf-8',(errr, result)=>{
if(errr){
    console.log(errr)
    return
}
// console.log(result)
const first =result

readFile('./content/second.txt','utf-8',(errr, result)=>{
    if(errr){
        console.log(errr)
        return
    }
    // console.log(result)
    const second =result
    writeFile('./content/result-async.txt','Here is result : '+first+second,
    (errr, result)=>{
        if(errr){
            console.log(errr)
            return
        }
        console.log(result)
       
        
    })
    
})

})