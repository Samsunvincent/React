import { useState } from "react"

export default function Formcomponent({onSubmit}){

    const[inputData , setInputData] = useState({
        name : '',
        email : '',
        place : '',
        pincode : '',
    });

    const handleInputChange = (e)=>{
      
        // setInputData(e.target.value)

        if(e.target.name === "name"){
            console.log("name",e.target.value);

            setInputData({
                ...inputData,
                name : e.target.value,
            })
        }
        if(e.target.name === "email"){
            console.log("email",e.target.value);

            setInputData({
                ...inputData,
                email : e.target.value
            })

        }
        if(e.target.name === "place"){
            console.log("place",e.target.value);

            setInputData({
                ...inputData,
                place : e.target.value
            })

        }
        if(e.target.name === "pincode"){
            console.log("pincode",e.target.value);

            setInputData({
                ...inputData,
                pincode : e.target.value
            })

        }
       
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("form submitted...")

        onSubmit(inputData)

    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder ="Enter your name "onChange={handleInputChange}/>
                <input type="email" name="email" placeholder="Enter your email"  onChange={handleInputChange}/>
                <input type="text" name="place" placeholder="Enter your place"  onChange={handleInputChange}/>
                <input type="text" name="pincode" placeholder="Enter your pincode"  onChange={handleInputChange}/>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}