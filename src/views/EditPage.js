import React, {useState, useEffect} from 'react'
import Form from '../components/Form'
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';
import { navigate } from '@reach/router';

const EditPage = props => {
    const { id } = props;
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' +id)
            .then(res => {
                setAuthor(res.data)
                setLoaded(true);
            })
            .catch( err => {
                console.log(err)
            });
    })

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/" + id, data)
            .then(response => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
        }
    return(
        <div>
            <h1> Edit this author {author.name} </h1>
            {loaded && 
                <Form 
                    onSubmitHandler={onSubmitHandler}
                    initialName = {author.name}
                />
            }
            <DeleteButton />
        </div>
    )
}

export default EditPage;