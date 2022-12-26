import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion,
};

let callback = action('UncontrolledAccordion mode change event fired');


export const ModeChanging = ()=> {
    return <UncontrolledAccordion titleValue={'Menu'}/>
}
