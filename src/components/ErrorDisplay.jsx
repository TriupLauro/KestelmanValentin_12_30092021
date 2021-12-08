import {Component} from "react";
import PropTypes from "prop-types";

/**
 * The component used to display an error when the API call fails
 * @component
 */
class ErrorDisplay extends Component {
    render() {
        return (
            <div>Une erreur est survenue : {this.props.errorMsg}</div>
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