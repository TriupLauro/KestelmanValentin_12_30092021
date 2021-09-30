import SvgApple from "../assets/Apple";
import SvgFire from "../assets/Fire";
import SvgMeat from "../assets/Meat";
import SvgCheeseburger from "../assets/Cheeseburger";


export const NutritionDetails = {
    calories : {
        unit : 'kCal',
        fr : 'Calories',
        bgc : 'calories',
        icon : SvgFire
    },
    proteins : {
        unit : 'g',
        fr : 'Protéines',
        bgc : 'proteins',
        icon : SvgMeat
    },
    carbs : {
        unit : 'g',
        fr : 'Glucides',
        bgc : 'carbs',
        icon : SvgApple
    },
    lipids : {
        unit: 'g',
        fr : 'Lipides',
        bgc : 'lipids',
        icon : SvgCheeseburger
    }
}