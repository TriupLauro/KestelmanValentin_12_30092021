import {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts";
import {BarChartLegend} from "../constants/GraphLegends";
import PropTypes from "prop-types";

/**
 * Component for showing the daily activity of the user as a Bar Chart.
 * The data displayed is the weight of the user and the calories burned day after day.
 *
 * @component
 */
class DailyActivity extends Component {
    render() {
        return (
            <div className='relative bg-light rounded-md h-graphs mb-5'>
                <div className='absolute text-bar-legend bar-chart-title left-8 top-6 font-normal'>Activité quotidienne</div>
                <ResponsiveContainer width="100%" aspect={2.6}>
                    <BarChart
                        data={this.props.data}
                        margin={{top: 90}}
                    >
                        <Tooltip
                            content={<DailyActivityTooltip />}
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
                </ResponsiveContainer>
            </div>
        )
    }
}

/**
 * The component used as a custom tooltip for the daily activity chart.
 * @component
 */
class DailyActivityTooltip extends Component {
    render() {
        return(
            this.props.active &&
            <ul className="bg-daily-tooltip px-2 text-center">
                <li className="text-white text-xs py-4">{this.props.payload[0]?.payload.kilogram} kg</li>
                <li className="text-white text-xs py-4">{this.props.payload[0]?.payload.calories} Kcal</li>
            </ul>
        )
    }
}

DailyActivity.propTypes = {
    data : PropTypes.arrayOf(PropTypes.shape({
        /**
         * The day of the measurement
         */
        day : PropTypes.string,
        /**
         * The weight of the user on said day
         */
        kilogram : PropTypes.number,
        /**
         * The calories burned by the user on said day
         */
        calories : PropTypes.number
    }))
}


DailyActivity.defaultProps = {
    sessions : [
        {
            day: '2020-07-01',
            kilogram: 80,
            calories: 240
        },{
            day: '2020-07-02',
            kilogram: 79,
            calories: 320
        }
    ]
}

export default DailyActivity