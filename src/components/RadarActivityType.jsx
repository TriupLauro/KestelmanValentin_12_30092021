import {Component} from "react";
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import PropTypes from "prop-types";
import {acquireUserActivityType} from "../../index";
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
     * @param {number} rotation How much each item in the data should be rotated
     * @returns {Object[]} The rotated array
     */
    rotateData(data, rotation) {
        const rotatedData = [...Array(data.length)]
        return rotatedData.map((item,index) => data[this.rotatedIndex(index, rotation, data.length)])
    }

    /**
     * Used to get the index after rotating the data
     * @param {number} index Index of the data in the starting array
     * @param {number} rotation How many indexes each item in the array should be rotated
     * @param {number} length Length of the starting array
     * @returns {number} The new index in the rotated array
     */
    rotatedIndex(index,rotation,length) {
        return (rotation + index)%length
    }

    componentDidMount() {
        acquireUserActivityType(this.props.id)
            .then(responseData => {
                this.setState({isLoading : false, data : responseData.data.data})
            })
            .catch(error => {
                if (error.response) {
                    this.setState({isLoading: false, error: error.response.data})
                }else{
                    this.setState({isLoading: false, error: 'Is the API running ?'})
                }
            })
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
                        width={258}
                        height={263}
                        data={this.rotateData(this.props?.data?.data ?? this.state.data.data ,this.props.rotation)}
                        className="bg-radar rounded-md mr-7"
                        margin={{top:20,right:20,bottom:20,left:20}}
                    >
                        <Radar dataKey="value" fill="#FF0101F2" />
                        <PolarGrid />
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
    rotation : PropTypes.number.isRequired,
    id : PropTypes.number
}

RadarActivityType.defaultProps = {
    rotation : 5
}

export default RadarActivityType