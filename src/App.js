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
  const [changingVar,setChangingVar]=useState('')
  
  useEffect(() =>
    setToDoArray(dummy_list)
    , [])
  
  // useEffect(function () {
  //   //everytime the value of changingVar changes, this line runs
  //   },[changingVar])
    
  //   useEffect(function () {
  //     //everytime the value of changingVar or toDoArray changes, this line runs
  //     },[changingVar, toDoArray])
      


  const addListHandler = (inputText) => {
    let mockToDoArray = [...toDoArray]
    let lastItemId = mockToDoArray[toDoArray.length - 1].id;
    let item = { text: inputText, id: lastItemId + 1 }
    mockToDoArray.push(item);
    setToDoArray(mockToDoArray);
    console.log('addListHandler  is working' )
  }
  
 
  const onDeleteHandler = (index, event) => {
    console.log('delete button is clicked')
    let toBeDeletedItem=[...toDoArray]
    // let toBeDeletedItem=[...mockToDoArray]
    toBeDeletedItem.splice(index, 1);
    setToDoArray(toBeDeletedItem);

  }

  return (
    <div className="App">
     <label>ToDo List</label>
      <ToDoForm onAddList={(inputText)=>addListHandler(inputText) }/>
      {toDoArray.map((item,index) =>
        <ToDoList
          key={item.id}
        textProperty={item.text}
          idProperty={item.id}
          
        clickDelete={()=>onDeleteHandler(index)}
        />
       
      )}
      
    </div>
  );
}

export default App;
