import {Component} from "react";
import Nutrition from "../components/Nutrition";
import DailyActivity from "../components/DailyActivity";
import AverageSessionsLine from "../components/AverageSessionsLine";
import RadarActivityType from "../components/RadarActivityType";
import ScoreRadial from "../components/ScoreRadial";
import PropTypes from "prop-types";
import Greeting from "../components/Greeting";
import Congratulations from "../components/Congratulations";

class Dashboard extends Component {
    render() {
        return(
            <div className="xl:mt-t-dboard xl:ml-l-dboard ml-8 mt-4 xl:w-dashboard w-dashboard-lg">
                <Greeting id={this.props.id} />
                <Congratulations goalAchieved={this.props.goalAchieved} />
                <div className="flex xl:flex-row flex-col xl:mt-t-main mt-7">
                    <div className="xl:w-8/12 h-1/2 flex flex-col">
                        <DailyActivity id={this.props.id}/>
                        <div className="flex xl:mt-10 mt-2 xl:h-subgraphs h-subgraphs-lg">
                            <AverageSessionsLine id={this.props.id}/>
                            <RadarActivityType rotation={5} id={this.props.id}/>
                            <ScoreRadial id={this.props.id}/>
                        </div>
                    </div>
                    <div className="xl:ml-8 flex flex-row xl:flex-col justify-between">
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