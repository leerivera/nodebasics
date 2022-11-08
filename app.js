const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)




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
