import {Component} from "react";
import SvgSportseeLogo from "../assets/SportseeLogo";

/**
 * The top navigation bar with the SportSee logo (an Svg turned react component thanks to Svgr)
 * @Component
 */
class TopNav extends Component {
    render() {
        return (
            <nav className="flex bg-black text-white justify-around h-md items-center z-10 relative">
                <SvgSportseeLogo />
                <a href="#" className="block text-md">Accueil</a>
                <a href="#" className="block text-md">Profil</a>
                <a href="#" className="block text-md">Réglage</a>
                <a href="#" className="block text-md">Communauté</a>
            </nav>
        )
    }
}

export default TopNav