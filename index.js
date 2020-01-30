var express = require("express");
const app = express();
var fileupload = require("express-fileupload");
app.use(fileupload());

app.get("/", function(req, res ,next){
  res.status(200).send("Hello World");
});

app.post("/upload", function(req, res, next) {
 const file = req.files.photo;
 file.mv('./uploads/' + file.name, function(err, result) {
  if(err)
   throw err;
  res.send({
   success: true,
   message: "File uploaded!"
  });
});
});

app.listen(process.env.port || 3000, function(){
  console.log("Server is listening");
});
