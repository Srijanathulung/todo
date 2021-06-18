import React,{useState} from 'react';
const ToDoForm = (props) => {
    const [inputText, setInputText]=useState('')
    return (
        <div>
            <input
                type='text'
                onChange={(event) =>
                   { setInputText(event.target.value)}}//wrap with {} in new line(it will be easy to debug)
                value={inputText}
            ></input>
            <div>
                <button
                    type='submit'
                    onClick={(event) =>{ props.onAddList(inputText)
                        setInputText('')}
                    }
                > Add new list </button>
            </div>
        </div>
    )
}
export default ToDoForm;