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

function isScalene(a, b, c) {
  if (a!==b && b!==c && c!==a) {
    return true;
  } else {
    return false;
  }
}

function isIsosceles(a, b, c) {
  if (a===b && a!==c) {
    return true;
  } else if (b===c && b!==a) {
    return true;
  } else if (c===a && c!==b) {
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
    } else if (isScalene(sideA, sideB, sideC)) {
      $("#triangleType").text("That's a scalene triangle!");
    } else if (isIsosceles(sideA, sideB, sideC)) {
      $("#triangleType").text("That's an isoscelese triangle!");
    } else {
      $("#triangleType").text("That's a triangle!");
    }

  });
});