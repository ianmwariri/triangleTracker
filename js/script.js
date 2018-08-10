function getTriangle() {

  var a = parseFloat(prompt("Enter Dimension a: "));
  var b = parseFloat(prompt("Enter Dimension b: "));
  var c = parseFloat(prompt("Enter Dimension c: "));

  if (a === b && a === c && b === c) {
    alert("That's an Equilateral Triangle!");
  }
  else if (a === b || a === c || b === c) {
    alert("That's an Isosceles Triangle");
  }
  else if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
    alert("Invalid Dimensions! That's NOT a Triangle");
  }
  else {
    alert("That's a Scalene Triangle!");
  }
}
