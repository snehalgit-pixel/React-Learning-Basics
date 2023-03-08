class EmailForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailValue: ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({emailValue: event.target.value});
    }

    handleSubmit(event) {
        console.log("Email address submitted: "+ this.state.emailValue);
        alert("Confirm the Email address you want to submit: "+this.state.emailValue);

        this.setState({emailValue: ""});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="label">Email address:</div>
                <input className="input" type="text" value={this.state.emailValue} onChange={this.handleEmailChange} />
                <button className="button" type="submit" value="Submit">Submit</button>
            </form>
        );
    }
}

ReactDOM.render(<EmailForm />,document.getElementById("outer"));