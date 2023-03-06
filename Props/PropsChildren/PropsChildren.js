const RedText = (props) => {
    return <div className="red">{props.children}</div>
};

const GreenText = (props) => {
    return <div className="green">{props.children}</div>
};

ReactDOM.render(<RedText>Hello</RedText>, document.getElementById("outer-1"));
ReactDOM.render(<GreenText>
    Nested elements are as follows:
    <span><b>Obj-1</b></span> &amp; <span><u>Obj-2</u></span>
</GreenText>, document.getElementById("outer-2"));
ReactDOM.render(<RedText>
    Some more nested elements are as follows:
    <span><b><u>Obj-3</u></b></span> &amp; <span><i><u>Obj-4</u></i></span>
</RedText>, document.getElementById("outer-3"));