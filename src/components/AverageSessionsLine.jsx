import {Component} from "react";
import {Line, LineChart, Rectangle, Tooltip, XAxis} from "recharts";
import PropTypes from "prop-types";

class AverageSessionsLine extends Component {
    render() {
        return (
            <div className="relative">
                <div className="absolute top-7 left-8 z-10 w-36 text-white opacity-50">Durée moyenne des sessions</div>
                <LineChart
                    data={this.props.data}
                    width={258}
                    height={263}
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
            </div>
        )
    }
}

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
        day : PropTypes.number,
        sessionLength : PropTypes.number
    }))
}

export default AverageSessionsLine