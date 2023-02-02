import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function FormTemp(props) {

    const[text,setText] = useState('')

    const handleUpClick = ()=>{
        console.log("Uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text changed to UpperCase", "success")
    }
    const handleOnChange = (event)=>{
        console.log("Change occured");
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
        console.log("Lowercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text changed to LowerCase", "success")
    }
    const handleCopy = () => {
        var copyText = document.getElementById("textbox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied to clipboard", "success")
    }
    const handleClear = () =>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared", "success")
    }
    // const handleSpell = () => {
    //     var spellText = document.getElementById("textbox");
    //     spellText.spellcheck();
    //     if (spellText.spellcheck === true) {
    //         props.showAlert("Spelling is correct", "success")
    //     }
    //     else{
    //         props.showAlert("Incorrect spelling")
    //     }

    // }

    return (
    <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
            <div className="formtemp">

                <h1>{props.heading}</h1>
                <div className="form-cont mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} id="textbox" rows="8"/>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >UPPERCASE</button>
                <button className="btn btn-success mx-2" onClick={handleLoClick}>lowercase</button>
                <button className="btn btn-danger" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-warning mx-2" onClick={handleClear}>Clear Text</button>
                {/* <button className="btn btn-secondary mx-2" onClick={handleSpell}>Spellcheck</button> */}

            </div>
        </div>
        <div className="container my-5"style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>Summary:-</h1>
            <p>{text.split(" ").length} Words || {text.length} Characters</p>
            <p>Estimated time to read : {0.008*text.split(" ").length} Minutes</p>

            <h2>Preview:</h2>
            <p>{text.length>0?text:"*Enter text above to preview.*"}</p>
        </div>
    </>
  )
}

FormTemp.propTypes = {
    heading: PropTypes.string.isRequired
}

FormTemp.defaultProps = {
    heading: 'Add heading'
}