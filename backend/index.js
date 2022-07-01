/**
 * Plain Rest Web api, no external deps
 * Nodejs > 14
 */
const http = require("http");
const sampleData = require("./serverDataObject.json");

const {
  port = process.env?.NODE_PORT || 8080,
  yourName = "Wayne",
  environment = "development",
} = process.env;

const requestHandler = (request, response) => {
  const out = { payload: "A Friendly JSON REST API", environment, yourName };

  // have a "healthcheck" route that can be used to check service health
  if (request.url === "/healthcheck" && request.method === "GET") {
    out.payload = "ok";
    out.status = 200;
  }

  // route: return data to client
  if (request.url.match(/\/data\/.{9}/) && request.method === "GET") {
    const sessionId = request.url.split("/")[2];
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.statusCode = 200;
    response.end(JSON.stringify(sampleData));
    return true;
  }

  // "log" server access to stdout
  console.log(
    `${new Date()} [${request?.connection?.remoteAddress}]-[${
      request?.headers?.["user-agent"]
    }] ${yourName} accessed ${request.url} [${environment}]`
  );

  // send output as json
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.statusCode = 200;
  response.end(JSON.stringify(out));
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  console.log(
    `${environment} server listening on ${port}. Healthcheck on /healthcheck`
  );
});
