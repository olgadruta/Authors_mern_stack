import React from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteButton = props =>{
    const {id} = props;
    const onClickHandler = e => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <button onClick={onClickHandler} >Delete</button>
    )
}

export default DeleteButton;