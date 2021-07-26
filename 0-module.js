//commenjs,every file is module(by default)
//modules --->encapsulated code

const names=require('./1-module')
const sayHi=require('./2-module')
const data=require('./3-alternativeModule')
require('./4-mind-grenade')


console.log(data)
sayHi('raghu')
sayHi(names.vinay)
sayHi(names.shukesh)
sayHi(names.vishnu)