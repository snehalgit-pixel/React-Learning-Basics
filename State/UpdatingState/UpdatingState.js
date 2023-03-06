class DetailsBox extends React.Component {
    state = {
        name: "John",
        color: "darkolive",
        backgroundColor: "beige",
        subject: "Psychology"
    };

    pickRandomName = () => {
        var names = ["Alice", "Bob", "Charlie", "Darwin", "Elvis", "Flora"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        this.setState({
            name: randomName
        });
    }

    pickRandomColor = () => {
        var colors = ["darkred", "brown", "magenta", "darkgreen", "darkblue", "red", "darkmagenta"];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({
            color: randomColor
        });
    }

    pickRandomBackgroundColor = () => {
        var backgroundColors = ["bisque", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightseagreen", "lightsalmon", "lightpink", "lightgrey", "lightgray"];
        var randomBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
        this.setState({
            backgroundColor: randomBackgroundColor
        });
    }

    pickRandomSubject = () => {
        var subjects = ["Science", "Commerce", "Arts", "Philosophy", "Psychology", "DjangoDB"];
        var randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        this.setState({
            subject: randomSubject
        });
    }

    render() {
        const style = {
            color: this.state.color,
            backgroundColor: this.state.backgroundColor
        };

        return (
            <div>
                <div className="details" style={style}>
                    Name: {this.state.name} <br />
                    Subject: {this.state.subject}
                </div>
                <button className="button" onClick={this.pickRandomName}>Change Student Name</button>
                <button className="button" onClick={this.pickRandomColor}>Change Color</button>
                <button className="button" onClick={this.pickRandomBackgroundColor}>Change Background Color</button>
                <button className="button" onClick={this.pickRandomSubject}>Change Subject</button>
            </div>
        );
    }
}

ReactDOM.render(<DetailsBox />, document.getElementById("react-update-state"));