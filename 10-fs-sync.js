const {readFileSync, writeFileSync} = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf8')
const  second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')

//he { flag: 'a' } option specifies that the content should be appended to the file if it already exists. If the file doesn't exist, it will be created.