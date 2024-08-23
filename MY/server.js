const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path=require('path');
//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

app.use(express.static(path.json(__dirname , './client/build')));
//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get('*', function(req,res){
  res.sendFile(path.json(__dirname, './client/build/index.html'))
});

//portconst PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});