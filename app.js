import  React from "react";
import ReactDOM from "react-dom/client"

const title=<h1>Title</h1>

const footer=()=>{
  return(
    <h1>footer</h1>
  )
  
}
const number=1000;
const Component=()=>{
  return(
  <h2>component</h2>
  )
}

const HeadingComponent=()=>{
  return(
<div>
  <h2>{number}</h2>
  {title}
  {footer()}
  <Component/>
    <h1>heading Component</h1>
    </div>
  )
}



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
 