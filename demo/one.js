//alert method
function greet() {
  alert("Hello " + document.getElementById("name").value);
}
//confirm Method
function ensure() {
  let status = confirm("Are you leaving this counrty ?");
  if (status) {
    // document.getElementById("confirmmsg").innerHTML="Get Your Passport"
    alert("Get Your Passport");
  } else {
    // document.getElementById("confirmmsg").innerHTML="Stay Cool and Take Breath."
    alert("Stay Cool And Take Breath.");
  }
}
//prompt Method
function myQuestion() {
  let capital = prompt("What is the capital city of India?:");
  if (capital.toLowerCase() == "delhi") {
    alert("You are aware.");
  } else {
    alert("You need to join school.");
  }
}
