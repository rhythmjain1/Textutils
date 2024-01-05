import React,{useState} from 'react'

export default function Textform(props) {
  const[text,setText]=useState('');
  const handleOnChange =(event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handlexspClick =()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra spaces are removed from text',"success");
  }

  const handlecptClick =()=>{
  var text=document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert('Text is copied to clipboard' ,"success");
  }
  const handleUpClick =()=>{
    // console.log("Uppercase was clicked" + text); 
    let newText= text.toUpperCase(); 
    setText(newText) ;
    props.showAlert('Changed to Upper case',"success");
  }
  const handleloClick =()=>{
    // console.log("Uppercase was clicked" + text); 
    let newText= text.toLowerCase(); 
    setText(newText) 
    props.showAlert('Changed to Lower case',"success");
  }  
  const handleclClick =()=>{
    // console.log("Uppercase was clicked" + text); 
    let newText= ''; 
    setText(newText) 
    props.showAlert('Text area is cleared',"success");
  }
  return (
    <>
    <div style={{color:props.mode === 'light' ? 'black' : 'white'}}>
      {/* <form>  
  <div className="mb-3">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">Enter text here</label> */}
    {/* <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div> */}
{/* // </form> */}

<h2>{props.heading}</h2> 
<div className="mb-3">
  <textarea className ="form-control" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode === 'light' ? 'black' : 'white'}} value={text} onChange={handleOnChange} id="mybox" rows ="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lower case</button>
<button className="btn btn-primary mx-2" onClick={handleclClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handlexspClick}>Clear extra space</button>
<button className="btn btn-primary mx-2" onClick={handlecptClick}>Copy Text</button>
    </div>
    <div className=" container my-3"  style={{color:props.mode === 'light' ? 'black' : 'white'}}>
      <h3>Your text summary </h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p><b>Time to read this text in minutes </b>{0.008*text.split(" ").length}</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something"}</p>
    </div>
    </>
  )
}   
