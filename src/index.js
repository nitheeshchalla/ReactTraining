// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool'
import { CarTool } from './components/CarTool'
import App from './App';

const colorList=['blue', 'red', 'black', 'green'];
const carList = [
    {id:1, model:'Elantra', color:'Beige', make:'Hyundai', year:2014, price:13000},
    {id:2, model:'Sevillie', color:'Beige', make:'Cadillac', year:1999, price:2000}
];


ReactDOM.render(
    //React.createElement(ColorTool) //non-jsx code
    <>
    <App></App>
    <ColorTool colors={colorList}/>
    <CarTool cars={carList} />
      </>
    , document.querySelector('#root')
);


