// import PropTypes from 'prop-types';

class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="student-properties">
                <div>Student ID: {this.props.id}</div>
                <div>Name: {this.props.name}</div>
                <div>Major: {this.props.major}</div>
                <div>Campus: {this.props.campus}</div>
                <div>Enrolled: {this.props.enrolled ? "yes" : "no"}</div>
                <div>Courses: {this.props.courses}</div>
            </div>
        );
    }
}

Student.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    major: PropTypes.string.isRequired,
    enrolled: PropTypes.bool,
    campus: PropTypes.oneOf(["North", "South"]),

    courses(prop, propName) {
        const propValue = prop[propName];
        if (propValue == "Physiology" || propValue == "Psychology") {
            throw Error("This course is not offered here.");
        }
    }
};

Student.defaultProps = {
    id: Math.floor(Math.random() * 100000),
    enrolled: true
};

ReactDOM.render(<Student id={9846132} name="TV VK" major="Computer Science" enrolled={true} campus="North" courses={["Science", "Commerce", "Arts"]} />, document.getElementById("validating-props"));