import React, {useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: 'input',
    //component: input,
};

export const UncontrolledInput = () => <input />;

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(event) => {
   const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    }/> - {value} </>;
}

export const GetValueOfUncontrolledInputBuButtonPress = () => {
    const [value, setValue] = useState('');
    return <><input id={'inputId'}/> <button onClick={(e)=>{
        const el = document.getElementById('inputId') as HTMLInputElement;
        setValue(el.value);

    }}>save</button> - actual value: {value} </>;
}

export const GetValueOfUncontrolledInputBuButtonPressTwo = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = ()=> {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    return <><input ref={inputRef} id={'inputId'}/> <button onClick={save}>save</button> - actual value: {value} </>;
}

export const ControlledInput = () => <input  value={'gbdkrvkdf'}/>;

