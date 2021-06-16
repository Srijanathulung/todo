import React, {useState, useEffect} from 'react';

const ToDoForm = (props) => {
  const [inputText, setInputText] = useState('');

    return (
        <div>
            
            <input type='text' value= {inputText} onChange={(event) => {
                setInputText(event.target.value)//easy to debug
            }}></input>
            <div>
                <button
                    type='submit'
                    onClick={() => {
                        props.addListproperty(inputText)
                        setInputText('');
                    }}>Add new list</button>
            </div>
        </div>
    )
}
export default ToDoForm;