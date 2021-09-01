import react from "react";

import "./style.css"
import Button from "./Button.js"

let App= ()=>{
    return(
        <div> 
            <h1> React component reuse</h1>
            <Button title="App Store"/>   <Button title="Play Store"/>
            
           </div>
    )
}

export default App;