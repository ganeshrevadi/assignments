import { useState } from 'react'
import './App.css'

let globalId = 1;
      let todoState = [];
      let oldTodoState = [];

      function addTodoToDom(todo) {
        const parentElement = document.createElement('div');
        parentElement.setAttribute('id', todo.id.toString());
        const titleElement = document.createElement('div');
        titleElement.innerHTML = "Title: " + todo.title;
        const descriptionElement = document.createElement('div');
        descriptionElement.innerHTML = "Description: " + todo.description;
        const todosElement = document.getElementById('todos');
        [titleElement, descriptionElement].forEach((e) =>
          parentElement.appendChild(e)
        );
        todosElement.appendChild(parentElement);
      }

      function removeTodoFromDom(todo) {
        const element = document.getElementById(todo.id.toString());
        element.parentNode.removeChild(element);
      }

      function updateTodoInDom(oldTodo, newTodo) {
        const parentElement = document.getElementById(oldTodo.id.toString());
        parentElement.setAttribute('id', newTodo.id.toString());
        parentElement.firstChild.innerHTML = newTodo.title;
        parentElement.lastChild.innerHTML = newTodo.description;
      }

      function updateState(newTodos) {
        const added = [];
        const deleted = [];
        const updated = [];

        for (let i = 0; i < newTodos.length || i < oldTodoState.length; i++) {
          if (oldTodoState[i]) {
            if (oldTodoState[i]?.id == newTodos[i]?.id) {
              if (
                oldTodoState[i]?.title != newTodos[i]?.title ||
                oldTodoState[i]?.description != newTodos[i]?.description
              ) {
                updated.push([oldTodoState[i], newTodos[i]]);
              }
            } else {
              deleted.push(oldTodoState[i]);
              oldTodoState.splice(i, 1);
              i--;
            }
          } else {
            added.push(newTodos[i]);
          }
        }
        added.forEach(addTodoToDom);
        deleted.forEach(removeTodoFromDom);
        updated.forEach((t) => updateTodoInDom(...t));

        oldTodoState = JSON.parse(JSON.stringify(newTodos));
      }

      function addTodo() {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        todoState.push({
          title: title,
          description: description,
          id: globalId++,
        });
        updateState(todoState);
      }

      function syncTodo() {
        updateState(todoState);
      }


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <input type="text" id="title" placeholder="Todo title" /> <br /><br />
      <input type="text" id="description" placeholder="Todo description" />
      <br /><br />
      <button onClick = { () => {
        addTodo()
      }}>Add todo</button>
      <br />
      <br />

      <div id='todos'></div>
    </div>
    </>
  )
}

export default App
