import SvgApple from "../assets/Apple";
import SvgFire from "../assets/Fire";
import SvgMeat from "../assets/Meat";
import SvgCheeseburger from "../assets/Cheeseburger";

/**
 * Data used inside the Nutrition component
 * The unit of the value
 * The french name
 * The name of the background color style
 * The icon corresponding (Svg made React component thanks to SvgR)
 */
export const NutritionDetails = {
    calories : {
        unit : 'kCal',
        fr : 'Calories',
        bgc : 'calories',
        icon : SvgFire,
        key : 'calorieCount'
    },
    proteins : {
        unit : 'g',
        fr : 'Protéines',
        bgc : 'proteins',
        icon : SvgMeat,
        key : 'proteinCount'
    },
    carbs : {
        unit : 'g',
        fr : 'Glucides',
        bgc : 'carbs',
        icon : SvgApple,
        key : 'carbohydrateCount'
    },
    lipids : {
        unit: 'g',
        fr : 'Lipides',
        bgc : 'lipids',
        icon : SvgCheeseburger,
        key : 'lipidCount'
    }
}