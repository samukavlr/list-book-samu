import React, {useEffect,useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import nbCss from './newbooks.module.css';
import UIContainer from '../../components/UI/Container/Container'
import UIButton from '../../components/UI/Button/Button'
import axios from 'axios';

 const initialvalue={
        title:'',
        image:'',
        price:0,
        url:'',
    }
function Newbooks({id}) {
    // const id =useParams();
   
     const [values, setValues]=useState(id? null: initialvalue);
     const [acao, setAcao] = useState('Cadastrar')
     const navigate = useNavigate();
     console.log(id);   
    
    
       
        
        function onchnage(ev){
            const {name, value }= ev.target;
            
            setValues({...values,[name]:value})        
        }
    
        useEffect(()=>{
            if(id){
                axios.get(`http://localhost:5001/books/${id}`)
                .then((response)=>{
                    setValues(response.data);
                    console.log(response.data);
                })
                setAcao('Editar');
            }
    
        },[])
    
        function onSubmit(ev){
            ev.preventDefault();
    
            const method = id ? 'put' : 'post';
            const url = id 
                ? `http://localhost:5001/books/${id}` 
                : 'http://localhost:5001/books'
    
            axios[method](url, values)
                .then( (response) => {
                    navigate('/');
                })
  
        }
    
    return (
        <div >
            <UIContainer>
           <h1>Lista de Livros</h1>
            <h2>{acao} livros</h2>
            <form onSubmit={onSubmit}>
                <div className={nbCss.promotionFormGroup}>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onchnage}/>
                </div>

                <div className={nbCss.promotionFormGroup}> 
                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="image" value={values.image} onChange={onchnage}/>
                </div>

                <div className={nbCss.promotionFormGroup}> 
                    <label htmlFor="price">Preço</label>
                    <input type="text" step="any" id="price" name="price" value={values.price} onChange={onchnage}/>
                </div>

                <div className={nbCss.promotionFormGroup}>
                    <label htmlFor="url">Url</label>
                    <input type="text" id="url" name="url" value={values.url} onChange={onchnage}/>
                </div>

                <div >
                    <UIButton 
                    component="button"
                     type="submit">
                        Salvar
                    </UIButton>
                    <UIButton
                    to ="/"
                    component= {Link}
                    theme ="bordered-warning"
                    >
                    Cancelar
                    </UIButton>
                </div>
              

            </form>
            </UIContainer>
        </div>
    );
}

export default Newbooks
