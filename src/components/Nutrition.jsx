import {Component} from "react";
import {NutritionDetails} from "../constants/NutritionDetails";
import PropTypes from "prop-types";
import {getUserKeyData} from "../../index";
import ErrorDisplay from "./ErrorDisplay";

/**
 * Component for showing the nutrition details of the user
 *
 * @component
 */
class Nutrition extends Component {
    constructor(props) {
        super(props);
        const valueHolder = NutritionDetails[this.props.type]
        this.name = valueHolder.fr
        this.unit = valueHolder.unit
        this.bgc = valueHolder.bgc
        this.key = valueHolder.key
        this.icon = <valueHolder.icon className="m-auto"/>
        this.state = {
            isLoading : true,
            error : false,
            value : null
        }
    }

    componentDidMount() {
        /**
         * Don't call the API/mocks if the data is passed through props
         */
        if (this.props.value) {
            this.setState({isLoading : false, data : this.props.value})
            return null
        }
        /**
         * Load the data (from mocks or API call depending on callTheAPI in config.js)
         */
        getUserKeyData(this.props.id).then(responseData => {
            this.setState({isLoading : false, data : responseData.data.data[this.key]})
        })
            /**
             * Tell the component to display an error
             */
            .catch(error => {
                console.log(error)
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
                <div className="flex w-nutri-bg h-nutri-bg bg-light rounded-md items-center justify-around animate-pulse">
                    Chargement...
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div className="flex w-nutri-bg h-nutri-bg bg-light rounded-md items-center justify-around">
                    <ErrorDisplay errorMsg={this.state.error} />
                </div>
            )
        }

        return (
            <div className="flex w-nutri-bg h-nutri-bg bg-light rounded-md items-center justify-around">
                <div className={`bg-${this.bgc} w-nutri-icon h-nutri-icon flex rounded-md ml-7`}>
                    {this.icon}
                </div>
                <div className="mr-auto ml-6">
                    <div className="text-nutri-value font-bold">{this.props.value ?? this.state.data}{this.unit}</div>
                    <div className="text-subdued text-sm font-medium">{this.name}</div>
                </div>
            </div>
        )
    }
}

Nutrition.propTypes = {
    /**
     * The unique id of the user - used to acquire to correct data from the API or the mocked data
     */
    id : PropTypes.number,
    /**
     * The type of displayed nutrition data
     */
    type : PropTypes.oneOf(["calories","proteins","carbs","lipids"]).isRequired,
    /**
     * The amount ingested by the user - only used for storybook
     * If set, the data will not be acquired from the API or the mocked data file
     */
    value : PropTypes.number
}

export default Nutrition