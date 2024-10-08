

//a variable called saveEl which holds the save-el id which is the Records tag
let saveEl = document.getElementById("save-el")

//a variable called countEl which holds the count-el id which is the h2 tag of 0
let countEl = document.getElementById("count-el")

// a variable called count which is set to be 0 
let count = 0

// add() function which is used here for reusability for adding number when the ADD THEM button is clicked, so all the below will happen when the ADD THEM button is being clicked.
function add(){
    // above count is set to be 0, so we here write count (+= what this means is count(which is 0) + 1 = 1) 0 + 1 = 1, now when the ADD THEM button is clicked again it adds 1 with the previous count value count(1) + 1 = 2
    count += 1
    // here the variable called "countEl" which displays 0, we are using textContent(textContents makes the text clear readable for us humans) to change it to whatever the count variables value is
    countEl.textContent = count
}

// save() function which is used here for reusability, whenever we add numbers we also want to save them, so this is what this function does.
function save(){
    // here we are adding a new variable called countStr which has the value of the above add() functions count and the (+ " emoji " is used to add some space between the first saved number and the upcoming saved numbers)
    let countStr =  count + " 𖠋 "
    // we are now telling saveEl variable with its .textContents to += (<- what this means is whatever is saved inside the saveEl variable which is RECORDS: to show with countStr)
    saveEl.textContent += countStr
    // Now we are able to add and save but when we click save the countEl doesn't reset to 0 it stay where you saved the last number like for example if you clicked the ADD THEM button 7 times and the countEl is increased from 0 to 7 when you click save the number 7 is save in RECORDS but the countEl doesn't reset to 0, that is why we are setting countEl's textcontent to 0 when ever we click save
    countEl.textContent = 0
    // though countEl is set back to 0 when save button is clicked, still its value is still 7 or what every number you saved at, that is why we are setting count value to be 0 when ever we click save button
    count = 0
}



