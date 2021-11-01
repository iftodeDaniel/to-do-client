import React, {useState} from 'react';



const InputData = ({passSearchUpdate}) => {

    const [value, setValue] = useState('')

    const testInput = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        passSearchUpdate(value)
        console.log(value, 'this is data from inputData')
    }

    
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={testInput} />
        </form>
    )
}

export default InputData;