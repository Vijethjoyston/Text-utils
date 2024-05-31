// import React, { useState } from 'react'

export default function About(props) {

    // const [mystyle, setMyStyle] = useState({
    //     color : "#102342",
    //     backgroundColor : "white"
    // })

    let mystyle = {
        color : props.mode ==='dark' ? 'white' : '#102342',
        backgroundColor : props.mode ==='dark' ? 'rgb(36, 74, 104)' : 'white',
        border : '1px double',
        borderColor : props.mode ==='dark' ? 'white' : '#102342',
    }

    let myborder = {
        color : props.mode ==='dark' ? 'white' : '#102342',
        backgroundColor : props.mode ==='dark' ? '#102342' : 'white',
    }

  return (
    <div>
      <>
      <h2 style={myborder}>About TextUtils</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={mystyle}>
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,character count or time required to read the words.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={mystyle}>
      <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
      <div className="accordion-body" >TextUtils is a free character tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text with word/ character limit.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={mystyle}>
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle}>This word counter software works in any web browers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</div>
    </div>
  </div>
</div>
{/* <button className="btn btn-secondary my-3" onClick={handleToggle}>{btntext}</button> */}
      </>
    </div>
  )
}
