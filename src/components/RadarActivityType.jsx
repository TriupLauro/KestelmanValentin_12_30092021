import {Component} from "react";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import PropTypes from "prop-types";

/**
 * Component used to display the type of physical activity of the user as a radar chart.
 * @component
 */
class RadarActivityType extends Component {
    constructor(props) {
        super(props);
        /**
         * The french name for the different kind of performances
         * @type {{"1": string, "2": string, "3": string, "4": string, "5": string, "6": string}}
         */
        this.frenchLabels = {
            1 : 'Cardio',
            2 : 'Energie',
            3 : 'Endurance',
            4 : 'Force',
            5 : 'Vitesse',
            6 : 'Intensité'
        }
    }

    render() {
        return (
            <div className="w-1/3">
                <ResponsiveContainer width="90%" aspect={1} className="m-auto">
                    <RadarChart
                        width={258}
                        height={263}
                        data={this.props.data.data}
                        className="bg-radar rounded-md mr-7"
                        margin={{top:20,right:20,bottom:20,left:20}}
                    >
                        <Radar dataKey="value" fill="#FF0101F2" />
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" axisLine={true}
                                        tickFormatter={tick => this.frenchLabels[tick]}
                                        stroke="white" fontSize='0.64vw' tickLine={false}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

RadarActivityType.propTypes = {
    data :  PropTypes.shape({
        userId : PropTypes.number.isRequired,
        data : PropTypes.arrayOf(PropTypes.shape({
            /**
             * The value of this specific effort
             */
            value : PropTypes.number,
            /**
             * The number of the kind of performance
             */
            kind : PropTypes.number
        }))
    })
}

export default RadarActivityType