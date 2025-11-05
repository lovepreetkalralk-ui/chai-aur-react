import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx';

function myApp(){
    return(
        <div>
            <h1>custom app !</h1>
        </div>
    )
}
const anotheruser="chai aur react"
const anotherElement=(
    <a href="https://google.com" target='_blank'>visit google</a>
)
//or
const reactElement=React.createElement(
'a',
{href:'https://google.com',target:'_blank'},
'click me to visit google ',anotheruser)

createRoot(document.getElementById('root')).
render(
  
    // <myApp />
    reactElement
  
)
