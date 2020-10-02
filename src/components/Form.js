import React, {useState} from 'react'

const Form = props =>{
    const { onSubmitHandler, initialName } = props;
    const [name, setName] = useState (initialName);
    return (
        <form onSubmit= {e => {onSubmitHandler (e, {name}) }}>
            <p>
                <label>Name</label>
                <input type="text" value={name} name="name" onChange={(e) => {setName(e.target.value)}} />
            </p>
            <p>
                <input type="submit" />
            </p>
        </form>
    )

}
export default Form;