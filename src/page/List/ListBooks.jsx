import React,{useState, useEffect} from 'react';
import Books from '../../components/Books/Books';
import axios from 'axios';

const PagesListBooks=() =>{
 
       const [lbooks, setBooks] = useState([]);
       
  
       useEffect( () => {
       
  
      axios.get('http://localhost:5000/books')
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

