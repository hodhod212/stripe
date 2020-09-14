// import axios from 'axios'

// const instance = axios.create({
//     baseURL: 'payment',
//     headers: {
//         'content-type':'application/octet-stream',
//         'x-rapidapi-host':'example.com',
//         'x-rapidapi-key': process.env.RAPIDAPI_KEY
//     },
// });

// export default {
//     getData: () =>
//     instance({
//         'method':'GET',
//         'url':'payment',
//         'params': {
//             'search':'parameter',
//         },
//         transformResponse: [function (data) {
//             // Do whatever you want to transform the data
//             console.log('Transforming data...')

//             const json = JSON.parse(data)

//             // list of nested object keys
//             const dates = Object.keys(json['nested object'])

//             data = {
//                 dates
//             }

//             return data;
//         }],
//     }),
//     // postData: () =>
//     // instance({
//     //     'method': 'POST',
//     //     'url':'/api',
//     //     'data': {
//     //         'item1':'data1',
//     //         'item2':'item2'
//     //     },
//     //     'headers': { 'content-type':'application/json' // override instance defaults
//     //     },
//     // })
// }
/*
	Response header info:
	Access-Control-Allow-Origin:*
	Content-Type:text/json
	X-Powered-By:nodejs
*/

var http 	= require('http');
var fs 		= require('fs');
var port 	= "1111" ;

http.createServer(function(request, response) {
 
    response.writeHead(200, {
        'Content-Type': 'text/json',
		'Access-Control-Allow-Origin': '*',
		'X-Powered-By':'nodejs'
    });


    fs.readFile('data.json', function(err, content){
        response.write(content);
        response.end();
    });

}).listen(port);

console.log("Listening on port " + port );