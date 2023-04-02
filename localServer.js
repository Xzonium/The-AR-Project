var http = require('http');
var fs = require('fs')
const page = (3993)

const PORT =(8080)

fs.readFile('./index.html', function (error, html){
    if (error) throw error;
    http.createServer(function(req, res) {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write(html, css);
        res.end();
    }).listen(PORT);

});



console.log("Your server is running...");