
const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')



// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('Welcome here is my page')
//     }
//     if(req.url === '/about'){
//         res.end("here is our story it's been a long time")
//     }
//     res.end(`<h1>you're off</h1>
//     <p>you sure you're in the right place</p>
//     <a href="/">go back</a>`)
// })

// server.listen(5000)
 
// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// // find the absolute path
// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.text')
// console.log(absolute)


// const os = require("os")


// const user = os.userInfo()
// console.log(user)

// // method returns system uptime

// console.log(`system uptime ${os.uptime()}`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS)
