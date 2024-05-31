import React, { useState } from 'react'

export default function TextForm(props) {


    const handleExtraSpaces = (event) =>{
         let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra Spaces Removed!!" , "success");
    }

    const handleClear = () => {
        let newText = ""
        setText(newText);
        props.showAlert("Text Cleared!!" , "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!!" , "success");
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!!" , "success");
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState ("")

  return (

      <>
        <div className="mb-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h3>{props.textheading}</h3>
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleChange} rows="8"></textarea>
            <button disabled = {text.length === 0} type="button" className="btn btn-secondary my-3" onClick={handleUpClick}>convert to uppercase</button>
            <button disabled = {text.length === 0} type="button" className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>convert to lowercase</button>
            <button disabled = {text.length === 0} type="button" className="btn btn-secondary" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button disabled = {text.length === 0} type="button" className="btn btn-secondary mx-1" onClick={handleClear}>clear text</button>
        </div>

        <div className="new-container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h3>Text Summary</h3>
            <p>TextUtils contains {text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters.</p>
            <p>Taking {0.008 * text.split(" ").filter(word => word.length > 0).length} minutes to read this!!</p>
        </div>

        <div className="preview" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h3>Preview of Your Text</h3>
            <b>{text.length > 0 ? text : "Nothing to Preview"}</b>
        </div>    
      </>
  )
}
