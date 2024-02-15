import express from "express";
import config from "./config";

// TODO: import router from routes/
import router from "./routes/index.js";

// In this case, app = server from examples in our code
const app = express();
//MIDDLEWARE

app.use(express.json());

// TODO: use the imported router to handle all requests
app.use("/api", router);

//what is the API
/*app.use('/api', (req, res) => {
  console.log('This is the app.use for /api');
  res.status(200);
  res.send("working API response");
  })
*/

//error handling through the middleware?
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});
//Listener
app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
