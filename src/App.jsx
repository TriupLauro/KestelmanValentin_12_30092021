import {Component} from "react";
import Dashboard from "./layouts/Dashboard";
import MainLayout from "./layouts/MainLayout";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId : parseInt(this.props.match.params.userId)
        }
    }

    render() {
        return (
            <MainLayout>
                <Dashboard id={this.state.userId} goalAchieved={true}/>
            </MainLayout>
        )
    }
}

export default App
