const express = require("express");
const cors = require("cors")
const path = require('path');
const app = express();

app.use(cors())
const PORT = process.env.PORT || 8080

/* const API_URL =`127.0.0.1:${process.env.API_PORT || 9000 }` */
app.get("/test", (req, res)=>{
  return res.json(" okok")
})

app.use('/', express.static(path.join(__dirname,'..','..','dist')))

app.get('/provider/*', function (req, res) {
  res.sendFile(path.join(__dirname,'..','..','dist','./provider','index.html'));
});

app.get('/admin/*', function (req, res) {
  res.sendFile(path.join(__dirname,'..','..','dist','./admin','index.html'));
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'..','..','dist','client','index.html'));
 }); 


app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}!`)
);

