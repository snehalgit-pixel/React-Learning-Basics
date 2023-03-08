class HotelBookingForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Favourite Hotel',
            locationValue: 'Delhi'
        };
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        if (name == "nameValue") {
            value = value.toUpperCase();
        }
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        alert("Are you sure that you want to submit ?");
        console.log("Name-> "+this.state.nameValue);
        console.log("Email ID-> "+this.state.emailValue);
        console.log("Name of Hotel-> "+this.state.nameOfHotelValue);
        console.log("Location-> "+this.state.locationValue);

        this.setState({
            nameValue: "",
            emailValue: "",
            nameOfHotelValue: "Favourite Hotel",
            locationValue: "Delhi"
        });

        event.preventDefault();
    };

    render() {
        return (
            <form className="contents" onSubmit={this.handleSubmit}>
                <div className="label">Name:</div>
                <textarea className="input" type="text" name="nameValue" value={this.state.nameValue} onChange={this.handleInputChange} />
                <div className="label">Email ID:</div>
                <input className="input" type="text" name="emailValue" value={this.state.emailValue} onChange={this.handleInputChange} />
                <div className="label">Name of Hotel:</div>
                <select name="nameOfHotelValue" value={this.state.nameOfHotelValue} onChange={this.handleInputChange}>
                    <option value="Favourite Hotel">Favourite Hotel</option>
                    <option value="Happy Hotel">Happy Hotel</option>
                    <option value="Nice Hotel">Nice Hotel</option>
                    <option value="Warm Hotel">Warm Hotel</option>
                </select>
                <button className="button" type="submit" value="submit">Submit</button>
            </form>
        );
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById("outer"));