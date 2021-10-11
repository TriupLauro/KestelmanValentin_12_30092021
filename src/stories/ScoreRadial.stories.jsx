import React from "react";

import ScoreRadial from "../components/ScoreRadial";

export default {
    title : 'Components/ScoreRadial',
    component : ScoreRadial
}

export const Template = args => <ScoreRadial {...args} />

Template.args = {
    data : 0.45
}