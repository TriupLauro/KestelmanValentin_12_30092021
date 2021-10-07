import {Component} from "react";
import Nutrition from "./Nutrition";
import DailyActivity from "./DailyActivity";
import AverageSessionsLine from "./AverageSessionsLine";
import RadarActivityType from "./RadarActivityType";
import ScoreRadial from "./ScoreRadial";
import PropTypes from "prop-types";
import {numberBetweenZeroAndOne} from "../utils/utils";
import LoadingSkeleton from "./LoadingSkeleton";

class Dashboard extends Component {
    render() {
        return(
            this.props.loading ?
                <LoadingSkeleton />
                :
                <div className="mt-t-dboard ml-l-dboard">
                    <div className="text-5xl">Bonjour <span className="text-highlight">{this.props.firstName}</span></div>
                    <div className="mt-t-record text-lg">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                    <div className="flex mt-t-main">
                        <div>
                            <DailyActivity data={this.props.activityData}/>
                            <div className="flex mt-7">
                                <AverageSessionsLine data={this.props.averageSessionsData} />
                                <RadarActivityType data={this.props.activityType} />
                                <ScoreRadial data={this.props.scoreData} />
                            </div>
                        </div>
                        <div className="ml-8">
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

Dashboard.propTypes = {
    loading : PropTypes.bool.isRequired,

    firstName : PropTypes.string,

    activityData : PropTypes.arrayOf(PropTypes.shape({
        day : PropTypes.string,
        kilogram : PropTypes.number,
        calories : PropTypes.number
    })),

    averageSessionsData : PropTypes.arrayOf(PropTypes.shape({
        day : PropTypes.number,
        sessionLength : PropTypes.number
    })),

    activityType : PropTypes.shape({
        userId : PropTypes.number.isRequired,
        data : PropTypes.arrayOf(PropTypes.shape({
            value : PropTypes.number,
            kind : PropTypes.number
        }))
    }),

    scoreData : numberBetweenZeroAndOne,

    nutritionData : PropTypes.shape({
        calorieCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired
    })
}

export default Dashboard