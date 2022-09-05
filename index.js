function addList(event) {


function getOptions(){
  var x= document.getElementById("mySelect")
  var txt1 = "No. of items in dropdown is : ";
var i;
l=document.getElementById("mySelect").length;  
txt1 = txt1+l;
for (i=0;i<x.length;i++)
  {
    txt1 = txt1 + "\n" + x.options[i].text;
  }
alert(txt1);
}

  event.preventDefault();
  

  let containner = document.querySelector(".todo-list");
  
  let val = document.querySelector(".todo-input").value;
  if (val != "") {
    let task = document.createElement("li");
    task.classList.add("todo-item");
    task.textContent = document.querySelector(".todo-input").value;
    containner.appendChild(task);
    document.querySelector(".todo-input").value = "";

    

    let completeButton = document.createElement("button");
    completeButton.appendChild(document.createTextNode("Complete"));
    containner.appendChild(completeButton);
    completeButton.classList.add("complete-btn");
    let flag = true;
    completeButton.addEventListener("click", function () {
      task.style.textDecoration = flag
        ? "line-through solid rgb(0, 0, 0)"
        : "none";
      flag = !flag;
    });

    

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("trash-btn");
    deleteButton.appendChild(document.createTextNode("Delete"));
    containner.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      containner.removeChild(task);
      containner.removeChild(completeButton);
      containner.removeChild(deleteButton);
    });
    
    

   
  }
  
  
  
}

