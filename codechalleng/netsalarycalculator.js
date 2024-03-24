// Function to calculate and display net salary
function calculateNetSalary() {
    // Get the input values
    let basicSalary = parseFloat(document.getElementById("basic-salary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);
      //clac tax
    let payee = Math.floor((basicSalary + benefits) * 0.25);
      //calc NHIF dedections
    let NHIFDeductions = Math.floor(basicSalary * 0.02);
      //calc NSSF deductions
    let NSSFDeductions = Math.floor(basicSalary * 0.12);
      // gross salary
    let grossSalary = Math.floor(basicSalary + benefits);
     // net salary
    let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
     //show net salary
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `
       ${payee}
       ${grossSalary}
       ${NHIFDeductions}
   ${NSSFDeductions}
  ${netSalary}
      `;
  }
  
  //event listener button
  let calculateButton = document.getElementById("calculate-button");
  calculateButton.addEventListener("click", calculateNetSalary)