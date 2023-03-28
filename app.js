// // MODEL = the data behind our game/app, the state of the application
// Instructions for HW:
// At least one element has flexbox properties
// At least one element has grid properties
// You have extended the functionality of the game using JavaScript for at least two distinct features. These could be very large or very small in scope, such as:
// Validating that the words are just one word and not a whole phrase separated by spaces
// Keeping track of a "points" system using any formula you like and displaying the points total to the user
// Activating a countdown timer to limit the amount of time a user has to add new words to the list
// Validating that the user isn't re-using any of their old words, and that every new word is unique

// need to also make the first word come from the first input and not undefined or a string i place in there

const wordsUsed = ["here"];

const wordsListElement = document.querySelector('#words-list');
const addWordButtonElement = document.querySelector("#add-word-button");
const newToAddElement = document.querySelector("#new-word-input");

// VIEW = the HTML, what you see
// one word at a time, add a timer, points system, error message, no spaces just words, 
// connect the button, clear the input form, make the event listener work on enter as well 
// and then reset the cursor into the input field

function renderList(){
    wordsListElement.innerHTML = "";
    wordsUsed.forEach(function(words){
        const newestWord = document.createElement('li');
        newestWord.innerText = words;
        wordsListElement.append(newestWord);
    })
}
const congrats = document.querySelector("#congrats");

// CONTROLLER

function handleWordAdd(word){
// unique js
    if (wordsUsed.includes(word)) {
        alert("This word has already been used!");
        return renderList();
    }
    if(wordsUsed.length === 0){
        wordsUsed.push(word);
        return renderList();
// unique js 
    }else if(word.includes(' ')){
       alert("Words don't have spaces, silly.");
       return renderList(); 
    }
    const firstLetterOfNewWord = word[0];
    const lastWordInList = wordsUsed[wordsUsed.length - 1];
    const lastLetterInList = lastWordInList[lastWordInList.length - 1];
    if(firstLetterOfNewWord === lastLetterInList){
        congrats.innerText = "You're so smart!";
        wordsUsed.push(word);
        alert("You did it!");
        renderList();
    }else{
        alert("This is not valid!");
        alert(`Your new word was supposed to start with ${lastLetterInList}`);
        wordsListElement.innerHTML = '';
        congrats.innerText = "Nice try...";
    }
}
function respondToSubmission(){
    const newWordToAdd = newToAddElement.value;
        handleWordAdd(newWordToAdd);
        newToAddElement.value = "";
        // newToAddElement.value = "";
// unique js
        newToAddElement.setAttribute("placeholder", "");
}

addWordButtonElement.addEventListener("click", respondToSubmission)
// unique js 
newToAddElement.addEventListener("keypress",function (evt){
    if(evt.key === 'Enter'){
        respondToSubmission();
    }
})

