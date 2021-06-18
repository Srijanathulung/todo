const ToDoForm = (props) => {
    return (
        <div>
            <input type='text'></input>
            <div>
                <button type='submit' onClick={props.onAddList}> Add new list </button>
            </div>
        </div>
    )
}
export default ToDoForm;