var todos= [
    "chores",
    "workout",
    "admission updates",
    "edit photos",
    "code"
];

//for (var i = 0; i < todos.length; i++) {
    //console.log(i);
//};
function logTodos(todos, i) {
    console.log(todos, i);
}
todos.forEach(logTodos)
//var counterOne = 10;
//while (counterOne > 0) {
 //   console.log(counterOne);
  //  counterOne--
//};
//var counterTwo = 10
///do {
 //   console.log(counterTwo);
   // counterTwo--;
//} while (counterTwo > 0);

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtn = document.getElementsByClassName("delete");

function inputLength() {
    return input.value.length;
}

function createListElement(){
    var deleteBtn = document.createElement("button");
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('x'));
    var li = document.createElement("li");
         li.appendChild(document.createTextNode(input.value));
          li.appendChild(deleteBtn);
        ul.appendChild(li);
        input.value = ""

        deleteBtn.addEventListener("click", function(e){

            if (e.target.classList.contains('delete')) {
                var li = e.target.parentElement;
                ul.removeChild(li);
            }
        })
    }

 
    

button.addEventListener("click", function() {
    if (inputLength() > 0) {
        createListElement();

    }

    
})

input.addEventListener("keypress", function(event){
    if (inputLength() > 0 && event.which=== 13) {
        createListElement();

    }
})

