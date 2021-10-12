import {Component} from "react";
import Nutrition from "./Nutrition";
import DailyActivity from "./DailyActivity";
import AverageSessionsLine from "./AverageSessionsLine";
import RadarActivityType from "./RadarActivityType";
import ScoreRadial from "./ScoreRadial";
import PropTypes from "prop-types";
import Greeting from "./Greeting";
import Congratulations from "./Congratulations";

class Dashboard extends Component {
    render() {
        return(
            <div className="mt-t-dboard ml-l-dboard w-dashboard">
                <Greeting id={this.props.id} />
                <Congratulations goalAchieved={this.props.goalAchieved} />
                <div className="flex mt-t-main">
                    <div className="w-8/12 h-1/2 flex flex-col">
                        <DailyActivity id={this.props.id}/>
                        <div className="flex mt-10 h-subgraphs">
                            <AverageSessionsLine id={this.props.id}/>
                            <RadarActivityType rotation={5} id={this.props.id}/>
                            <ScoreRadial id={this.props.id}/>
                        </div>
                    </div>
                    <div className="ml-8 flex flex-col justify-between">
                        <Nutrition type="calories" id={this.props.id}/>
                        <Nutrition type ="proteins" id={this.props.id}/>
                        <Nutrition type="carbs" id={this.props.id}/>
                        <Nutrition type="lipids" id={this.props.id}/>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    id : PropTypes.number.isRequired,
    goalAchieved : PropTypes.bool
}

export default Dashboard