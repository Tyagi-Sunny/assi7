const express = require("express");
const routes = require("./routes/routes");
const app = express();

app.use(express.json());
app.use("/", routes);

app.listen(3000, () => {
  console.log("Say hii with a little smile on face :)");
});
