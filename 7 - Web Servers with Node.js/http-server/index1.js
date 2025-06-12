
// Note: this program doesnot uses express, its using functionality of node. 
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/world') { //for end point url/world eg: localhost:3000/world
        res.writeHead(200, { 'Content-Type': 'application/json' })// can also use res.statusCode=200 and res.setHeader('Content-Type','application/json')
        res.write(JSON.stringify({// for writing some part of the data  write stream response
            data: 'Hello World!!!'
        }
        ));
        res.write(JSON.stringify({
            data1: 'How are you World?'
        }
        ));
        res.end(JSON.stringify({//for ending the write stream and say i have ended my response here
            data2: 'Bye World!!'
        }
        ));
    }
    else if (req.url === '/sun') { //for end point url/sun eg: localhost:3000/sun
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li> Hello sun!!</li>');
        res.write('<li> Are you hot sun?</li>');
        res.write('<li> Bye sun!!</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    else {

        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('Error code 404. Please recheck what you are trying to access.')
    };
});
    server.listen(8000, () => {
        console.log('Listening in the port!!')
    });

