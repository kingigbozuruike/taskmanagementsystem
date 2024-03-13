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
        
       taskItem.addEventListener("click", function () {
        this.classList.toggle("completed")
       });
       
       taskContainer.appendChild(taskItem);
       const deleteButton = document.createElement('button');
       deleteButton.classList.add('delete-task');
       deleteButton.textContent = 'Delete';
       taskItem.appendChild(deleteButton)

       deleteButton.addEventListener('click', function () {
        this.parentElement.remove();
       });
    
       
       taskItem.addEventListener("dblclick", function () {
        const taskText = this.textContent;
        const inputField = document.createElement("input");
        inputField.type = "text"
        inputField.value = taskText;
        
        this.textContent = "";
        this.appendChild(inputField);

        inputField.addEventListener("blur", function () {
            const newTasktext = this.value;
            taskItem.textContent = newTasktext
        })
       })
        
        taskList.appendChild(taskContainer);
        taskInput.value = "";
    }
});



