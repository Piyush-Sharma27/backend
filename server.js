// server.js
const http = require('http');

require("dotenv").config();


const app=require("./app");
const { default: mongoose } = require('mongoose');



// Create server
const server = http.createServer(app);




server.listen(8002, () => {
  try{
    console.log('DB CONNECT');
  mongoose.connect(process.env.MONGO_URI);
  }catch(error){
    console.log(error,"dberor")
  }
  console.log('Server running at http://localhost:8002');
});




