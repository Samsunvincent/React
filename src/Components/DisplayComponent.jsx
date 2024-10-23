export default function DisplayComponent({displayData}){
    return(
        <>
           <h1>Name : {displayData.name}</h1>
           <h1>Email : {displayData.email}</h1>
           <h1>place : {displayData.place}</h1>
           <h1>pincode : {displayData.pincode}</h1>



        </>
    )
}