import React from 'react';
import './App.css';

function hello() {
    alert('Hello IT-Kamasutra')
}


function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return (
        <div>
            This is App component
        </div>
    )
}


function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return (
        <div>
            <div>STAR</div>
        </div>
    )
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>

        </div>
    )
}

function AccordionTitle() {
    return (
        <div>
            <h3>Menu</h3>
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;

