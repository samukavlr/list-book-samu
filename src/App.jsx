import React from 'react';
import {Container} from 'react-bootstrap'
//import Header from './components/Header'
import Books from './components/Books/Books'

const books ={ 
        "title": "Programação Web com Node.js",
        "image": "https://m.media-amazon.com/images/I/4110e7iseFL.jpg",
        "price": 14.99,
        "url": "https://www.luiztools.com.br/livro-node-amazon",
         
}
function App() {
  return (
    <div>
      <Container>
        <h1>Lista de Livros</h1>
        <Books books= {books} />
      </Container>
    </div>
  );
}

export default App;

