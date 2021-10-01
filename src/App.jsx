import {Component} from "react";
import TopNav from "./components/TopNav";
import VerticalBar from "./components/VerticalBar";
import Dashboard from "./components/Dashboard";

class App extends Component {
    render() {
        return (
            <>
                <TopNav />
                <div className="flex">
                    <VerticalBar />
                    <Dashboard 
                        firstName={this.props.mainData.userInfos.firstName}
                        nutritionData={this.props.mainData.keyData}
                        activityData={this.props.activityData.sessions}
                    />
                </div>
            </>
        )
    }
}

export default App
