import React, {useEffect,useState} from 'react'
import fromCss from './From.module.css'
import{useNavigate} from 'react-router-dom'
import axios from 'axios';

const initialvalue={
    title:'',
    image:'',
    price:0,
    url:'',
}

const ListForm =({id}) => {
    const [values, setValues]=useState(initialvalue);
    const navigate = useNavigate();

    function onchnage(ev){
        const {name, value }= ev.target;
        setValues({...values,[name]:value})        
    }
    useEffect(()=>{
        if(id){
            axios.get(`http://localhost:5001/books${id}`)
            .then((response)=>{
                setValues(response.data);
            })
        }

    },[])
    function onSubmit(ev){
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id 
            ? `http://localhost:5000/promotions/${id}` 
            : 'http://localhost:5000/promotions'

        axios[method](url, values)
            .then( (response) => {
                navigate('/');
            })

    return(
        <div>

        </div>
    )


}

export default ListForm
