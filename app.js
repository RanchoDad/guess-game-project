// MODEL = the data behind our game/app, the state of the application
const wordsUsed = ["luck"];

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


// CONTROLLER

function handleWordAdd(word){
    if(wordsUsed.length === 0){
        wordsUsed.push(word);
        return renderList();
    }else if(word.includes(' ')){
       alert("Words don't have spaces, silly.");
       return renderList(); 
    }
    const firstLetterOfNewWord = word[0];
    const lastWordInList = wordsUsed[wordsUsed.length - 1];
    const lastLetterInList = lastWordInList[lastWordInList.length - 1];
    if(firstLetterOfNewWord === lastLetterInList){
        console.log("This is a valid submission");
        wordsUsed.push(word);
        renderList();
    }else{
        alert("This is not valid!");
        alert(`Your new word was supposed to start with ${lastLetterInList}`);
        wordsListElement.innerHTML = '';
    }
}
function respondToSubmission(){
    const newWordToAdd = newToAddElement.value;
        handleWordAdd(newWordToAdd);
        newToAddElement.value = "";
}
addWordButtonElement.addEventListener("click", respondToSubmission)
newToAddElement.addEventListener("keypress",function (evt){
    if(evt.key === 'Enter'){
        respondToSubmission();
    }
})

