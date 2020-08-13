//custom functions
//branching
//forms
//jQuery
//identify well-separated user interface and business logic
//git rewrit history 


// Business Logic
function equTriangle (length1, length2, length3) {
  if (length1 === length2 && length1 === length3){
    return true;
  };
};

function isoTriangle (length1, length2, length3) {
  if (length1 === length2 && length1 !== length3){
    return true;
  };
};

function scalTriangle (length1, length2, length3) {
  if (length1 !== length2 && length1 !== length3 && length2 !== length3){
    return true;
  };
};

function notATriangle (length1, length2, length3) {
  if (length1+length2 || length1+length3 <= length2|| length2+length3 <= length1){
    return true;
  };
};

// User Interface Logic

$(document).ready(function () {
  $("#lengths").submit(function (event) {
    event.preventDefault ();
    const length1Input = parseInt($("#length1").val());
    const length2Input = parseInt($("#length2").val());
    const length3Input = parseInt($("#length3").val());


    if (equTriangle(length1Input, length2Input, length3Input)) {
      $("#resultText").text("You made an equilateral triangle!")
    } else if (isoTriangle(length1Input, length2Input, length3Input)) {
        $("#resultText").text("You made an isosceles triangle!")
    } else if (scalTriangle(length1Input, length2Input, length3Input)) {
      $("#resultText").text("You made a scalene triangle!")
    } else {
      $("#resultText").text("Whoops! You did not make a triangle.")
    }
  });
});