const inputBox = document.querySelector("#input-todo");
const listContainer = document.querySelector("#List-container");

//let button = document.querySelector("#button");

/*button.addEventListener("click",addTask(){
    if(inputBox.value === ''){
        alert("You must write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        listContainer.appendChild("li");
    }
})*/
function addTask(){
    if(inputBox.value ===''){
        alert("You must write something")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    saveData();
}
listContainer.addEventListener("click",(e)=>{
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }else if(e.target.tagName ==="SPAN"){
         e.target.parentElement.remove();
  }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()