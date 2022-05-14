import React, {useEffect,useState} from 'react'
import fromCss from './From.module.css'
import{useNavigate} from 'react-router-dom'
import axios from 'axios';
import listCss from 'page/List/ListBooks.module.css'

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
    }


    return(
        <div>
            <h1 className={listCss.listTitle}>Lista de Livros</h1>
            <h2> New Book</h2>
            <form onSubmit={onSubmit}>
                <div className={formCss.promotionFormGroup}>
                    <label htmlFor="title">Título</label>
                    <input type="text" id="title" name="title" value={values.title} onChange={onchnage}/>
                </div>

                <div className={formCss.promotionFormGroup}> 
                    <label htmlFor="image">Url image</label>
                    <input type="text" id="image" name="image" value={values.imageUrl} onChange={onchnage}/>
                </div>

                <div className={formCss.promotionFormGroup}>
                    <label htmlFor="url">Url</label>
                    <input type="text" id="url" name="url" value={values.url} onChange={onchnage}/>
                </div>

                <div className={formCss.promotionFormGroup}> 
                    <label htmlFor="price">Preço</label>
                    <input type="text" step="any" id="price" name="price" value={values.price} onChange={onchnage}/>
                </div>
                <div className={card.promotionCardButton}>
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

        </div>
    )


}

export default ListForm
