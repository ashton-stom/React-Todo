import './App.css'
import React from 'react';
import ToDoList from './components/TodoList.js';
import ToDoForm from './components/TodoForm.js'


const tasks = [
  {
      task: 'Make To-Do List',
      id: 1,
      completed: false
  },
  {
      task: 'Eat',
      id: 2,
      completed: false
  },
  {
      task: 'Code',
      id: 3,
      completed: false
  },
  {
      task: 'Game For 5 Hours',
      id: 4,
      completed: false
  },
  {
      task: 'More Coding',
      id: 5,
      completed: false
  },
  {
      task: 'Sleep',
      id: 6,
      completed: false
  },
]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      nextId: 7
    }
  }
addTask(input) {
  let newTask = {
    task: input,
    id: this.state.nextId,
    completed: false
  }
  let newTasks = [...this.state.tasks, newTask]
  this.setState({tasks: newTasks, nextId: this.state.nextId+1})
}

toggle(id) {
  console.log(this.state)
  let newTasks = this.state.tasks.map(task => {
    if(id == task.id) {
      task.completed = !task.completed
    }
    return task
  })
  this.setState({...this.state, tasks: newTasks})
}

clear() {
  let newTasks = this.state.tasks.filter(task => {
    return !task.completed
  })
  this.setState({...this.state, tasks: newTasks})
}

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='container'>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList toDos={this.state.tasks} toggle={this.toggle.bind(this)}/>
        <ToDoForm add={this.addTask.bind(this)} clear={this.clear.bind(this)}/>
      </div>
    );
  }
}

export default App;
