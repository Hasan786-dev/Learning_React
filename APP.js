//const heading = React.createElement("h1", {id:"heading"}, "Hello Hasan!");
/* <div id="parent">
        <div id="child">
        <div>
    <div> */
    const parent = React.createElement(
        "div",
         {id:"parent"},
         [
            React.createElement(
                "div",
                 {id:"child" },
                 [
                    React.createElement("h1", {},"hello i am h1 tag"),
                    React.createElement("h2", {},"hello i am h2 tag")
                 ]
                ), 
         React.createElement(
            "div",
             {id:"child" },
             [
                React.createElement("h1", {},"hello i am h1 tag"),
                React.createElement("h2", {},"hello i am h2 tag")
             ]
            ),
    ]
 );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);