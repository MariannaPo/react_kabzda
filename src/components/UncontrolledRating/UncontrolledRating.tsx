import React, {useState} from "react";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    // bright: number
}

function UncontrolledRating(props: RatingPropsType) {

    let [bright, setBright] = useState(0)

    return (
        <div>
            <Star /><button onClick={()=>{setBright(1)}}>1</button>
            <Star /><button onClick={()=>{setBright(2)}}>2</button>
            <Star /><button onClick={()=>{setBright(3)}}>3</button>
            <Star /><button onClick={()=>{setBright(4)}}>4</button>
            <Star /><button onClick={()=>{setBright(5)}}>5</button>
        </div>
    );
}

type StarPropsType = {
    selected: boolean | number
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span> <b>STAR</b> </span>
    } else {
        return <span>STAR </span>
    }
}

export default UncontrolledRating;