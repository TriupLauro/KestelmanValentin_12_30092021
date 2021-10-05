import {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid} from "recharts";
import {BarChartLegend} from "../constants/GraphLegends";
import PropTypes from "prop-types";

class DailyActivity extends Component {
    render() {
        return (
            <div className='relative bg-light rounded-md'>
                <div className='absolute text-bar-legend bar-chart-title left-8 top-6 font-normal'>Activité quotidienne</div>
                <BarChart
                    data={this.props.data}
                    width={800}
                    height={300}
                    margin={{top: 90}}
                >
                    <Tooltip
                        labelStyle={{display:  'none'}}
                        contentStyle={{background : '#E60000'}}
                        itemStyle={{color : 'white', fontSize : 12}}
                        formatter={(value, name) => `${value}${units[name]}`}
                    />
                    <CartesianGrid vertical={false} strokeDasharray={4}/>
                    <XAxis dataKey="day" tickLine={false}/>
                    <YAxis yAxisId="kilogram" orientation="right" tickLine={false} axisLine={false} dataKey="kilogram"
                           domain={['dataMin - 1', 'dataMax']} tickCount={3}/>
                    <YAxis yAxisId="calories" orientation="right" tickLine={false} axisLine={false} dataKey="calories" hide={true} />
                    <Bar dataKey="kilogram" fill="#2B2D30" barSize={7} radius={[3,3,0,0]} yAxisId="kilogram" />
                    <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[3,3,0,0]} yAxisId="calories" />
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

const units = {
    kilogram : 'kg',
    calories : 'kcal'
}

DailyActivity.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        day : PropTypes.string,
        kilogram : PropTypes.number,
        calories : PropTypes.number
    }))
}

export default DailyActivity