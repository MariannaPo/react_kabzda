import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./Rating/Rating";

function hello() {
    alert('Hello IT-Kamasutra')
}


function App() {
    return (

        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            <div>Article 1</div>
            <Rating value={1}/>
            <Accordion title={'Im a one'}/>
            <Accordion title={'Im a MAN'}/>
            <div>Article 2</div>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={0}/>
        </div>
    );
}

function PageTitle(props: any) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;

