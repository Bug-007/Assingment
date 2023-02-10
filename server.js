const express = require('express');
const bankDetailRoute = require('./routes/bankDetail.js')
const bodyParser = require('body-parser')
const branchDetailRoute = require('./routes/bankDetail')
const app = express();

const PORT = 3000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
 
app.use('/',bankDetailRoute);

app.listen(PORT , (err) => {
    if(err){
        console.log(err);
    }
    else{
    console.log("Server started.");
    }
})



