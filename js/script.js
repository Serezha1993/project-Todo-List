console.log('Hello My TodoList');

const list = JSON.parse(localStorage.getItem('list'));
[
  {
    id: 'id1',
    title: 'Learn JS',
    done: true,
  },
  {
    id: 'id2',
    title: 'Learn React',
    done: false,
  },
  {
    id: 'id3',
    title: 'TypeScript',
    done: false,
  },
];



const listElement = document.getElementById("list");
const todoInput = document.getElementById('todoInput');


function render() {
  listElement.innerHTML = null;

  list.forEach(el => {
    const listItem = document.createElement("li");
    listItem.setAttribute('class', el.done ? 'done' : 'progress')
    const listItemText = document.createTextNode(el.title);
    listItem.appendChild(listItemText);

    const buttonItem = document.createElement("button");
    buttonItem.setAttribute('id', el.id);
    const buttonItemText = document.createTextNode("Done");
    buttonItem.appendChild(buttonItemText);

    listItem.appendChild(buttonItem);


    listElement.appendChild(listItem);
  });
};
render();


listElement.addEventListener('click', (event) => {

  if (event.target.nodeName === 'BUTTON') {
    const id = event.target.id
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) list[i].done = !list[i].done;
    }
    uppdateLocalStorage();
    render();
  }
})



// Добавляем елемент в список
function addToList() {
  const todoInputValue = todoInput.value;

  list.push({
    id: Math.random().toString(),
    title: todoInputValue,
    done: false
  });


  uppdateLocalStorage();

  render();
  todoInput.value = '';
}


function uppdateLocalStorage() {
  localStorage.setItem('list', JSON.stringify(list));
}
