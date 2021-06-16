import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
// import React, {useState} from 'react';

const dummy_list = [
  { text: 'do wash clothes', id: '1' },
  { text: 'do meditate', id: '2' },
  { text: 'do exercise', id:'3'}
]

const addListHandler = () => {
  console.log('add function is working');
}

function App() {
  return (
    <div className="App">
      <h1>Lets practise react</h1>
      <ToDoForm addListproperty={addListHandler}/>

      <ToDoList
        textProperty={dummy_list[0].text}
        idProperty={dummy_list[0].id}
      />
      <ToDoList
        textProperty={dummy_list[1].text}
        idProperty={dummy_list[1].id}
      />
      <ToDoList
        textProperty={dummy_list[2].text}
        idProperty={dummy_list[2].id}/>
    </div>
  );
}

export default App;
