import {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, Legend} from "recharts";
import {BarChartLegend} from "../constants/GraphLegends";

class DailyActivity extends Component {
    render() {
        return (
            <div className='relative bg-light rounded-md'>
                <div className='absolute text-bar-legend bar-chart-title left-8 top-6 font-normal'>Activité quotidienne</div>
                <BarChart
                    data={this.props.data}
                    width={800}
                    height={300}
                    margin={{top: 100}}
                >
                    <XAxis dataKey="day" tickLine={false}/>
                    <YAxis orientation="right" tickLine={false} axisLine={false}/>
                    <Bar dataKey="kilogram" fill="#2B2D30" barSize={7} radius={[3,3,0,0]} />
                    <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3,3,0,0]} maxBarSize={500}/>
                    <Legend iconType="circle" align="right" verticalAlign="top" iconSize={8} wrapperStyle={{top:24}}
                            formatter={(value) => {
                                return <span className="ml-2.5 mr-8 text-subdued text-bar-legend">{BarChartLegend[value]}</span>
                            }}
                    />
                </BarChart>
            </div>
        )
    }
}

export default DailyActivity