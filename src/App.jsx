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
    id : PropTypes.number.isRequired,
    goalAchieved : PropTypes.bool
}

export default App
