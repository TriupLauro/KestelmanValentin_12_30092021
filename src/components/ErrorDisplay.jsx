import {Component} from "react";

class ErrorDisplay extends Component {
    render() {
        return (
            <div>Une erreur est survenue {this.props.errorMsg && `: ${this.props.errorMsg}`}</div>
        )
    }
}

export default ErrorDisplay