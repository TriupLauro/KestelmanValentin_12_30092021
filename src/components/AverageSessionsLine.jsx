import {Component} from "react";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import PropTypes from "prop-types";
import {getUserAverageSessions} from "../../index";
import ErrorDisplay from "./ErrorDisplay";
import CustomCursor from "../custom chart components/AverageLineCustomCursor";
import CustomContentAverage from "../custom chart components/CustomContentAverage";
import AverageLineCustomActiveDot from "../custom chart components/AverageLineCustomActiveDot";

/**
 * Component for displaying the length of the average physical activity session of the user as a line chart.
 * @component
 */
class AverageSessionsLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            error : false,
            data : {}
        }
    }

    componentDidMount() {
        /**
         * Don't call the API/mocks if the data is passed through props
         */
        if (this.props.data) {
            this.setState({isLoading: false, data : this.props.data})
            return null
        }
        /**
         * Load the data (from mocks or API call depending on callTheAPI in config.js)
         */
        getUserAverageSessions(this.props.id)
            .then(responseData => {
                this.setState({isLoading : false, data : responseData.data.data})
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
        if (this.state.isLoading) {
            return (
                <div className="w-1/3 h-full">
                    <div className="w-11/12 bg-subdued animate-pulse rounded-md h-full flex">
                        <div className="m-auto">Chargement...</div>
                    </div>
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div className="w-1/3 h-full">
                    <div className="w-11/12 bg-subdued rounded-md h-full flex">
                        <ErrorDisplay errorMsg={this.state.error} />
                    </div>
                </div>
            )
        }

        return (
            <div className="relative w-1/3">
                <div className="absolute top-1/10 left-1/10 z-10 w-36 text-white opacity-50">Durée moyenne des sessions</div>
                <ResponsiveContainer width="90%" aspect={1} minHeight={300}>
                    <LineChart
                        data={this.props.data ?? this.state.data.sessions}
                        border={5}
                        className="bg-highlight rounded-md"
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
                              activeDot={<AverageLineCustomActiveDot />}
                        />
                        <Tooltip cursor={<CustomCursor />} content={<CustomContentAverage />}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

AverageSessionsLine.propTypes = {
    /**
     * Customized mock data - used by the storybook
     * If set, data will not be acquired through the API or the mocked file data
     */
    data : PropTypes.arrayOf(PropTypes.shape({
        /**
         * The day of the measurement
         */
        day : PropTypes.number,
        /**
         * The average length session for the said day
         */
        sessionLength : PropTypes.number
    })),
    /**
     * The unique id of the user - used to acquire to correct data from the API or the mocked data
     */
    id : PropTypes.number.isRequired
}

export default AverageSessionsLine