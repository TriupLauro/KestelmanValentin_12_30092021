import {Component} from "react";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart} from "recharts";
import PropTypes from "prop-types";

class RadarActivityType extends Component {
    constructor(props) {
        super(props);
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
            <div>
                <RadarChart
                    width={258}
                    height={263}
                    data={this.props.data.data}
                    className="bg-radar rounded-md mr-7"
                    margin={{top:20,right:20,bottom:20,left:20}}
                >
                    <Radar dataKey="value" fill="#FF0101F2"/>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="kind"
                                    tickFormatter={tick => this.frenchLabels[tick]}
                                    stroke="white" fontSize={12} tickLine={false}
                    />
                </RadarChart>
            </div>
        )
    }
}

RadarActivityType.propTypes = {
    data :  PropTypes.shape({
        userId : PropTypes.number.isRequired,
        data : PropTypes.arrayOf(PropTypes.shape({
            value : PropTypes.number,
            kind : PropTypes.number
        }))
    })
}

export default RadarActivityType