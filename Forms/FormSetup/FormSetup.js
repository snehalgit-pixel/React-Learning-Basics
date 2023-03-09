class HotelBookingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: "",
            emailValue: "",
            phone: 0,
            nameOfHotelValue: ""
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
        console.log("Name: "+this.state.nameValue);
        console.log("Email ID: "+this.state.emailValue);
        console.log("Phone number: "+this.state.phone);
        console.log("Name of Hotel: "+this.state.nameOfHotelValue);

        this.setState({
            nameValue: "",
            emailValue: "",
            phone: 0,
            nameOfHotelValue: "Fantastic Hotels"
        });
        event.preventDefault();
    };

    render() {
      return (
        <form className="contents" onSubmit={this.handleSubmit}>
            <TextInput label={"Name: "}
                       name="nameValue"
                       value={this.state.nameValue}
                       handleInputChange={this.handleInputChange} />
            <TextInput label={"Email ID: "}
                       name="emailValue"
                       value={this.state.emailValue}
                       handleInputChange={this.handleInputChange} />
            <NumberInput label={"Phone Number: "}
                         name="phone"
                         value={this.state.phone}
                         handleInputChange={this.handleInputChange} />
            <SelectInput label={"Preferred hotel: "}
                         name="nameOfHotelValue"
                         value={this.state.nameOfHotelValue}
                         options={this.props.hotelNameOptions}
                         handleInputChange={this.handleInputChange} />
            <button className="button" type="submit" value="Submit">Submit</button>
        </form>
      );  
    }
}

HotelBookingForm.defaultProps = {
    hotelNameOptions: [
        "Fantastic Hotels",
        "Warm Hotels",
        "Average Hotels",
        "Big Hotels",
        "Good Hotels"
    ]
};

class TextInput extends React.Component {
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div>
                <div className="label">{this.props.label}</div>
                <input className="input"
                       type="text"
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleInputChange} />
            </div>
        );
    }
}

class NumberInput extends React.Component {
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render () {
        return (
            <div>
                <div className="label">{this.props.label}</div>
                <input type="number"
                       className="input"
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleInputChange} />
            </div>
        );
    }
}

class SelectInput extends React.Component {
    handleInputChange = (event) => {
        this.props.handleInputChange(event);
    };

    render() {
        return (
            <div>
                <div className="label">{this.props.label}</div>
                <select name={this.props.name}
                value={this.props.value}
                onChange={this.handleInputChange} >
                    {
                        this.props.options.map(
                            (option) => <option key={option} value={option}>{option}</option>
                        )
                    }
                </select>
            </div>
        );
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById("react-form-setup"));