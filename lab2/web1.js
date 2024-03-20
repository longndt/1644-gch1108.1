//declare server port
const port = 3000;
//declare "http" module/component/library
const http = require('http');
//create http (web) server
const server = http.createServer((req, res) => {
   //return respond to client (web browser)
   res.write("<b style='color:red;'>hello world</b><br>");
   res.write("<i><u style='color: blue;'>today is wednesday</u></i>");
   res.write("<h1>It's time for break now !</h1>");
   res.write("<h2>We'll continue coding after break</h2>")
   //stop (end) respond
   res.end();
});
//run server by listening port
server.listen(port, () => {
   console.log("http://localhost:" + port);
});

