class StatusBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enabled: true,
            message: "State is enabled."
        };
        this.showMessage = this.showMessage.bind(this);
    }

    handleClick = (event) => {
        event.preventDefault();

        this.setState(state => ({
            enabled: !state.enabled
        }));
    };

    showMessage() {
        if (this.state.enabled) {
            alert("Do you want to disable this state ?");
            this.setState({
                message: "State is disabled."
            });
        }
        else {
            alert("Do you want to enable this state ?");
            this.setState({
                message: "State is enabled."
            });
        }
    }

    render() {
        return (
            <div>
                <div className="box">{this.state.message}</div>
                <button className="button" onClick={(event) => {
                    this.handleClick(event);
                    this.showMessage();
                }}>{this.state.enabled ? "Disable" : "Enable"}</button>
            </div>
        );
    }
}

ReactDOM.render(<StatusBox />, document.getElementById("react-toggle-event"));