import {Component} from "react";
import TopNav from "./components/TopNav";
import VerticalBar from "./components/VerticalBar";
import Dashboard from "./components/Dashboard";
import PropTypes from "prop-types";
import {numberBetweenZeroAndOne} from "./utils/utils";

class App extends Component {
    render() {
        return (
            <>
                <TopNav />
                <div className="flex">
                    <VerticalBar />
                    {this.props.loading ?
                        <Dashboard loading={this.props.loading} />
                        :
                        <Dashboard
                            loading={this.props.loading}
                            firstName={this.props.mainData.userInfos.firstName}
                            nutritionData={this.props.mainData.keyData}
                            activityData={this.props.activityData.sessions}
                            averageSessionsData={this.props.averageSessionsData.sessions}
                            activityType={this.props.activityTypeData}
                            scoreData={this.props.scoreData}
                        />
                    }

                </div>
            </>
        )
    }
}



App.propTypes = {
    loading : PropTypes.bool.isRequired,

    mainData : PropTypes.shape({
        id : PropTypes.number.isRequired,
        userInfos : PropTypes.shape({
            firstName : PropTypes.string.isRequired,
            lastName : PropTypes.string,
            age : PropTypes.number
        }),
        keyData : PropTypes.shape({
            calorieCount: PropTypes.number.isRequired,
            proteinCount: PropTypes.number.isRequired,
            carbohydrateCount: PropTypes.number.isRequired,
            lipidCount: PropTypes.number.isRequired
        })
    }),

    activityData : PropTypes.shape({
        userId : PropTypes.number.isRequired,
        sessions : PropTypes.arrayOf(PropTypes.shape({
            day : PropTypes.string,
            kilogram : PropTypes.number,
            calories : PropTypes.number
        }))
    }),

    averageSessionsData : PropTypes.shape({
        userId : PropTypes.number.isRequired,
        sessions : PropTypes.arrayOf(PropTypes.shape({
            day : PropTypes.number,
            sessionLength : PropTypes.number
        }))
    }),

    activityTypeData : PropTypes.shape({
        userId : PropTypes.number.isRequired,
        data : PropTypes.arrayOf(PropTypes.shape({
            value : PropTypes.number,
            kind : PropTypes.number
        }))
    }),

    scoreData : numberBetweenZeroAndOne
}

export default App
