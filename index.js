const app = require('./app');
const moongose = require('mongoose');
const config = require('./utils/config');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    ) }); 

app.listen(config.PORT, ()=>{
    console.log(`Server connected to port on ${config.PORT}`);
moongose.connect(config.MONGODB_URI)
   try{
    console.log("Successfully connected to database");
}catch{
    console.log("Error while connecting the server");
   }
})
 