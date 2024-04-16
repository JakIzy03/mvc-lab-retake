const http = require('http');
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator');
const { getCars, getCarInformation, getCarAge } = require('./cars');

const PORT = 3000;

function requestListener(req, res){
    const cars = getCars();
    console.log(cars);
    res.setHeader("Content-type", "text/html");
    res.write(getHTMLDocumentStart());
    res.write('<body>');
    res.write(`<p>${getCarInformation(5)}</p>`);
    res.write(`<p>${getCarAge(5)}</p>`);
    res.write('</body>');
    res.write(getHTMLDocumentEnd());
    res.end();
}


const server = http.createServer(requestListener);

function listeningListener(){
    console.log(`Server is running on ${PORT}`);
};

server.listen(PORT, listeningListener);