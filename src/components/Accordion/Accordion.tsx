import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    // AccordionTitle: AccordionTitlePropsType
    color?: string
}

export function Accordion (props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange} color={props.color}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string,
    onChange: () => void
    color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 style={{color: props.color ? props.color : 'black'}} onClick={(e)=>props.onChange()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;