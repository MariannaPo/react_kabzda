import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

// function hello() {
//     alert('Hello IT-Kamasutra')
// }


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (

        <div className={'App'}>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>


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

