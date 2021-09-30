import {Component} from "react";
import Nutrition from "./Nutrition";

class Dashboard extends Component {
    render() {
        return(
            <div className="mt-t-dboard ml-l-dboard">
                <div className="text-5xl">Bonjour <span className="text-highlight">Thomas</span></div>
                <div className="mt-t-record text-lg">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                <div className="flex mt-t-main">
                    <div>
                        <div>
                            Activité quotidienne
                        </div>
                        <div className="flex">
                            <div>Durée moyenne</div>
                            <div>Radar</div>
                            <div>Score</div>
                        </div>
                    </div>
                    <div>
                        <Nutrition type="calories" value="1,930"/>
                        <Nutrition type ="proteins" value="155"/>
                        <Nutrition type="carbs" value="290"/>
                        <Nutrition type="lipids" value="50"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard