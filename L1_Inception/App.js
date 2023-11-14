// {/* <div id="parent">
//     <div id="child">
//         <h1>This is a H1 Tag!</h1>
//     </div>
// </div> */}

const parent = React.createElement(
    "div",
    {id:"parent"},
    [ React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"This is a H1 Tag!"),
        React.createElement("h2",{},"This is a H2 Tag!")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"This is a H1 Tag!"),
        React.createElement("h2",{},"This is a H2 Tag!")]
    )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);