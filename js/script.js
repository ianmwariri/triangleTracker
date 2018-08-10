/*function getTriangle() {

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
*/

function getTriangle() {
  var shapes = [];

  shapes.push(parseInt(prompt("Enter Dimension a: ")));
  if (isNaN(shapes[0]) === true || shapes[0] <= 0) {
    alert("Invalid Input!");
  }
   else {
    shapes.push(parseInt(prompt("Enter Dimension b: ")));
    if (isNaN(shapes[1]) === true || shapes[1] <= 0) {
      alert("Re-enter a valid Dimension: ");
    } else {
      shapes.push(parseInt(prompt("Enter Dimension c: ")));
      if (isNaN(shapes[2]) === true || shapes[2] <= 0) {
        alert("Re-enter a valid dimension: ");
      } else {
        if ((shapes[0] + shapes[1]) <= shapes[2] || (shapes[1] + shapes[2]) <= shapes[0] || (shapes[0] + shapes[2]) <= shapes[1]) {
          alert("Dimensions DON'T form a triangle...");
        }
        else if (shapes[0] === shapes[1] && shapes[1] === shapes[2]) {
          alert("That's an Equilateral Triangle");
        }
        else if (shapes[0] === shapes[1] || shapes[1] === shapes[2] || shapes[0] === shapes[2]) {
          alert("That's an isosceles triangle");
        } else {
          alert("That's a scalene triangle");
        }
      }
    }
  }
}
