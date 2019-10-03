const http = require("http");

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      res.write("<h1>Strona główna</h1>");
      res.write('<a href="./users">Link do strony users</a>');
      res.end();
    } else if (
      req.url === "/users" &&
      typeof req.headers.referer !== "undefined"
    ) {
      res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
      res.end("<h1>Strona użytkowników</h1>");
    } else {
      res.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
      res.end(`<h1>Strona ${req.url} nie istnieje</h1>`);
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`Serwer nasłuchuje pod adresem 127.0.0.1:${port}`)
  );
