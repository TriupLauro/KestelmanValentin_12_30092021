import {Component} from "react";
import {Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import PropTypes from "prop-types";

/**
 * Component for displaying the length of the average physical activity session of the user as a line chart.
 * @component
 */
class AverageSessionsLine extends Component {
    render() {
        return (
            <div className="relative w-1/3">
                <div className="absolute top-1/10 left-1/10 z-10 w-36 text-white opacity-50">Durée moyenne des sessions</div>
                <ResponsiveContainer width="90%" aspect={1}>
                    <LineChart
                        data={this.props.data}
                        border={5}
                        className="bg-highlight rounded-md mr-7"
                        margin={{top:75, left:15, right:15, bottom: 10}}
                    >
                        <XAxis dataKey="day"
                               tickLine={false}
                               axisLine={false}
                               stroke="#FFFFFF"
                        />
                        <Line dataKey="sessionLength" stroke="#FFFFFF"
                              dot={false}
                              type="natural"
                        />
                        <Tooltip cursor={<CustomCursor />} content={<CustomContentAverage />}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

/**
 * Component used as a custom cursor for the sessions line chart.
 * Darken starting at the hovered point until the end (right) of the chart.
 * Also add a second circle around the hovered point.
 * @component
 */
class CustomCursor extends Component {
    render() {
        const startX = this.props.points[0]?.x
        const startY = this.props.points[1].y - (this.props.payload[0].payload.sessionLength / 60) * (this.props.points[1].y - this.props.points[0].y)
        const radius = 10
        const restWidth = 258 - startX
        return(
            <svg>
                <Rectangle x={startX} y={0} height={263} width={restWidth} fill="black" opacity={0.2} radius={[0,6,6,0]}/>
                <circle cx={startX} cy={startY} r={radius} fill="white" opacity={0.2} />
            </svg>
        )
    }
}

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

AverageSessionsLine.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        /**
         * The day of the measurement
         */
        day : PropTypes.number,
        /**
         * The average length session for the said day
         */
        sessionLength : PropTypes.number
    }))
}

AverageSessionsLine.defaultProps = {
    sessions: [
        {
            day: 1,
            sessionLength: 30
        },
        {
            day: 2,
            sessionLength: 40
        },
        {
            day: 3,
            sessionLength: 50
        }
    ]
}

export default AverageSessionsLine