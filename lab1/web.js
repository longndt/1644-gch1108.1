//1. declare host (server) name
const host = "localhost"
//2. declare server port
const port = 3000    //3000: default port of NodeJS
//3. declare http module (library)
const http = require('http')
//4. create web server
const server = http.createServer((request, respond) => {
   //display content to web page
   respond.write("<h1 style='color:red';>Hello world</h1>")
   respond.write("<h2>This is my first NodeJS web page</h2>")
   respond.write("Coding web backend with NodeJS")
   //must end response at last
   respond.end()
})
//5. run web server
server.listen(port, () => {
   console.log("Web server is running at http://" + host + ":" + port)
})