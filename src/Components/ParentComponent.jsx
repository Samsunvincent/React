
import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import Formcomponent from "./FormComponent";

export default function ParentComponent(){
    console.log('ParentComponentrendering...');

    const [dataToDisplay , setDataToDisplay] = useState("");
    

    const handleSubmit = (data)=>{
        setDataToDisplay(data)
    }

    return (
        <>
            <Formcomponent onSubmit={handleSubmit}/>
            <DisplayComponent displayData={dataToDisplay}/>
        </>
    )
}