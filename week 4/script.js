//I had to declare my buttons as "globals" since I was having difficulty on making them appear
var buttonUp = document.createElement("BUTTON");
var buttonLeft = document.createElement("BUTTON");
var buttonRight = document.createElement("BUTTON");
var buttonDown = document.createElement("BUTTON");
var buttonMark = document.createElement("BUTTON");
//The resource I used to make the main table is:
//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
//The original code made a simple table of size 2x2. I had to edit it to account for our desired size of 3x4
//Furthermore, I had to edit the code in order to have headers. I needed help on creating a makeTable
//in order of <tags> and this resource helped me.
function makeTable(){
// get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  //header cells are made using th - table header
  for (var i = 0; i < 4; i++) {
    var header = document.createElement("th");
    var headerText = document.createTextNode("header " + (i+1));
    header.appendChild(headerText);
    tblBody.appendChild(header);
  }
  // creating the rest of the cells
  for (var i = 0; i < 3; i++) {
    // creates a table row
    var row = document.createElement("tr");
    for (var j = 0; j < 4; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode((i+1)+", "+(j+1));
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "1");
}
//now add buttons https://www.geeksforgeeks.org/html-dom-button-object/
function makeButtons(){
  var text1 = document.createTextNode("Up");
  var body = document.getElementsByTagName("body")[0];//Only have to make a var "body" once
  buttonUp.appendChild(text1);
  body.appendChild(buttonUp);

  var text2 = document.createTextNode("Left");
  buttonLeft.appendChild(text2);
  body.appendChild(buttonLeft);

  var text3 = document.createTextNode("Right");
  buttonRight.appendChild(text3);
  body.appendChild(buttonRight);

  var text4 = document.createTextNode("Down");
  buttonDown.appendChild(text4);
  body.appendChild(buttonDown);

  var text = document.createTextNode("Mark Cell");
  buttonMark.appendChild(text);
  body.appendChild(buttonMark);
}

function up(){
  console.log("up");
}
function left(){
  console.log("left");
}
function right(){
  console.log("right");
}
function down(){
  console.log("down");
}

function changeBG(){
  curCell = document.getElementById("current");
  curCell.style.backgroundColor = "yellow"

  console.log("ok");
}
//-------------------------Main-------------------------------
makeTable();
makeButtons();

//the following blocks work to actually display the buttons
//---------------------------------
buttonUp.classList.add("myButton");
buttonUp.addEventListener('click', up);

buttonLeft.classList.add("myButton2");
buttonLeft.addEventListener('click', left);

buttonRight.classList.add("myButton3");
buttonRight.addEventListener('click', right);

buttonDown.classList.add("myButton4");
buttonDown.addEventListener('click', down);

buttonMark.classList.add("myButton5");
buttonMark.addEventListener('click', changeBG);
//-------------------------------------------
//get element by tag name of td's [0] means: get the first td made (the top left cell)
var curCell = document.getElementsByTagName("td")[0];
curCell.id = "current"; //our current selected cell will have an id of current
//this will make it easy for us to know where we are: call getElementById(current) to refer to the current cell
current.style.borderWidth = "3px";
