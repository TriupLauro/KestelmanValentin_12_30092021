import {Component} from "react";
import PropTypes from "prop-types";

class Congratulations extends Component {
    render() {
        return(
            this.props.goalAchieved &&
            <div className="mt-t-record text-lg">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        )
    }
}

Congratulations.propTypes = {
    goalAchieved : PropTypes.bool
}

export default Congratulations