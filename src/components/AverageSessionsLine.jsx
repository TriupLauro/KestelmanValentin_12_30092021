import {Component} from "react";
import {Line, LineChart, XAxis} from "recharts";

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
                    className="bg-highlight rounded-md"
                    margin={{top:75, left:15, right:15}}
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
                </LineChart>
            </div>
        )
    }
}

export default AverageSessionsLine