import {Component} from "react";
import Nutrition from "./Nutrition";
import DailyActivity from "./DailyActivity";

class Dashboard extends Component {
    render() {
        return(
            <div className="mt-t-dboard ml-l-dboard">
                <div className="text-5xl">Bonjour <span className="text-highlight">{this.props.firstName}</span></div>
                <div className="mt-t-record text-lg">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                <div className="flex mt-t-main">
                    <div>
                        <DailyActivity data={this.props.activityData}/>
                        <div className="flex">
                            <div>Durée moyenne</div>
                            <div>Radar</div>
                            <div>Score</div>
                        </div>
                    </div>
                    <div>
                        <Nutrition type="calories" value={this.props.nutritionData.calorieCount}/>
                        <Nutrition type ="proteins" value={this.props.nutritionData.proteinCount}/>
                        <Nutrition type="carbs" value={this.props.nutritionData.carbohydrateCount}/>
                        <Nutrition type="lipids" value={this.props.nutritionData.lipidCount}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard