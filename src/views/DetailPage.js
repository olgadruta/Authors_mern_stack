import React, {useState, useEffect} from 'react'
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';


const DetailPage = props => {
    const {id} = props;
    const [author, setAuthor] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return(
        <div>
            <h1> {author.name} </h1>
            <DeleteButton id={author._id} />
        </div>
    )
}
export default DetailPage;