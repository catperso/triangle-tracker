function isTriangle(a, b, c) {
  if (a+b<=c) {
    return true;
  } else if (a+c<=b) {
    return true;
  } else if (b+c<=a) {
    return true;
  } else {
    return false;
  }
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const sideA = parseInt($("input#sideA").val());
    const sideB = parseInt($("input#sideB").val());
    const sideC = parseInt($("input#sideC").val());

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
      $("#triangleType").text("Please use numbers!");
    } else if (isTriangle(sideA, sideB, sideC)) {
      $("#triangleType").text("That's not a triangle!");
    } else {
      $("#triangleType").text("That's a triangle!");
    }

  });
});