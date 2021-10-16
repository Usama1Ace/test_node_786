// Http 

const http=require('http');
const server=http.createServer((req,res)=>{
    // console.log(req)
    if(req.url === '/')
    {
        res.end('Welcome to homepage')
    }
    if(req.url==='/about')
    {
        res.end('Welcome to About Us Page')
    }
    res.end('<h1> OOPs! <h1/> <p> We can\'t open this page <p>')
    // res.write('Welcome to homepage')
    // res.end()
})

server.listen(5000)
