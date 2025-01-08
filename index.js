const http = require("http")
const myServer= http.createServer((req, res) => {
console.log("new request recorded");
res.end ("Hello from server")
});
myServer.listen(8000,()=> 
console.log("server is running on port 8000")
)