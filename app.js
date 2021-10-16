// npm  - global command, comes with node
// npm --version


// local dependency  - use it only in this particular project 
// npm i <dependency>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json - manifest files(stores important information about project/package)
// manual apporach (create package.json in a root, create properties etc)
// npm init (step by step approach )
// npm init -y (everything automatically)

const _=require('lodash')

const items=[1,[2,[3,[4]]]]

const newitems=_.flattenDeep(items)
console.log(newitems)

