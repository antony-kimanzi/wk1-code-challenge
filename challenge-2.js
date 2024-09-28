function generateGrade(marks) {
    if (marks > 79) {
      return "A";
    } else if (marks <= 79 || marks >= 60) {
      return "B";
    } else if (marks >= 70) {
      return "C";
    } else if (marks >= 60) {
      return "D";
    } else {
      return "F";
    }
  }