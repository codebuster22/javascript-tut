const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todoList = document.getElementById("todoList");

let task;

const removeElement = (event) => {
    event.srcElement.parentElement.remove();
}

const handleInput = ({target}) => {
    task = target.value ;
};

const handleClick = () => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener("click", removeElement);
    li.innerText = task;
    li.appendChild(btn);
    todoList.appendChild(li);
}

input.addEventListener("change", handleInput);
btn.addEventListener("click", handleClick);