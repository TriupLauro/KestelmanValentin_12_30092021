import {Component} from "react";

/**
 * Component used as a custom active dot for the line chart
 * Display a circle with a transparent halo when the tooltip is active
 * @component
 */
class AverageLineCustomActiveDot extends Component {
    render() {
        return (
            <svg>
                <circle
                    cx={this.props.cx}
                    cy={this.props.cy}
                    r={5}
                    fill='#fff'
                />
                <circle
                    cx={this.props.cx}
                    cy={this.props.cy}
                    r={10}
                    fill='#fff'
                    opacity={0.25}
                />
            </svg>
        )
    }
}

export default AverageLineCustomActiveDot