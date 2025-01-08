// const http = require("http")
// const fs = require("fs")
// const myServer= http.createServer((req, res) => {
// // console.log("new request recorded");
// // res.end ("Hello from server")
// // });
// // myServer.listen(8000,()=> 
// // console.log("server is running on port 8000"))
// const log =`${Date.now()} - ${req.url} New Request recieved \n `;
// fs.appendFile("log.text", log, (err , data) => {
// switch(req.url){
//     case "/":
//         res.end("Homepage");
//         break;
//         case "/about":
//             res.end("About us");
//             break;
//             case "/contact":
//                 res.end("Contact us");
//                 break;
//                 default:
//                     res.end("404 not found");
//                     break;
//                     }
//                     });
//                     myServer.listen(8000,()=>
//                         console.log("server is running now on port 8000"))
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    // Log the request details to a file
    const log = `${Date.now()} - ${req.url} - New Request received\n`;

    // fs.appendFile("log.txt", log, (err) => {
    //     if (err) {
    //         console.error("Failed to write log:", err);
    fs.appendFile("log.txt", log, (err , data) =>
         {
             switch (req.url) {
        case "/":
            res.end("Homepage");
            break;
        case "/about":
            res.end("About us");
            break;
        case "/contact":
            res.end("Contact us");
            break;
        default:
            res.end("404 not found");
            break;
    }
});
        }
    );

    // Handle routes
   

// Start the server
myServer.listen(8000, () => 
    console.log("server is running now on port 8000")
);
