const taskForm=document.getElementById("task-form")
const taskList=document.getElementById("task-list")

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
        
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});



