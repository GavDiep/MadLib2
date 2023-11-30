// Mad Lib
document.getElementById("btn").addEventListener("click", showLib);

function showLib() {
  // Input
  let member = document.getElementById("member").value.toLowerCase();
  let noun = document.getElementById("noun").value.toLowerCase();
  let action = document.getElementById("verb").value.toLowerCase();
  let place = document.getElementById("location").value.toLowerCase();

  // Process
  let lib = `My ${member} likes to ${action} with ${noun} at the ${place}.`;

  // Output
  document.getElementById("Lib-out").innerHTML = lib;
}
