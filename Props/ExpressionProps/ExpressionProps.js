function TODO(props) {
    return <ul>TODO: {props.item}</ul>
}

function ListItem(props) {
    const itemList = ["W1", "W2", "W3", "W4", "W5"];
    return (
        <li>{itemList.map((item) => <TODO key={item} item={item}></TODO>)}</li>
    );
}

ReactDOM.render(<ListItem />, document.getElementById("outer"));