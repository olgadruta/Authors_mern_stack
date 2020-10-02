import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';

const IndexPage = props => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((response) => {
                setAuthors(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return(
        <div>
            <h1>Favorite authors</h1>
            <Link to ="/create"> Add an author</Link>
            <ul>
                {authors.map((author, index) => {
                    return(
                        <li key={index}><Link to={"/" + author._id}> {author.name} </Link>| 
                        <Link to={"/" + author._id + "/edit"}>Edit</Link>|
                        <DeleteButton id={author._id} /> </li>
                    )
                 })}
            </ul>
        </div>
    )
}

export default IndexPage;