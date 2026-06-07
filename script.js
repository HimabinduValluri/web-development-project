// Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("error");

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        error.innerText = "Name is required";
        return;
    }

    if(!emailPattern.test(email)){
        error.innerText = "Enter valid email";
        return;
    }

    if(message === ""){
        error.innerText = "Message is required";
        return;
    }

    error.style.color = "green";
    error.innerText = "Form Submitted Successfully!";

    document.getElementById("contactForm").reset();
});


// Dynamic To-Do List

function addTask(){

    let taskInput =
    document.getElementById("taskInput");

    let task = taskInput.value.trim();

    if(task === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="removeTask(this)">
            Delete
        </button>
    `;

    document.getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}