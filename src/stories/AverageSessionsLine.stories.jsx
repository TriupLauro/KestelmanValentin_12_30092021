import React from "react";

import AverageSessionsLine from "../components/AverageSessionsLine";

export default {
    title : 'Components/AverageSessionLine',
    component : AverageSessionsLine
}

export const Example = (args) => <AverageSessionsLine {...args}/>

Example.args = {
    data: [
        {
            day: 1,
            sessionLength: 30
        },
        {
            day: 2,
            sessionLength: 40
        },
        {
            day: 3,
            sessionLength: 50
        },
        {
            day : 4,
            sessionLength: 10
        },
        {
            day : 5,
            sessionLength: 30
        },
        {
            day : 6,
            sessionLength: 45
        },
        {
            day : 7,
            sessionLength: 15
        }
    ]
}