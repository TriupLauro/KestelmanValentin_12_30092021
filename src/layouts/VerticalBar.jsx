import {Component} from "react";
import Meditate from "../assets/Meditate";
import Swim from "../assets/Swim";
import Bike from "../assets/Bike";
import Dumbbell from "../assets/Dumbbell";

/**
 * The vertical bar at the left of the interface. Display various icons (Svg as React component thanks to SvgR)
 * @component
 */
class VerticalBar extends Component {
    render() {
        return (
            <div className="bg-black w-left-bar xl:h-screen -mt-v-bar flex flex-col justify-center items-center relative">
                <nav className="flex flex-col">
                    <button className="w-16 h-16 bg-white rounded-md mb-5"><Meditate /></button>
                    <button className="w-16 h-16 bg-white rounded-md mb-5"><Swim /></button>
                    <button className="w-16 h-16 bg-white rounded-md mb-5"><Bike /></button>
                    <button className="w-16 h-16 bg-white rounded-md"><Dumbbell /></button>
                </nav>
                <div className="text-white text-sm absolute bottom-copy w-max transform -rotate-90">Copiryght, SportSee 2020</div>
            </div>
        )

    }
}

export default VerticalBar