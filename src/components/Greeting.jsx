import {Component} from "react";
import {acquireMainUserData} from "../../index";
import ErrorDisplay from "./ErrorDisplay";

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
        acquireMainUserData(this.props.id)
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

export default Greeting