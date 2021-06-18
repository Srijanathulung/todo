import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

 const dummy_list = [
  { text: 'to meditate', id: 1 },
  { text: 'to focus', id: 2 },
  { text: 'to work hard', id: 3 },
]


function App() {

  const addListHandler = () => {
    console.log('function is working')
  }
  

  return (
    <div className="App">
      <h1>Lets practise react</h1>
      <ToDoForm onAddList={()=>addListHandler() }/>
      {dummy_list.map((item) =>
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
