$(document).ready(function () {
  console.log("doc is ready");

});

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

var el = document.getElementById("submitButton");

// click event on that element, run named f/n
el.addEventListener("click", displayUserName);

function displayUserName() {
  // grab the value of the user input
  var elName = document.getElementById("userName");
  //do something with it

  //don't use an alert
  alert(elName.value);
}

//nsole.log(elName.value);

$("#btn").on("click", () => {
  console.log("here");
  let selectedSize;
  console.log("val" + selectedSize);
  if ($("input:radio[name='size']").is(":checked")) {
    selectedSize = $("input[name='size']:checked").val();
    // show the output:
  }
  output.innerText = selectedSize
    ? `You selected ${selectedSize}`
    : `You haven't selected any size`;
});

