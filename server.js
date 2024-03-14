const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const bodyParser = require("body-parser");
var cors = require("cors");
const port = process.env.PORT || 3001;


app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Swagger Code ***********************************************************

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger configuration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "OpenReplay Swagger Example API",
      version: "1.0.0",
      description: "A simple API to demonstrate Swagger",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the API routes
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(require("./routes/users"));

app.get("*", (req, res) => {
  res.status(404).send(JSON.stringify("404"));
});

server.listen(port, () => {
  console.log("Server runs on " + port);
});
