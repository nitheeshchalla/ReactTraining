import React from 'react';


export const HelloWorld = () => {
    //return React.createElement('h1', null, 'Hello World!'); //non-jsx code
    //return <div><h1>Hello World!</h1><span>Test</span></div> //jsx code. JSX code will convert into non-jsx code internally. See main.chunk.js file
    // return  (
    // <React.Fragment><h1>Hello World!</h1><span>Test</span></React.Fragment>
    // );  
    //React.Fragment will create wrap around html ele without creating actual elements
    //<></> is alternate to React.Fragement
    return (
        <><h1>Hello World!</h1></>
    );

};