import React from "react";

import Nutrition from "../components/Nutrition";

export default {
    title : 'Components/Nutrition',
    component : Nutrition
}

const Template = (args) => <Nutrition {...args} />


export const Calories = Template.bind({})
Calories.args = {
    type : 'calories',
    value : 100
}

export const Proteins = Template.bind({})
Proteins.args = {
    type : 'proteins',
    value : 75
}

export const Carbs = Template.bind({})
Carbs.args = {
    type : 'carbs',
    value : 135
}

export const Lipids = Template.bind({})
Lipids.args = {
    type : 'lipids',
    value : 39
}