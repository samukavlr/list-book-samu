import React from 'react';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom';
import nbCss from './newbooks.module.css';
import UIContainer from '../../components/UI/Container/Container'
import UIButton from '../../components/UI/Button/Button'

 const initialvalue={
        title:'',
        imageUrl:'',
        url:'',
        price:0,
    }
function Newbooks({id}) {
   
     const [values, setValues]=useState(initialvalue);
     const navigate = useNavigate();
        
    
    
       
        
        function onchnage(ev){
            const {name, value }= ev.target;
            
            setValues({...values,[name]:value})        
        }
    
        useEffect(()=>{
            if(id){
                axios.get(`http://localhost:5001/books/${id}`)
                .then((response)=>{
                    setValues(response.data);
                })
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
            <h2>Cadastrar livros</h2>
            <form onSubmit={onSubmit}>
                <div className={nbCss.promotionFormGroup}>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onchnage}/>
                </div>

                <div className={nbCss.promotionFormGroup}> 
                    <label htmlFor="imageUrl">Url image</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={values.imageUrl} onChange={onchnage}/>
                </div>

                <div className={nbCss.promotionFormGroup}>
                    <label htmlFor="url">Url</label>
                    <input type="text" id="url" name="url" value={values.url} onChange={onchnage}/>
                </div>

                <div className={nbCss.promotionFormGroup}> 
                    <label htmlFor="price">Preço</label>
                    <input type="text" step="any" id="price" name="price" value={values.price} onChange={onchnage}/>
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
