import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import Accordion, {AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion stories',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            table: {
                category: 'Colors'
            }
        },
        onChange: {
            table: {
                category: 'Events'
            }
        },
        onClick: {
            table: {
                category: 'Events'
            }
        }
    }
};

let callback = action('accordion mode change event fired');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

export const MenuCollapsed2 = Template.bind({});
MenuCollapsed2.args = {
    titleValue:'Menu',
    collapsed:true,
    onChange:callback,
}

export const CollapsedMode = ()=> <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>
export const UncollapsedMode = ()=> <Accordion titleValue={'Users'} collapsed={false} onChange={callback}/>

export const ModeChanging = ()=> {
   const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'} collapsed={value} onChange={()=> setValue(!value)}/>
}