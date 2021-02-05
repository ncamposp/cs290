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
function sortArr(comparator, array) {
  var newArray = array;
  var length = array.length;
  var low = 0;
  for (var i = 1; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      var compBool = comparator(array[j], array[low]); //compare two students
      if (compBool == true) //student1
        low = j;
      else {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }

  }
  return newArray;
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
  if (student1.major.toUpperCase < student2.major.toUpperCase) {
    return true;
  } else if (student1.major.toUpperCase > student2.major.toUpperCase) {
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
  switch (student1.club.toUpperCase) {
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
  switch (student1.club.toUpperCase) {
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
  if (stud1 > stud2) {
    return true;
  } else if (stud1 < stud2) {
    return false;
  } else { //if the club ranks are equal, then whichever student has the greatest year, gets selected
    yearComparator(student1, student2);
  }

}

/* Your program should output the following to the console.log, including each of the opening and closing 
stars. All values in parenthesis should be replaced with appropriate values. To accomplish this, you will 
have to sort the array of students using each comparator and then loop through the array and and call logMe
on each student of the now-sorted array. If the argument is 'true' then it prints the student's name, major, 
year in school, and club affiliation. If the argument is 'false' then the club affiliation is ommited and 
just the student's name, major and year in school is logged. Please carefully note which sorted results require
the club to be displayed and which do not.

**********
The students sorted by year in school are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by major are:
(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student

**********
The students sorted by club affiliation are:
(Name - Major - Year - Club) // of the "greatest" student
...
(Name - Major - Year - Club) // of the "least" student

**********

As an example of what is expected to be printed to the console with logMe being sent True for a single student:
Jim - Sports Science - 2 - Guitar

*/
