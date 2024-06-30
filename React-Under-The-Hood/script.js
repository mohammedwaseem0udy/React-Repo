function Counter() {
    const [count, setCount] = React.useState(0);

    const handleClick = function() {
        setCount(count + 1);
    }
    
    return (
        React.createElement(
            "div",
            null,
            React.createElement("p", null, `Count: ${count}`),
            React.createElement("button", {onClick: handleClick}, `Increament`)
        )
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(Counter))