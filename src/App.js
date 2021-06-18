import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import React,{useState,useEffect} from 'react';

 const dummy_list = [
  { text: 'to meditate', id: 1 },
  { text: 'to focus', id: 2 },
  { text: 'to work hard', id: 3 },
]


function App() {

  const [toDoArray, setToDoArray] = useState([])
  
  useEffect(() =>
  setToDoArray(dummy_list),[])

  const addListHandler = (inputText) => {
    let mockToDoArray = [...toDoArray]
    let lastItemId = mockToDoArray[toDoArray.length - 1].id;
    let item = { text: inputText, id: lastItemId + 1 }
    mockToDoArray.push(item);
    setToDoArray(mockToDoArray);
    console.log('function is working')
  }
  

  return (
    <div className="App">
      <ToDoForm onAddList={(inputText)=>addListHandler(inputText) }/>
      {toDoArray.map((item) =>
        <ToDoList
          key={item.id}
        textProperty={item.text}
        idProperty={item.id}
      />
      )}
    </div>
  );
}

export default App;
