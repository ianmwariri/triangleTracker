function getTriangle() {

  var a = parseFloat(prompt("side a"));
  var b = parseFloat(prompt("side b"));
  var c = parseFloat(prompt("side c"));

  if (a === b && a === c && b === c) {
    alert("That's an Equilateral Triangle!");
  }
  else if (a === b || a === c || b === c) {
    alert("That's an Isosceles Triangle");
  }
  else if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
    alert("Invalid Dimensions. NOT a Triangle");
  }
  else {
    alert("That's a Scalene Triangle!");
  }
}
