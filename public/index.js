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

    var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function load() {
  setInterval(runner, 1000);
}
function runner() {
  console.log("BOT LOADED");
  document.getElementById('lod').innerHTML = ""

}
    function netrun() {
      var answer = document.getElementById("userBox").value
      if (answer=="" || answer===" ") {
         document.getElementById("userBox").value = "BLANK TEXT NOT ALLOWED"
      }else {
        fetch('/response/'+answer.toLowerCase())
        .then(response => response.json())
        .then(data => {
        var html = data

        var debug = html.name

      document.getElementById("userBox").value = ""
      document.getElementById("chatLog").innerHTML += '<div class="client-chat"><b>'+answer+"</b><br></div>";
      // var van = answer.toLowerCase();
      // var output = network.run(debug)
      document.getElementById("chatLog").innerHTML += '<div class="my-chat"><b>' +debug+"</b><br></div>";
      console.log(`output: ${output}`);
        });

      }
    }
