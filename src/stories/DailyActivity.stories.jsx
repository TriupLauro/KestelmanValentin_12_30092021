import React from "react";

import DailyActivity from "../components/DailyActivity";

export default {
    title : 'Components/DailyActivity',
    component : DailyActivity
}

export const Template = args => <DailyActivity {...args} />

Template.args = {
    data : [
        {
            day: '2020-07-01',
            kilogram: 70,
            calories: 240
        },
        {
            day: '2020-07-02',
            kilogram: 69,
            calories: 220
        },
        {
            day: '2020-07-03',
            kilogram: 70,
            calories: 280
        },
        {
            day: '2020-07-04',
            kilogram: 70,
            calories: 500
        },
        {
            day: '2020-07-05',
            kilogram: 69,
            calories: 160
        },
        {
            day: '2020-07-06',
            kilogram: 69,
            calories: 162
        },
        {
            day: '2020-07-07',
            kilogram: 69,
            calories: 390
        }
    ]
}