import {Component} from "react";
import PropTypes from "prop-types";

/**
 * This component appears only if yesterday's goal was achieved
 * --Not actually linked to any kind of data from the API--
 * 
 * @component
 */
class Congratulations extends Component {
    render() {
        return(
            this.props.goalAchieved &&
            <div className="mt-t-record text-lg">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        )
    }
}

Congratulations.propTypes = {
    /**
     * This component is only displayed if set to true
     */
    goalAchieved : PropTypes.bool
}

export default Congratulations