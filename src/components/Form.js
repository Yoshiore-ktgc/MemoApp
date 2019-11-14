import React from 'react';
import './../assets/styles/Form.css';

function Form() {
    return(
        <form>
            <div className="Form-main">
                <div classname="Form-contents">
                    <span className="h2">Form</span>
                    <input 
                    type="text"
                    className="event input"
                    />
                    <button 
                    type="submit"
                    className="event button"
                    >Add </button>
                    <button 
                    type="submit"
                    className="event button"
                    >Add </button>
                </div>
            </div>
        </form>
        

    )
}

export default Form;