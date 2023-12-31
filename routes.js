const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type= "text" name="message"/><button>Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[0];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Welcome Page</title></head>");
  res.write("<body><h1>Welcome to the Home Page</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports ={ 
    handler: requestHandler,
    someText: "Some Hard coded text here"
};
