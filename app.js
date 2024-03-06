let usualRoutine = document.getElementById("usualRoutine");
const createButton = document.getElementById("create");
const newHabitButton = document.getElementById("newHabit");
let num = document.getElementById("num");
let habits=[];
let promptFreq = 4;

function getRoutine() { //function to add 5 habits from your usual routine
  for (let i=0; i<= promptFreq; i++) { //for loop so prompt box only pops up 5 times
    let input = prompt("Enter 5 habits in your daily routine starting from when you wake up") //gets user input
    if (input === " ") {
      break; // breaks for loop if nothing is entered, stops the prompt box from popping up
    }
    let habitNumber = habits.push(input);  //adds user input onto the end of the habit array
    console.log("Routine:", habitNumber, input) //prints Routine: number of habut in list and the habit input and prints in console
    let newLi = document.createElement('ol') //create ordered list
    newLi.textContent = `${habitNumber}. ${input}`; //links user input to usualRoutine div and retrieves text, adds the text to html page
    usualRoutine.appendChild(newLi); //adds user input in usualRoutine div into a numbered list.
 }
}


function newHabit() { //function to add 1 new habit
  let numValue=parseInt(num.value); // get value from user input on HTML page and converts this string into a number using .value
  if (numValue <=0) {
     alert("Please select a habit");
     return; //if 0 or less than 0 entered to select habit, stop. doesnt let user move on input new habit.
  } 
  else { 
    if(numValue <=habits.length) { //if number inputted is within the range of how many usual habits added then prompt box pops up to enter new habit
      let newInput = prompt("Describe your new habit:");
      if (newInput === "") {
        return;
      }
      habits.splice(numValue, 0, newInput); //insert new habit after the number of habit selected.
      usualRoutine.innerHTML ="";//clear list on html page to reprint new list
      
      for(i=0; i<habits.length; i++) {  //iterate through each habit in the habits array
        let newLi = document.createElement('ol'); //create new ordered list item 
        newLi.textContent = `${[i+1]}.${habits[i]}`; //add all habits and new habit from array to usualRoutine div on html page, separate array to only have 1 item on each line in an ordered list. i+1 so list starts at 1 and not 0.
       usualRoutine.appendChild(newLi); //add input in usualRoutine div in bullet point
      }
    }
  }
}


createButton.addEventListener("click", function() {
  getRoutine(); //click 'Usual Habit' html button to activate prompt to add in habits.
});

newHabitButton.addEventListener("click", function() {
  newHabit(); //click 'Add new habit' html button to activate prompt to add in new habits
});


// QUESTION 2:
//Q2.1:
// Define unshift(), shift() and split(): 
    //unshift() is a javascript method that adds new elements to the start of an array
    //shift() is a javascript method that removes the first element of an array aka at index [0], it can also return the first element of the array that was removed.
    //split() is a javascript method that splits a string into an array of 2 or more substrings and returns the array.

// Using the topic of “CFGdegree”, provide an example of unshift(), shift() and split(). (E.g.The theme could be the different CFGdegree streams.)
    //For example in CFGdegree, you could have an array of students names in the fullstack stream spring cohort. If the first student in that fullstack array of names was really ill and wanted to defer to the next cohort, you could use shift() to remove their name from the start of the fullstack array of student names and return their name to add to the summer CFGdegree fullstack array of student names. Using Unshift() you could add a different student's name to the start of the fullstack array. For split(), you could take a string like "Welcome to the CFGdegree" and split this into an array using .split("") will result in ["W","e","l","c","o","m","e"," ","t","o"," ","t","h","e"," ","C","F","G","d","e","g","r","e","e"] splitting the string into a array of substrings aka their letters and spaces.

//Q2.2
// Define object methods
    //They are actions that can performed on an object and contains a function definition. An example of an object could be where you have a list of key-value pairs inside of the object where the key (key of named values are called properties) is like a label for the value. e.g. firstName would be a property (aka the key or label) and Jane would be the value. Using object methods you can access the value of properties like firstName of an object using nameOfObject.firstName

// Using the topic of “Programming Languages”, create a new object and object methods.
    //const programmingLanguages = {
        //language: "Javascript",
        //function: "Web development",
        //yearCreated: 1995,
        //studentDifficultyRating: "3/5 stars"
    //}
    //programmingLanguages.yearCreated; //This will access year created in programming languages and will return 1995

//Q2.3
// Explain the onmouseover event
    //This is a DOM event that can be triggered when the user moves their mouse over the HTML element
// Explain two other DOM events of your choosing
    //onkeydown is a DOM event, the event is triggered when the user presses a key on the keyboard, this can be used for forms or creating keyboard shortcuts
    //onclick is a DOM event, the event is triggered when the user clicks on the specific HTML element e.g. a button, some text, a link etc.
































