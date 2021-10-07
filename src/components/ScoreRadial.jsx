import {Component} from "react";
import {RadialBar, RadialBarChart} from "recharts";
import {numberBetweenZeroAndOne} from "../utils/utils";

/**
 * The component used to display the daily score of the user as an arc
 * The score will also be displayed as a percentage
 * @component
 */
class ScoreRadial extends Component {
    render() {
        return (
            <div className="relative">
                <div className="absolute top-5 left-7 text-black z-10">Score</div>
                <div className="absolute z-20 top-1/2 left-1/2 m-auto text-center w-24 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-score-percent font-bold">{this.props.data * 100} %</span>
                    <br />
                    <span className="text-subdued">de votre objectif</span>
                </div>
                <div className="bg-white w-3/5 h-3/5 absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"> </div>
                <RadialBarChart
                    data={[
                        {name:'max', value:1, fill:"#FFF"},
                        {name :'Score', value : this.props.data, fill:"#FF0000"}
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
            </div>
        )
    }
}

ScoreRadial.propTypes = {
    /**
     * The actual daily score
     */
    data : numberBetweenZeroAndOne
}

export default ScoreRadial

