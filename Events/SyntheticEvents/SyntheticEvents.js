class Counter extends React.Component {
    state = {
        counter: 0
    };

    incrementCount = (event) => {
        event.preventDefault();
        console.log("Type-> " + event.type + "Current count-> "+ this.state.counter);

        var extraIncrement = 0;
        if (event.shiftKey) {
            extraIncrement = 10;
        }
        if (event.altKey) {
            extraIncrement = 100;
        }
        this.setState(function (prevState, props) {
            return { counter: prevState.counter + props.increment + extraIncrement };
        });
    };

    decrementCount = (event) => {
        event.preventDefault();
        console.log("Type-> " + event.type + "Current count-> "+ this.state.counter);

        var extraDecrement = 0;
        if (event.shiftKey) {
            extraDecrement = 10;
        }
        if (event.altKey) {
            extraDecrement = 100;
        }
        this.setState(function (prevState, props) {
            return { counter: prevState.counter - props.decrement - extraDecrement };
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