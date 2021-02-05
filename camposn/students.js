// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
  this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
  this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
  this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
  this.club = club; // string, (e.g. "Improv", "Art")
}

var students = [
  new Student("Pam", "Art", 2, "Art"),
  new Student("Michael", "Business", 4, "Improv"),
  new Student("Dwight", "Horticulture", 1, "Karate"),
  new Student("Jim", "Sports Science", 2, "Guitar"),
  new Student("Angela", "Accounting", 4, "Cat"),
  new Student("Toby", "Human Resources", 3, "Photography")
];

/* This function sorts arrays using an arbitrary comparator. You pass it a comparator 
and an array of objects appropriate for that comparator and it will return a new array 
which is sorted with the largest object in index 0 and the smallest in the last index*/
//I implemented a simple bubble sort -- https://stackoverflow.com/a/16089042 this is the resource 
//I used to make the bubble sort and I adjusted it to deal with comparators rather than integers
function sortArr(comparator, array) {
  var n = array.length;
  var temp = 0;

  for (var i = 0; i < n; i++) {
      for (var j = 0; j < (n - i-1); j++) {
          var check = comparator(array[j], array[j+1]);
          if (check != true) {
              temp = array[j];
              array[j] = array[j+1];
              array[j+1] = temp;
          }

      }
  }
  return array;
}

/* A comparator takes two arguments and uses some algorithm to compare them. If the first 
argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers*/
function exComparator(int1, int2) {
  if (int1 > int2) {
    return true;
  } else {
    return false;
  }
}

/* For all comparators if students are 'tied' according to the comparison rules then the order of 
those 'tied' students is not specified and either can come first*/

/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) {
  if (student1.yearInSchool > student2.yearInSchool) {
    return true; //return student1
  } else if (student1.yearInSchool < student2.yearInSchool) {
    return false; //return student2
  } else { //in the case that they're equal,
    return true; //treat student1 as the bigger one
  }
}

/* This compares two students based on their major. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that 
come later (from A-Z).*/
function majorComparator(student1, student2) {
  //ex: A < S, then return Student2
  if (student1.major.toUpperCase() < student2.major.toUpperCase()) {
    return true;
  } else if (student1.major.toUpperCase() > student2.major.toUpperCase()) {
    return false;
  } else {
    //ex: Accounting and Art both start with A 
    return true; //simply return student1
  }
}

/* This compares two students based on the club they're in. The ordering from "greatest" 
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed). 
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) {
  //the only clubs that are "ranked" are improv > cat > art > and > guitar > everything else == everything else
  var stud1 = 5;
  var stud2 = 5;
  //improv value = 0
  switch (student1.club.toUpperCase()) {
    case "IMPROV":
      stud1 = 1
      break;
    case "CAT":
      stud1 = 2
      break;
    case "ART":
      stud1 = 3
      break;
    case "GUITAR":
      stud1 = 4
      break;
    default: //none of these
      stud1 = 5;
      break;
  }
  switch (student2.club.toUpperCase()) {
    case "IMPROV":
      stud2 = 1
      break;
    case "CAT":
      stud2 = 2
      break;
    case "ART":
      stud2 = 3
      break;
    case "GUITAR":
      stud2 = 4
      break;
    default: //none of these
      stud2 = 5;
      break;
  }
  if (stud1 < stud2) { //stud2 is closer to rank 1
    return true;
  } else if (stud1 > stud2) { //stud1 is closer to rank1
    return false;
  } else { //if the club ranks are equal, then whichever student has the greatest year, gets selected
    yearComparator(student1, student2);
  }

}
Student.prototype.logMe = function(boolPrint) {
  if(boolPrint == true){ //also print the club
  console.log(this.name + " - " + this.major + " - " + this.yearInSchool + " - " + this.club);
  }
  else{ //do not print the club
  console.log(this.name + " - " + this.major + " - " + this.yearInSchool);
  }
};
///--------------------------------------------------------------
//Begin
console.log("**********");
console.log("The students sorted by year in school are:");
//sort students array by year 
newStudents = sortArr(yearComparator, students);
//for each Student in students, call logMe(false)
////students.forEach(logMe(false));
for(var i = 0; i < newStudents.length; i++){
  var tempStudent = new Student("", "", 0, "");
  tempStudent = newStudents[i];
  tempStudent.logMe(false);
}

console.log("**********");
console.log("The students sorted by major are:");
//sort students array by year 
sortArr(majorComparator, students);
//for each Student in students, call logMe(false)
for(var i = 0; i < students.length; i++){
  var tempStudent = new Student("", "", 0, "");
  tempStudent = students[i];
  tempStudent.logMe(false);
}
console.log("**********");
console.log("The students sorted by club affiliation are:");
//sort students array by year 
sortArr(clubComparator, students);
//for each Student in students, call logMe(false)
for(var i = 0; i < students.length; i++){
  var tempStudent = new Student("", "", 0, "");
  tempStudent = students[i];
  tempStudent.logMe(true);
}

