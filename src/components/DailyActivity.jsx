import {Component} from "react";
import {BarChart, Bar, XAxis, YAxis} from "recharts";

class DailyActivity extends Component {
    render() {
        return (
            <BarChart
                data={this.props.data}
                width={835}
                height={320}
            >
                <XAxis dataKey="day" />
                <YAxis />
                <Bar dataKey="kilogram" fill="#2B2D30" barSize={7} radius={[3,3,0,0]} />
                <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3,3,0,0]} />
            </BarChart>
        )
    }
}

export default DailyActivity