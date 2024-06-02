const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Enter a Task To Your List");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);    //to display li task 1 2 3
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);    //this 2 lines for X symbol
    }
    inputBox.value='';   //it makesthe input box empty after
    saveData(); 
}

//X action and to strike the task and unstrike

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

//to store  the  data (tasks in browser even we refresh it will not removed)
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
//to display the data 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();