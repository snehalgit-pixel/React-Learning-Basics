class Greeting extends React.Component {
    render() {
        return (
            <div className="prop-class">
                <h2>{this.props.message}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Greeting message="Hello React Devs!"/>, document.getElementById("react-prop-1"));
ReactDOM.render(<Greeting message="React is fun!"/>, document.getElementById("react-prop-2"));