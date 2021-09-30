import {Component} from "react";
import {NutritionDetails} from "../constants/NutritionDetails";

class Nutrition extends Component {
    constructor(props) {
        super(props);
        const valueHolder = NutritionDetails[this.props.type]
        this.name = valueHolder.fr
        this.unit = valueHolder.unit
        this.bgc = valueHolder.bgc
        this.icon = <valueHolder.icon className="opacity-100 m-auto" width="20" height="20"/>
    }

    render() {
        return (
            <div className="flex w-nutri-bg h-nutri-bg bg-light mb-10 rounded-md items-center justify-around">
                <div className={`bg-${this.bgc} w-nutri-icon h-nutri-icon flex rounded-md`}>
                    {this.icon}
                </div>
                <div>
                    <div className="text-nutri-value font-bold">{this.props.value}{this.unit}</div>
                    <div className="text-subdued text-sm font-medium">{this.name}</div>
                </div>
            </div>
        )
    }
}

export default Nutrition