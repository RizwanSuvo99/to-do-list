const data = [];

const form = document.querySelector(".main__form");
const mainUl = document.querySelector(".main__ul");

window.onload = ()=>{
  printTodos(data)
}

function printTodos(data) {
  mainUl.innerHTML = ""

  for(const item of data){
    mainUl.appendChild(createTodo(item));
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formInput = e.target[0].value;

  if (!formInput) return alert("Please Enter Something!");

  let id = data.length
  const todo = {
    id: ++id,
    text: formInput,
    isComplete: false,
  };

  data.push(todo);
  mainUl.appendChild(createTodo(todo));

  e.target[0].value = ""; 
});


function createTodo(data) {
  // data?.id Optional chaining
  const li = document.createElement("li");
  li.className = "main__ul-item flex";
  li.innerHTML = `<div class="flex align-center">
  <span class="main__span">${data?.id}</span>
  <p class="main__para ${data?.isComplete && "text__strike"}">${data?.text}</p>
  </div>
  <div class="flex">
  <button class="main__del"  onclick="deleteTodo(${data?.id})">
    <img src="img/gridicons_cross-small.png" alt="" />
  </button>
  <button class="main__check" onclick="isCompleted(${data?.id})">
      <i class="fas fa-check"></i>
  </button>
  </div>`;
  return li;
}


function isCompleted(id) {
  const findedTodo = data.find(item => item.id === id)
  findedTodo.isComplete = true;
  printTodos(data)
}

function deleteTodo(id) {
  const index = data.findIndex(item => item.id === id)
  data.splice(index,1);
  printTodos(data)
}
