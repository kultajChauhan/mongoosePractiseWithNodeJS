let express = require("express");

const studentRoutes = require("./app/routes/web/route");

let app = express();
app.use(express.json());

app.use('/api/curd',studentRoutes)

app.listen(4000, () => {
  console.log("server is running on 4000");
});
