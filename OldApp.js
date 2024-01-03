import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1",{id:"heading"}, "Hello World From React");
// console.log(heading);


const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "This is Saurabh Tank"),
    React.createElement("h2", {}, "I am h2 Tag")]
    ), React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "I am h1 Tag from child 2"),
    React.createElement("h2", {}, "I am h2 Tag ")]
)]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);