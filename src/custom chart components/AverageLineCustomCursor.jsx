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
        const restWidth = 500 - startX
        return(
            <svg>
                <Rectangle x={startX} y={0} height={500} width={restWidth} fill="black" opacity={0.2} radius={[0,6,6,0]}/>
            </svg>
        )
    }
}

export default CustomCursor