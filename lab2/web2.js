const port = 5000;
const http = require('http');
//declare (import) "fs" library => fs: file system (manage file input, output)
const fs = require('fs');
const server = http.createServer((req, res) => {
   //read (parse) the input html file
   fs.readFile('index.html', (err, data) => {
      //case 1: read file error => show error
      if (err) {
         console.log(err);
      }
      //case 2: read file succeed => render file data
      else {
         res.write(data);
         res.end();
      }
   });
});
server.listen(port, () => {
   console.log('http://localhost:' + port);
})