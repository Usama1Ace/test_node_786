// GLobal Variables ............

// GLobal variable can able to be called anywhere in the project...

// __dirname  - path to current directory
// __filename - file name
// require   -function to use moduels (CommonJs)
// module    - info about current module (file)
// process   - Info about env where the program is excuted (helpful with server)

console.log(__dirname)
setInterval( () =>
{
  console.log('Hello world')
},1000)