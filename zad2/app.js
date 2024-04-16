const http = require('http');
const { handleHome, handleAddCar, handleCar, handlePageNotFound } = require('./routes');

const PORT = 3000;

function requestListener(req, res){
    switch (req.url) {
        case '/':
            if (req.method === 'GET') {
                handleHome(res);
            }
            break;
        case '/add-car':
            if (req.method === 'GET' || req.method === 'POST') {
                handleAddCar(req.method, req, res);
            }
            break;
        case '/car':
            if (req.method === 'GET') {
                handleCar(res);
            }
            break;
        default:
            handlePageNotFound(res);
    }
}


const server = http.createServer(requestListener);

function listeningListener(){
    console.log(`Server is running on ${PORT}`);
};

server.listen(PORT, listeningListener);