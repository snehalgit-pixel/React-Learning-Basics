class Counter extends React.Component {
    state = {
        counter: 0
    };

    incrementCount = (event) => {
        console.log("Type-> " + event.type + "Current count-> "+ this.state.counter);

        this.setState(function (prevState, props) {
            return { counter: prevState.counter + props.increment };
        });
    };

    decrementCount = (event) => {
        console.log("Type-> " + event.type + "Current count-> "+ this.state.counter);

        this.setState(function (prevState, props) {
            return { counter: prevState.counter - props.decrement };
        });
    };

    mouseEnter = (event) => {
        console.log("Type-> " + event.type + "Current count-> "+ this.state.counter);
    };

    render() {
        return (
            <div>
                <div className="box">
                    {this.state.counter}
                </div>
                <button className="button" onClick={this.incrementCount} onMouseEnter={this.mouseEnter}>
                    +
                </button>
                <button className="button" onClick={this.decrementCount} onMouseEnter={this.mouseEnter}>
                    -
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Counter increment={1} decrement={1} />, document.getElementById("outer"));