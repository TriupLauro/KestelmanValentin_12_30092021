import {Component} from "react";
import {RadialBar, RadialBarChart, ResponsiveContainer} from "recharts";
import {numberBetweenZeroAndOne} from "../utils/utils";
import {acquireUserScore} from "../../index";
import ErrorDisplay from "./ErrorDisplay";
import PropTypes from "prop-types";

/**
 * The component used to display the daily score of the user as an arc
 * The score will also be displayed as a percentage
 * @component
 */
class ScoreRadial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            error : false,
            data : null
        }
    }

    componentDidMount() {
        acquireUserScore(this.props.id)
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
                <div className="w-1/3 h-full  flex">
                    <div className="w-11/12 ml-auto flex bg-subdued animate-pulse rounded-md">
                        <div className="m-auto">Chargement...</div>
                    </div>
                </div>
            )
        }

        if (this.state.error) {
            return (
                <div className="w-1/3 h-full flex">
                    <div className="w-11/12 ml-auto flex bg-subdued rounded-md">
                        <ErrorDisplay errorMsg={this.state.error} />
                    </div>
                </div>
            )
        }

        return (
            <div className="w-1/3">
                <div className="w-11/12 ml-auto relative">
                    <div className="absolute top-center-score left-7 text-black z-10 text-score-title">Score</div>
                    <div className="absolute z-20 top-1/2 left-1/2 m-auto text-center w-24 transform -translate-x-1/2 -translate-y-1/2 translate-x-score-percent">
                        <span className="text-score-percent font-bold">{this.props.data ? this.props.data * 100 : this.state.data * 100} %</span>
                        <br />
                        <span className="text-subdued text-score-percent">de votre objectif</span>
                    </div>
                    <div className="bg-white w-3/5 h-3/5 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"> </div>
                    <ResponsiveContainer width="100%" aspect={1}>
                        <RadialBarChart
                            data={[
                                {name:'max', value:1, fill:"#FFF"},
                                {name :'Score', value : this.props.data ?? this.state.data, fill:"#FF0000"}
                            ]}
                            width={258}
                            height={263}
                            startAngle={90}
                            endAngle={450}
                            barSize={10}
                            innerRadius="60%" outerRadius="80%"
                            className="rounded-md bg-light"
                        >
                            <RadialBar
                                dataKey="value"
                                legendType="line"
                            />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

ScoreRadial.propTypes = {
    /**
     * Daily score customized mock - used by storybook
     */
    data : numberBetweenZeroAndOne,
    id : PropTypes.number
}

export default ScoreRadial

