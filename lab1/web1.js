//1. declare host (server) name
const host = "localhost"
//2. declare server post
const port = 4000
//3. declare http module (library)
const http = require('http')
//4. create web server
const server = http.createServer((request, respond) => {
   //display content to web page
   respond.write("<h1>New web running at port 4000</h1>")
   //must end response at last
   respond.end()
})
//5. run web server
server.listen(port, () => {
   console.log("Web server is running at http://" + host + ":" + port)
})