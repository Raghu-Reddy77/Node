const { readFileSync, writeFileSync}=require('fs')  

//const fs=require('fs')
//fs.readFileSync
console.log("start")
const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')

//if my file is not there create a new file and add first and second files
writeFileSync(
    './content/result-sync.txt',
    `here is the new result file : ${first}, ${second}`,
    {flag:'a'}
)
console.log('done with this task')
console.log("end")