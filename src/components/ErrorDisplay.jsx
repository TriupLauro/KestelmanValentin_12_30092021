import {Component} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

/**
 * The component used to display an error when the API call fails
 * @component
 */
class ErrorDisplay extends Component {
    render() {
        return (
            <Redirect to="/erreur" />
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