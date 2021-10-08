import {Component} from "react";
import {NutritionDetails} from "../constants/NutritionDetails";
import PropTypes from "prop-types";

/**
 * Component for showing the nutrition details of the user
 *
 * @component
 */
class Nutrition extends Component {
    constructor(props) {
        super(props);
        const valueHolder = NutritionDetails[this.props.type]
        this.name = valueHolder.fr
        this.unit = valueHolder.unit
        this.bgc = valueHolder.bgc
        this.icon = <valueHolder.icon className="m-auto"/>
    }

    render() {
        return (
            <div className="flex w-nutri-bg h-nutri-bg bg-light rounded-md items-center justify-around">
                <div className={`bg-${this.bgc} w-nutri-icon h-nutri-icon flex rounded-md ml-7`}>
                    {this.icon}
                </div>
                <div className="mr-auto ml-6">
                    <div className="text-nutri-value font-bold">{this.props.value}{this.unit}</div>
                    <div className="text-subdued text-sm font-medium">{this.name}</div>
                </div>
            </div>
        )
    }
}

Nutrition.propTypes = {
    /**
     * The type of displayed nutrition data
     */
    type : PropTypes.oneOf(["calories","proteins","carbs","lipids"]).isRequired,
    /**
     * The amount ingested by the user
     */
    value : PropTypes.number.isRequired
}

Nutrition.defaultProps = {
    type : 'carbs',
    value : 100
}

export default Nutrition