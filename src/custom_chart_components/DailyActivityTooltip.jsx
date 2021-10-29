import {Component} from "react";

/**
 * The component used as a custom tooltip for the daily activity chart.
 * @component
 */
class DailyActivityTooltip extends Component {
    render() {
        return(
            this.props.active &&
            <ul className="bg-daily-tooltip px-2 text-center">
                <li className="text-white text-xs py-4">{this.props.payload[0]?.payload.kilogram} kg</li>
                <li className="text-white text-xs py-4">{this.props.payload[0]?.payload.calories} Kcal</li>
            </ul>
        )
    }
}

export default DailyActivityTooltip