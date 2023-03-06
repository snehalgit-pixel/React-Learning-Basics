class Circle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'darkmagenta',
            backgroundColor: 'beige',
            font: 'Verdana'
        };
    }

    render() {
        const circleStyle = {
            color: this.state.color,
            backgroundColor: this.state.backgroundColor
        };

        const textMessage = "Welcome to the world of React!";

        return (
        <div className="circle-properties" style={circleStyle}>{textMessage}</div>
        );
    }
}

ReactDOM.render(<Circle />, document.getElementById("react-state"));