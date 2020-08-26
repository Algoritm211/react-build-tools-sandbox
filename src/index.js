// import Log from "./log";
// import Calc from "./calc";

// import img from './react.png'

// const calc = new Calc();
// const log = new Log();

// log.log(calc.add(1, 2, 3, 4, 5, 6, 7, 8, 9));

// const elem = document.createElement('img')
// elem.src = img
// document.body.appendChild(elem)
import React from 'react'
import ReactDOM from 'react-dom'
import './main.scss'


const App = () => {
    return(
        <div>
            <p>Hello, I'm Python/JS developer. This is WebPack React app</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
