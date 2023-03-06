function Circle(props) {
    const currentStyle = {
        backgroundColor: props.color
    };
    return <div className="circle-properties" style = {currentStyle}></div>
}

function MagentaCircle() {
    return <Circle color="magenta"></Circle>
}

function YellowCircle() {
    return <Circle color="yellow"></Circle>
}

function GreenCircle() {
    return <Circle color="green"></Circle>
}

function BlueCircle() {
    return <Circle color="dodgerblue"></Circle>
}

function RandomCircle() {
    const Circles = [
        MagentaCircle,
        YellowCircle,
        GreenCircle,
        BlueCircle
    ];
    const SomeCircle = Circles[props.index];
    return <SomeCircle />
}

ReactDOM.render(<Circle color="red" />, document.getElementById("react-dynamic-prop-1"));
ReactDOM.render(<MagentaCircle />, document.getElementById("react-dynamic-prop-2"));
ReactDOM.render(<YellowCircle />, document.getElementById("react-dynamic-prop-3"));
ReactDOM.render(<GreenCircle />, document.getElementById("react-dynamic-prop-4"));
ReactDOM.render(<BlueCircle />, document.getElementById("react-dynamic-prop-5"));
ReactDOM.render(<RandomCircle index={Math.floor(Math.random() * 10)} />, document.getElementById("react-dynamic-prop-6"));