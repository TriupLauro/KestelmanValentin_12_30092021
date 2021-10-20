import {Component} from "react";
import {BarChart, Bar, XAxis, YAxis, Legend, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts";
import {BarChartLegend} from "../constants/GraphLegends";
import DailyActivityTooltip from "../custom chart components/DailyActivityTooltip";
import PropTypes from "prop-types";
import {getUserActivity} from "../../index";
import ErrorDisplay from "./ErrorDisplay";

/**
 * Component for showing the daily activity of the user as a Bar Chart.
 * The data displayed is the weight of the user and the calories burned day after day.
 *
 * @component
 */
class DailyActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            error : false,
            data : []
        }
    }

    componentDidMount() {
        /**
         * Don't call the API/mocks if the data is passed through props
         */
        if (this.props.data) {
            this.setState({isLoading : false, data : this.props.data})
            return null
        }
        /**
         * Load the data (from mocks or API call depending on callTheAPI in config.js)
         */
        getUserActivity(this.props.id)
            .then(responseData => {
                this.setState({isLoading : false, data : responseData.data.data.sessions})
            })
            /**
             * Tell the component to display an error
             */
            .catch(error => {
                /**
                 * In case the data couldn't be retrieved : wrong User Id
                 */
                if (error.response) {
                    this.setState({isLoading: false, error: error.response.data})
                    /**
                     * In case we don't even get a response from the mock/api
                     */
                }else{
                    this.setState({isLoading: false, error: 'Is the API running ?'})
                }
        })
    }

    render() {
        if (this.state.error) {
            return (
                <div className='relative bg-light rounded-md h-graphs flex'>
                    <ErrorDisplay errorMsg={this.state.error} />
                </div>
            )
        }

        if (this.state.isLoading) {
            return (
                <div className='relative bg-subdued rounded-md h-graphs animate-pulse flex'>
                    <div className='m-auto'>Chargement...</div>
                </div>
            )
        }

        return (
            <div className='relative'>
                <div className='absolute text-bar-legend bar-chart-title left-8 top-6 font-normal z-10'>Activité quotidienne</div>
                <ResponsiveContainer width="100%" aspect={2.6}>
                    <BarChart
                        data={this.props.data ?? this.state.data}
                        margin={{top: 90}}
                        className='bg-light rounded-md'
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



DailyActivity.propTypes = {
    /**
     * The data for a customized mock - used by storybook
     * If set the data will not be acquired from the API or the mocked data file
     */
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
    })),
    /**
     * The unique id of the user - used to acquire to correct data from the API or the mocked data
     */
    id : PropTypes.number.isRequired
}

export default DailyActivity