import {Component} from "react";
import {Rectangle} from "recharts";

/**
 * Component used as a custom cursor for the sessions line chart.
 * Darken starting at the hovered point until the end (right) of the chart.
 * @component
 */
class CustomCursor extends Component {
    render() {
        const startX = this.props.points[0]?.x
        /**
         * Remove the top bottom left and right positioning to cover the whole chart
         */
        const height = this.props.height + this.props.top + this.props.bottom
        const restWidth = this.props.width - startX + this.props.left + this.props.right
        return(
            <svg>
                <Rectangle x={startX} y={0} height={height} width={restWidth} fill="black" opacity={0.2} radius={[0,6,6,0]}/>
            </svg>
        )
    }
}

export default CustomCursor