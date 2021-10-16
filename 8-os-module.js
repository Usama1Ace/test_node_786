// Modules os

const os= require('os')

//Info about current user
const user = os.userInfo()
console.log(user)

// System uptime

console.log('The system up time '+os.uptime+' in seconds');
