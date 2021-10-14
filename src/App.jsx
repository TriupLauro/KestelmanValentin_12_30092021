import {Component} from "react";
import TopNav from "./layouts/TopNav";
import VerticalBar from "./layouts/VerticalBar";
import Dashboard from "./layouts/Dashboard";
import PropTypes from "prop-types";

class App extends Component {
    render() {
        return (
            <>
                <TopNav />
                <div className="flex">
                    <VerticalBar />
                    <Dashboard id={this.props.id} goalAchieved={this.props.goalAchieved}/>
                </div>
            </>
        )
    }
}



App.propTypes = {
    /**
     * The id which user we gonna retrieve the data (only 12 or 18)
     */
    id : PropTypes.number.isRequired,
    /**
     * User's yesterday goal where achieved ?
     */
    goalAchieved : PropTypes.bool
}

export default App
