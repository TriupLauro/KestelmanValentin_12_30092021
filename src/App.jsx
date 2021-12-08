import {Component} from "react";
import Dashboard from "./layouts/Dashboard";
import MainLayout from "./layouts/MainLayout";
import {getUserActivityType, httpRequest} from "../index";
import {Redirect} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId : parseInt(this.props.match.params.userId),
            isLoading : true,
            error : false
        }
    }

    componentDidMount() {
        httpRequest(this.setState.bind(this),getUserActivityType,this.state.userId)
    }

    render() {
        if (this.state.isLoading) {
            return (
                <MainLayout>
                    <div className="m-auto animate-pulse text-2xl text-bold">Données en chargement</div>
                </MainLayout>
            )
        }

        if (this.state.error) return <Redirect to="/erreur" />

        return (
            <MainLayout>
                <Dashboard id={this.state.userId} goalAchieved={true}/>
            </MainLayout>
        )
    }
}

export default App
