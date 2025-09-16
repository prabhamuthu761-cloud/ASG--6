function calculateGrade() {
  // Get input values
  let sub1 = parseInt(document.getElementById("sub1").value);
  let sub2 = parseInt(document.getElementById("sub2").value);
  let sub3 = parseInt(document.getElementById("sub3").value);
  let sub4 = parseInt(document.getElementById("sub4").value);
  let sub5 = parseInt(document.getElementById("sub5").value);

  // Total and Average
  let total = sub1 + sub2 + sub3 + sub4 + sub5;
  let average = total / 5;

  // Grade calculation
  let grade;
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Display result
  document.getElementById("result").innerHTML =
    `Total Marks: ${total} <br>
     Average Marks: ${average.toFixed(2)} <br>
     Grade: ${grade}`;
}