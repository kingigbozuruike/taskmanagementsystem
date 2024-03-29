// code for handling user input, to-do completion, and deletion
const taskForm=document.getElementById("task-form")
const taskList=document.getElementById("task-list")
const taskContainer = document.querySelector(".list-container")


taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    
    if(taskForm !==""){
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item"); 
        taskItem.textContent = taskText;
        
       //adds the user input as a to-do
        taskItem.addEventListener("click", function () {
        this.classList.toggle("completed")
       });
       
       taskContainer.appendChild(taskItem);
       
       //implementation of the delete button to delete unwanted to-dos
       const deleteButton = document.createElement('button');
       deleteButton.classList.add('delete-task');
       deleteButton.textContent = 'Delete';
       taskItem.appendChild(deleteButton)

       deleteButton.addEventListener('click', function () {
        this.parentElement.remove();
       });
    
        
        taskList.appendChild(taskContainer);
        taskInput.value = "";
    }
});

//code to display motivation and suffle it on a timely basis
const quotes = [
    "The best way to predict the future is to create it",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "Life is like riding a bicycle, to keep your balance, you must keep moving.",
    "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
    "Accept yourself, love yourself, and keep moving forward.",
    "If you want to fly, you have to give up what weighs you down.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You can do what you have to do, and sometimes you can do it even better than you think you can.",
    "It's hard to beat a person who never gives up.",
    "It's only after you've stepped outside your comfort zone that you begin to change, grow, and transform.",
    "You can't move to the next chapter of your life if you keep re-reading the last one.",
    "If you're going through hell, keep going.",
    "Sometimes, you've got work a little so you can ball a lot.",
    "Find out who you are and do it on purpose.",
    "Some people want it to happen, some people wish it would happen, others make it happen.",
    "To be contended-that's for the cows.",
    "The man on top of the mountain didn't fall there.",
    "Never let go of that fiery sadness called desire!.",
    "Challenges are gifts that force us to search for a new center of gravity. Don't fight them. Just find a new way to stand."
  ];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

function updateQuote () {
    const quoteElement = document.getElementById('motivational-quote');
    quoteElement.textContent = getRandomQuote();
};

updateQuote();
setInterval(updateQuote, 300000);









