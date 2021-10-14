import {Component} from "react";

/**
 * Component used as a custom tooltip for the sessions line chart.
 * Only displays the hovered point sessions length in minutes
 * @component
 */
class CustomContentAverage extends Component {
    render() {
        if (!this.props.active) return null
        return(
            <p className="bg-white text-xs p-2">
                {this.props.payload[0]?.payload.sessionLength} min
            </p>
        )
    }
}

export default CustomContentAverage