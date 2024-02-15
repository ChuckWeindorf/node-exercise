import express from "express";
import config from "./config";

// TODO: import router from routes/
import router from "./routes";  //index.js is default

// In this case, app = server from examples in our code
const app = express();

//MIDDLEWARE
app.use(express.json());

// TODO: use the imported router to handle all requests
app.use("/api", router);

//error handling through the middleware?
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

//Listener
app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
