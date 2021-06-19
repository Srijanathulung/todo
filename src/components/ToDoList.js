const ToDoList = (props) => {
    return (
        <div>
        <div>{props.textProperty}</div>
        <button onClick={props.clickDelete}>Delete</button>
    </div>
    )
}
export default ToDoList;