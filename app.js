const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const brain = require("brain.js")

const app = express();

var data = [
  {
    "in": "hello",
    "out": "hello"
  },
  {
    "in": "hi",
    "out": "hello"
  },
  {
    "in": "bye",
    "out": "It was pleasure talking to you. See you soon!"
  },
  {
    "in": "bye, i am busy ",
    "out": "It was pleasure talking to you. See you soon!"
  }
]

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const network = new brain.recurrent.LSTM();
// function train() {

  const trainingData = data.map(item =>({
    input: item.in,
    output: item.out
  }))
  // var output = 1
  network.train(trainingData,{
    iterations: 20000,
    log: true
  })


app.get("/", function(req, res){
  res.render("home")
})
app.get("/response/:id", function(req, res) {
  console.log(req.params.id);
  var output = network.run(req.params.id)
  var data = JSON.stringify({ "name": output})
  res.send(data);
});

// Campk12.fetch("GET", "urlishere")

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function(req, res) {
  console.log("Server is running on port " + port);
})
