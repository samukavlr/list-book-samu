import React,{useState, useEffect} from 'react';
import Books from '../../components/Books/Books';
import axios from 'axios';

const PagesListBooks=() =>{
 
       const [lbooks, setBooks] = useState([]);
       const [search, setSearch] = useState('')
  
       useEffect( () => {const params = {};
       if(search){
         params.title_like =search;
       }
  
      axios.get('http://localhost:5000/books',params)
        .then(
          (response) => {
          // console.log(response.data);
          setBooks(response.data);
          }
        );
  
      }, [] );
      return (
          <div>
            

            {lbooks.map((books) => (
              <Books books={books} key ={books.id}/>
              )
              )
            }
          </div>
      )
  }
  
  export default PagesListBooks;

