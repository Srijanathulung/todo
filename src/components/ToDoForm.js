const ToDoForm = (props) => {
   
    return (
        <div>
            <input type='text'></input>
            <div>
                <button
                    type='submit'
                    onClick={props.addListproperty}>Add new list</button>
            </div>
        </div>
    )
}
export default ToDoForm;