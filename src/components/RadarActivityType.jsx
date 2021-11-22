import {Component} from "react";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import PropTypes from "prop-types";
import {getUserActivityType, httpRequest} from "../../index";
import ErrorDisplay from "./ErrorDisplay";

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
        this.state = {
            isLoading : true,
            error: false,
            data : {}
        }
    }

    /**
     * Rotates the data in the chart
     * @param {Array.<{value : number, kind: number}>} data The data to be rotated (should match the data.data prop type)
     * @param {number} rotation How much each item in the data should be rotated - must be a positive integer
     * @returns {Object[]} The rotated array
     */
    rotateData(data, rotation) {
        const rotatedData = [...Array(data.length)]
        return rotatedData.map((item,index) => data[this.rotatedIndex(index, rotation, data.length)])
    }

    /**
     * Used to get the index after rotating the data
     * @param {number} index Index of the data in the starting array
     * @param {number} rotation How many indexes each item in the array should be rotated - must be a positive integer
     * @param {number} length Length of the starting array
     * @returns {number} The new index in the rotated array
     */
    rotatedIndex(index,rotation,length) {
        return (rotation + index)%length
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
        httpRequest(this.setState.bind(this),getUserActivityType,this.props.id)
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="w-1/3 h-full">
                    <div className="w-11/12 h-full m-auto bg-subdued animate-pulse rounded-md flex">
                        <div className="m-auto">
                            Chargement...
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div className="w-1/3 h-full">
                    <div className="w-11/12 h-full m-auto bg-subdued rounded-md flex">
                        <ErrorDisplay errorMsg={this.state.error} />
                    </div>
                </div>
            )
        }

        return (
            <div className="w-1/3">
                <ResponsiveContainer width="90%" aspect={1} className="m-auto">
                    <RadarChart
                        data={this.rotateData(this.props?.data?.data ?? this.state.data.data ,this.props.rotation)}
                        className="bg-radar rounded-md mr-7"
                        margin={{top:20,right:20,bottom:20,left:20}}
                    >
                        <Radar dataKey="value" fill="#FF0101F2" />
                        <PolarGrid radialLines={false}/>
                        <PolarAngleAxis dataKey="kind" axisLine={true}
                                        tickFormatter={tick => this.frenchLabels[tick]}
                                        stroke="white" fontSize='0.9vw' tickLine={false}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

RadarActivityType.propTypes = {
    /**
     * Used for a customized mock - used by storybook
     * If set data will not be acquired from the API or the mocked data file
     */
    data :  PropTypes.shape({
        userId : PropTypes.number.isRequired,
        data : PropTypes.arrayOf(PropTypes.shape({
            /**
             * The value of this specific performance
             */
            value : PropTypes.number,
            /**
             * The number identifying the kind of performance
             */
            kind : PropTypes.number
        }))
    }),
    /**
     * Specifies how to rotate the data in the chart - must be a positive integer
     */
    rotation : PropTypes.number.isRequired,
    /**
     * The unique id of the user - used to acquire to correct data from the API or the mocked data
     */
    id : PropTypes.number
}

RadarActivityType.defaultProps = {
    rotation : 5
}

export default RadarActivityType