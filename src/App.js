import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import React, {useState, useEffect} from 'react';
// import React, {useState} from 'react';

const dummy_list = [
  { text: 'do wash clothes', id: 1 },
  { text: 'do meditate', id: 2 },
  { text: 'do exercise', id:3}
]


function App() {

  // const [inputText, setInputText] = useState('');
    const [toDoArray, setToDoArray] = useState([]);

  useEffect(() => {
    setToDoArray(
      dummy_list
    )
  },[])


  // const addListHandler = (event) => {
  const addListHandler = (inputText) => {
    let mockToDoArray = [...toDoArray];
    let lastItemId=mockToDoArray[toDoArray.length-1].id
    let item = {
      text: inputText, id:lastItemId+1
    }
    mockToDoArray.push(item);
    setToDoArray(mockToDoArray)
  // setInputText(event.target.value);
  // console.log('add function is working');
}

  return (
    <div className="App">
      <h1>Lets practise react</h1>
      <ToDoForm addListproperty={(inputText)=>addListHandler(inputText)}/>

      {toDoArray.map((item) =>
        <ToDoList
          key={item.id}
        textProperty={item.text}
        idProperty={item.id}/>
    )}
      
    </div>
  );
}

export default App;
