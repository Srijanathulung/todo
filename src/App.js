import './App.css';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

 const dummy_list = [
  { text: 'to meditate', id: 1 },
  { text: 'to focus', id: 2 },
  { text: 'to work hard', id: 3 },
]


function App() {
  return (
    <div className="App">
      <h1>Lets practise react</h1>
      <ToDoForm/>
      {dummy_list.map((item) =>
      <ToDoList
        textProperty={item.text}
        idProperty={item.id}
      />
      )}
    </div>
  );
}

export default App;
