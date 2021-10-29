import {Component} from "react";
import {getMainUserData} from "../../index";
import ErrorDisplay from "./ErrorDisplay";
import PropTypes from "prop-types";

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            error : false,
            name : ''
        }
    }

    componentDidMount() {
        /**
         * Load the data (from mocks or API call depending on callTheAPI in config.js)
         */
        getMainUserData(this.props.id)
            .then(responseData => {
                this.setState({isLoading : false, data : responseData})
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
                <div className="text-5xl animate-pulse">
                    Bonjour
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div className="text-5xl">
                    <ErrorDisplay errorMsg={this.state.error} />
                </div>
            )
        }

        return (
            <div className="text-5xl">
                Bonjour <span className="text-highlight">{this.state.data.userInfos.firstName}</span>
            </div>
        )
    }
}

Greeting.propTypes = {
    /**
     * The unique id of the user - used to acquire to correct data from the API or the mocked data
     */
    id : PropTypes.number.isRequired
}

export default Greeting