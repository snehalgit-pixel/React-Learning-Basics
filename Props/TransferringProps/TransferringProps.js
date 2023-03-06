class Company extends React.Component {
    render() {
        return (
            <div className="company">
                <div>Company name: {this.props.companyName}</div>
                <Employee empName={this.props.empName} 
                          designation={this.props.designation} />
                <Activities committees={this.props.committees}
                            forums={this.props.forums} />
            </div>
        );
    }
}

class Employee extends React.Component {
    render() {
        return (
            <div className="employee">
                <div>Name: {this.props.empName}</div>
                <div>Designation: {this.props.designation}</div>
            </div>
        );
    }
}

class Activities extends React.Component {
    render() {
        return (
            <div className="activities">
                <div>Committees: {this.props.committees}</div>
                <div>Forums: {this.props.forums}</div>
            </div>
        );
    }
}

ReactDOM.render(<Company companyName="Emids" empName="SP" designation="SE" committees="A, B, C" forums="A1, B2, C3" />,
document.getElementById("react-props-transfer"));