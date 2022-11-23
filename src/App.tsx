import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
// function hello() {
//     alert('Hello IT-Kamasutra')
// }


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState(false);
    let [switchOn, setSwitchOn] = useState(false)

    return (

        <div className={'App'}>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} />
            <OnOff on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <UncontrolledAccordion titleValue={'fkflokf'}/>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}


            {/*<PageTitle title={"This is App component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*<div>Article 1</div>*/}
            {/*<div>Article 2</div>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;

