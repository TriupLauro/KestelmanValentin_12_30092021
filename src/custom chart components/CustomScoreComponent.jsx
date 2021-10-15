import {Component} from "react";

/**
 * Custom component used to place round end circle to the ScoreRadial
 * Must be a child of the radial bar chart - in the Customized recharts component
 * The target value "score" must be the second element in the parent's data array
 * @component
 */
class CustomScoreComponent extends Component {
    render() {
        const valueHolder = this.props.formatedGraphicalItems[0].props.data[1]
        const radius = (valueHolder.innerRadius + valueHolder.outerRadius) / 2

        /**
         * Using trigonometry to get the X,Y coordinates given
         * the center (cx, cy)
         * the radius
         * the starting and ending angles - converted to radians
         * cos(alpha) * radius gives us the X coordinate
         * sin(alpha) * radius gives us the Y coordinate (must be passed to negative since O is on top)
         * Adding these two value to the center coordinates gives the result we want
         */
        const startAngleRadian = valueHolder.startAngle * Math.PI / 180
        const startX = valueHolder.cx + radius * Math.cos(startAngleRadian)
        const startY = valueHolder.cy - radius * Math.sin(startAngleRadian)

        const endAngleRadian = valueHolder.endAngle * Math.PI / 180
        const endX = valueHolder.cx + radius * Math.cos(endAngleRadian)
        const endY = valueHolder.cy - radius * Math.sin(endAngleRadian)

        return(
            <svg>
                <circle cx={startX} cy={startY} r={5} fill={'#F00'}/>
                <circle cx={endX} cy={endY} r={5} fill={'#F00'}/>
            </svg>
        )
    }
}

export default CustomScoreComponent