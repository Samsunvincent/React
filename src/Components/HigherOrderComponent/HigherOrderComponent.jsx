const withUpperCase = (WrapepdComponent) =>{
    return function({text, ...restprops}){
        const upperCaseText = text.toUpperCase();
        return <WrapepdComponent { ...restprops} text = {upperCaseText}/>
    }
}

//component

const MyComponent = ({text}) =><div>{text}</div>

// usage of HOC

const MyComponentWithUpperCase = withUpperCase(MyComponent)

export default MyComponentWithUpperCase