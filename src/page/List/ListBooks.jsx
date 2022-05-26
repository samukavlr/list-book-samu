import React,{useState, useEffect} from 'react';
import Books from '../../components/Books/Books';
import axios from 'axios';
import styled from 'styled-components';
import listCss from './ListBooks.module.css';
import UIContainer from 'components/UI/Container/Container';



// const Container = styled.div`
//     display:flex;
//     justify-content:center;
// `;



const PagesListBooks=() =>{
 
       const [lbooks, setBooks] = useState([]);
       const [search, setSearch] = useState('');
       
  
       useEffect( () => {
        const params = {};
        if(search){
          params.title_like =search;
        }
       
  
      axios.get('https://apilistbooks.azurewebsites.net/books/', {params})
        .then(
          (response) => {
          // console.log(response.data);
          setBooks(response.data);
          }
        );
  
      }, [search] );
      return (
          <div >
            <UIContainer>
            <h1 className={listCss.listTitle}>Lista de Livros</h1>
            <a href="/create"> <button className={listCss.novolivro}>Incluir livro </button></a>
            <input className={listCss.lisInput} type="text"
            placeholder='Buscar'
            value={search}
            onChange={(ev) => setSearch(ev.target.value)} />         
              <section className={listCss.booksList}>
                {lbooks.map((books) => (
                  <Books books={books} key ={books.id}/>
                  ))
                }
              </section>
            </UIContainer>
          </div>
      )
  }
  
  export default PagesListBooks;

