function calculateGrade() {
    const marks = parseInt(document.getElementById("marks").value);
    let grade;

    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }

    document.getElementById("grade").textContent = grade; {grade};
  }

//function calcgrade(grade){
//    if (grade>=79 && grade<=100){
//        return 'A';
//    }
//    else if (grade>=60 && grade<=79){
//        return 'B';
//    }
//    else if (grade>=49 && grade<=59){
//        return 'C';
//    }
//    else if (grade>=40&& grade<=49){
//        return 'D';
//    }
//}
//function main(){
//    const readline = require('readline').createInterface({
//        input: process.stdin,
//        output: process.stdout,
//    });
//    readline.question("Enter marks:",
//    (marks) => { marks = parseInt(marks);
//        if(isNaN(marks) && marks>=0 && marks<100){
//        const grade = calculateGrade(marks);
//        console.log('grade is:${grade}');
//    }
//    else
//    {
//        console.log("please enter a numbe:");
//    }
//    readline.close();
//  });
//}