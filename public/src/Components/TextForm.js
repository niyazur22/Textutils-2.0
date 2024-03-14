import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","Success");
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","Success");
    }
    const handleClearClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("All Cleared","Success");
    }   
    const handleExtraSpace = ()=>{
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))    
            props.showAlert("Extra Space Removed","Success");
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
 const [text, setText] = useState('');
  return (
    <>
    <div className="contanier" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
     <div className= "mb-3">
        <textarea className= "form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="10"></textarea>  
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Test</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className='contanier my-2'style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Sumaary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>


    </div>
    </>
  )
}

