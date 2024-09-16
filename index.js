const http = require("http");
const port = process.env.PORT || 3000; // Sử dụng biến môi trường PORT từ Render
const hostname = "0.0.0.0"; // Lắng nghe trên tất cả các địa chỉ IP

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
