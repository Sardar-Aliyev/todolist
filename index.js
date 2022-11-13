const todoInput = document.querySelector(".todoinput");
const todoBtn = document.querySelector(".todobtn");
const jobContainer = document.querySelector(".job-container");


todoBtn.addEventListener("click", jobEventContent);
jobContainer.addEventListener("click",listofJobs);

function listofJobs(e) {
    const selectedItem=e.target;

   if (selectedItem.classList.contains("checkbtn")) {
    selectedItem.parentElement.classList.toggle("job-completed")
   }
    if (selectedItem.classList.contains("deletebtn")) {
        selectedItem.parentElement.classList.add("delete");
    }

}


function jobEventContent(e) {
    e.preventDefault();

    const jobDivContainer = document.createElement("div");
    jobDivContainer.classList.add("joblist");
    jobContainer.appendChild(jobDivContainer);

    const todolist = document.createElement("li");
    todolist.classList.add("todolist");
    todolist.innerText = todoInput.value;
    jobDivContainer.appendChild(todolist);

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("checkbtn");
    checkBtn.innerHTML="<i class='fa-solid fa-check'>";
    jobDivContainer.appendChild(checkBtn);

    const delBtn = document.createElement("button");
    delBtn.classList.add("deletebtn");
    delBtn.innerHTML="<i class='fa-solid fa-trash'>";
    jobDivContainer.appendChild(delBtn);

    todoInput.value="";

}

