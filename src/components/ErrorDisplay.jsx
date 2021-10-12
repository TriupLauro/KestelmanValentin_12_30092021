import {Component} from "react";
import PropTypes from "prop-types";

/**
 * The component used to display an error when the API call fails
 * @component
 */
class ErrorDisplay extends Component {
    render() {
        return (
            <div className="m-auto">Une erreur est survenue {this.props.errorMsg && `: ${this.props.errorMsg}`}</div>
        )
    }
}

ErrorDisplay.propTypes = {
    /**
     * The message to be displayed
     */
    errorMsg : PropTypes.string
}

export default ErrorDisplay